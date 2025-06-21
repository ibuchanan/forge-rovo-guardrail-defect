interface NamedObject {
  name: string;
}

export interface ContentFields {
  summary: string;
  description: string;
}
export const contentFields = ["summary", "description"];

export interface CardFields {
  issuetype: NamedObject;
  summary: string;
  status: NamedObject;
  // updated: ResultDate;
  assignee?: NamedObject;
  priority?: NamedObject;
}
export const cardFields = [
  "issuetype",
  "summary",
  "status",
  "assignee",
  "priority",
];

export interface ResultIssue<T> {
  expand: string;
  id: string;
  self: string;
  key: string;
  fields: T;
  renderedFields?: T;
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

export function mapResultToCard(input: ResultIssue<CardFields>) {
  const issueCard: IssueCard = {
    key: input.key,
    url: input.self,
    issuetype: input.fields.issuetype.name,
    summary: input.fields.summary,
    status: input.fields.status.name,
    // updated: ResultDate;
    // Might be null assignee
    assignee: input.fields.assignee?.name,
    // Might be null priority
    priority: input.fields.priority?.name,
  };
  return issueCard;
}
