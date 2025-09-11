import * as z from "zod";

export function zodKeys<T extends z.ZodTypeAny>(schema: T): string[] {
  if (schema === null || schema === undefined) return [];
  if (schema instanceof z.ZodNullable || schema instanceof z.ZodOptional)
    return zodKeys(schema.unwrap());
  if (schema instanceof z.ZodArray) return zodKeys(schema.element);
  if (schema instanceof z.ZodObject) {
    const entries = Object.entries(schema.shape);
    return entries.flatMap(([key, value]) => {
      const nested =
        value instanceof z.ZodType
          ? zodKeys(value).map((subKey) => `${key}.${subKey}`)
          : [];
      return nested.length ? nested : key;
    });
  }
  return [];
}

const NamedObjectSchema = z.object({
  name: z.string().min(1),
});

export const ContentFieldsSchema = z.object({
  summary: z.string().min(1),
  description: z.string().min(1),
});

export const CardFieldsSchema = z.object({
  issuetype: NamedObjectSchema,
  summary: z.string().min(1),
  status: NamedObjectSchema,
  // updated: ResultDate;
  assignee: NamedObjectSchema.optional(),
  priority: NamedObjectSchema.optional(),
});

export function createResultIssueSchema<IssueFields extends z.ZodTypeAny>(
  fieldSchema: IssueFields,
) {
  return z.object({
    expand: z.string().min(1),
    id: z.string().min(1),
    self: z.string().min(1),
    key: z.string().min(1),
    fields: fieldSchema,
    renderedFields: fieldSchema.optional(),
  });
}

interface IssueCard {
  key: string;
  url: string;
  issuetype: string;
  summary: string;
  status: string;
  // updated: ResultDate;
  assignee?: string;
  priority?: string;
}

const CardResultsSchema = createResultIssueSchema(CardFieldsSchema);
type CardResults = z.infer<typeof CardResultsSchema>;
export function mapResultToCard(input: CardResults) {
  const result = CardResultsSchema.parse(input);
  const issueCard: IssueCard = {
    key: result.key,
    url: result.self,
    issuetype: result.fields.issuetype.name,
    summary: result.fields.summary,
    status: result.fields.status.name,
    // updated: ResultDate;
    // Might be null assignee
    assignee: result.fields.assignee?.name,
    // Might be null priority
    priority: result.fields.priority?.name,
  };
  return issueCard;
}
