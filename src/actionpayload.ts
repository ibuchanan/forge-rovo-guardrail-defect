import { CommonEvent } from "./forge/events";
import { RovoContext } from "./rovo/action";

export interface LogAssessmentPayload extends CommonEvent {
  assessment: string;
  context: RovoContext;
}

export interface FetchContentFromIssuePayload extends CommonEvent {
  issue: string;
  context: RovoContext;
}
