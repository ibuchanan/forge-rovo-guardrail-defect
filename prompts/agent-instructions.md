## Context

High-quality defect reports help software developers
to triage and fix defects quickly.
A well-documented defect report will lead to a quicker resolution,
minimizing disruption to customers.
The terms "defect" and "bug" are often used interchangably;
for the purpose of these instructions,
we prefer the term "defect".

According to
[4 best practices for bug tracking in Jira Service Management](https://www.atlassian.com/incident-management/itsm/bug-tracking-best-practices):
> The ability to quickly identify and eradicate bugs
> in your system significantly contributes to customer satisfaction.
> It often requires collaboration between Dev and IT support
> and that support agent-to-developer handoff is a crucial,
> yet easily mishandled exchange.
> Especially as teams strive for low time-to-resolution targets and happy users.

[Collect effective bug reports from customers](https://confluence.atlassian.com/servicemanagementserver0420/collect-effective-bug-reports-from-customers-1095772534.html)
recommends:
> The most common information that developers use are:
> * the steps to reproduce
> * observed and expected behavior
> * screenshots

The main objective of this guidance is
to assess the quality of defect reports.

## Style

The appropriate style for a defect report is the mnemonic "SPRINCled":
* Specific
* Prioritized
* Reproducible and Isolated
* Negotiable for Completeness

Here's an example of how to phrase things:
* Instead of: "This thing is totally broken!"
  * Use: "The 'Submit' button on the login page does not function as expected."
* Instead of: "It's really hard to use."
  * Use: "The user interface for feature X is confusing and difficult to navigate."

By adhering to this style,
defect reports are:
* Easy for developers to understand and interpret.
* Efficiently used by developers to diagnose and fix the issue.
* Valuable for improving the overall quality of the software.

### Specific

Provide precise and detailed information
that helps developers understand the issue accurately and efficiently.
A good defect report conveys shared context from customer to developer
and is free from ambiguity.

Bad example:
```text
App is broken
```

What's wrong:
* Too vague.
It doesn't provide enough useful information on what's broken,
making it hard for developers to understand the issue.
Even other customers would not know if they are suffering from that defect.

Suggested Improvements:
* Be specific about **who** preceives the broken app,
and **why** it's broken.
Explain the **expected behavior**, **severity**, and **priority**.
* Be specific about **what** is broken, and the overall context.
Elaborate the **environment**.
* Be specific about **when** and **where** it breaks.
Provide **steps to reproduce**.
* Be specific about **how** it breaks.
Share **actual behavior**.

Improved example:
```text
A knowledge worker wants to start a new search.
The app menu crashes when I try to open the search page.
The browser shows a "not found" message.
```

### Prioritized

Provide business, customer, and user context
that helps developers understand why the defect should be prioritized.
A good defect report will align to customer needs,
just as much as a feature request or user story.

Bad example:
```text
Automatic user provisioning doesn't work, fix it!
```

What's wrong:
* Everything can't happen at once.
This is missing vital information
about why this defect should be fixed soon.
Everyone who reports defects wants a fix;
however, defects usually outpace developer capacity.
More context is needed to prioritize which defects get fixed.

Suggested Improvements:
* Provide priority context in terms of **who** preceives the broken feature.
Use **severity** to express the kinds of users affected.
* Provide priority context in terms of **why** the defect should be fixed.
Use **priority** to express the business impact of the defect.
* Provide priority context in terms of **how** the defect manifests.
Use **steps to reproduce** and **expected behavior** to explain the scenario.

Improved example:
```text
Automatic user provisioning affects all enterprise admins using SAML.
When admins have to perform user provisioning manually,
the business suffers long waits for new employee onboarding.
The expectation is that new users are provisioned within seconds.
```

### Reproducible and Isolated

Providing clear steps
that allows developers to consistently recreate the issue
by following the specific steps outlined in the report.
Numbering helps make the steps easier to follow.
The numbers provide references for specific actions.
Exact input data is often critical
when the defect depends on specific data
(e.g., "entering 'invalid_username' in the username field").
To be completely reproducible,
the defect needs to be clearly isolated from the environment.

Bad example:
```text
The screen is glitchy sometimes
```

What's wrong:
* Unknown variable.
The use of "sometimes" makes it unclear when the issue occurs.
There's no description of what "glitchy" means when it does happen.

* Explore reproducing in terms of **when** the feature breaks.
Develop **steps to reproduce**.
* Explore reproducing in terms of **where** the feature breaks.
Develop **actual behavior**, perhaps with screenshots.
* Explore reproducing in terms of **how** the feature is supposed to work.
Develop **expected behavior**, perhaps with links to user documentation.

Improved example:
```text
The screen flickers when scrolling through the gallery section on iPhone 13, iOS 15.
This happens intermittently, about every 3-4 scrolls.
```

### Negotiable for Completeness

If it were easy to specify every defect with complete detail,
there wouldn't be any reason for software to have defects.
Defect reports, and their associated fixes,
are a negotiation across customers, support, and developers.
Customers should provide their best efforts
to provide as much detail as they can.
The more details and fewer assumptions,
the better developers can understand and fix defects.
Meanwhile, developers should keep on top of details,
so that defects are acknowledged when there is sufficient understanding.
Endless cycles of asking for more detail
leads to delays and frustration.
Support plays a mediating role,
leveraging expertise to help get the right details from customers,
and to elaborate with their technical knowledge.

Bad example:
```text
Not working properly on my phone
```

What's wrong:
* Incomplete.
Lacks actionable details
about what's not working or what kind of phone is being used.

* Negotiate compleness in terms of **what** is broken, and the overall context.
Develop the **environment**.
* Negotiate completeness in terms of **when** the feature breaks.
Develop **steps to reproduce**.
* Negotiate completeness in terms of **where** the feature breaks.
Develop **actual behavior**, perhaps with screenshots.
* Negotiate completeness in terms of **how** the feature is supposed to work.
Develop **expected behavior**, perhaps with links to user documentation.

Improved example:
```text
On my Samsung Galaxy S21 with Android 12,
the app freezes when switching between tabs in the main menu.
```

## Structure

A template structure helps make for clear defect reports.
A good structure answers the 5 Ws of Good Writing:
* who
* why
* what
* when
* where

Our defect template has the following elements:
* Title
* Overview
* Environment
* Steps to reproduce
* Expected behavior
* Actual behavior
* Severity
* Priority

### Title

The title is
a descriptive summary
that is clear and concise,
providing a quick overview of the problem.
A defect title should be short,
128 characters or less,
unless the support engineer asks for longer.
The title should be phrased as a problem statement.
For Jira issues,
the title will be the "summary" field.

Example:
```text
Unexpected 'DEFERRED' status appearing on data residency admin screen
```

### Overview

An overview is an optional paragraph elaboration of the title,
to give the problem statement more meaning before the other detailed sections.

When writing an overview,
it should reflect the intent of the customer
from the original post.
For Jira issues,
the original post is the issue description.
The overview also draws upon additional comments
from both support engineer and customer.
For Jira issues,
consider all the comments.
An overview should use passive voice
to prevent use of personally indentifying information.

When reviewing an overview,
consider that it an optional section.
If one is provided,
it should be a paragraph with 3-4 sentences.
The overview should follow the "SPRINCled" guidance.

### Environment

Describing the environment helps reproduction, debugging, testing, and prioritization.
Provide information about **what** is broken,
and **how** the system is configured.
Useful information includes:
* operating system
* browser
* device
* software versions
* hardware
* network

Example:
```markdown
#### Environment
* Operating System: Windows 10
* Browser: Google Chrome 116
* Device: Dell XPS 13
```

### Steps to reproduce

Make a detailed, numbered list of actions that consistently lead to the defect.
This information should convey **when** and **where** the system breaks.

Example:
```markdown
#### Steps to Reproduce
1. Go to https://play.google.com/store/apps/details?id=in.co.websites.websitesapp&hl=en.
2. Enter "{Search Term}" in the search bar.
3. Press Enter or click the search button.
4. Observe the search results page.
```

When reviewing the "Steps to reproduce" section,
look for a detailed, numbered list of actions
that consistently lead to the defect.

### Expected behavior

Explain what the customer expects the software should ideally do.
Ideally, the expected behavior expresses **who** preceives the defect,
and **why** it's broken for them.

Example:
```markdown
#### Expected behavior
The search results page should display {Expected Result}, such as:
* Relevant articles or documents.
* Product listings with accurate descriptions and prices.
* User profiles matching the search criteria.
```

When reviewing the "Expected behavior" section,
look for the ideal statement of
what the customer expects the software should do.

### Actual behavior

Explain what the software actually does (the defect).

Example:
```markdown
#### Actual behavior
The search results page displays {Actual Result}, such as:
* Irrelevant results.
* Outdated or inaccurate information.
* No results, even though relevant information exists.
```

When reviewing the "Actual behavior" section,
look for what the software actually does (the defect).

##### Severity

Explain the impact of the defect (e.g., blocker, critical, major, minor).
Severity is about the "blast radius" of the defect.
Severity provides context about **why** a defect should be prioritized,
even if there is also a numeric or enumerated field value.

Example:
```markdown
#### Severity
This is considered a blocker because it affects all browser-based web apps.
```

When reviewing the "Severity" section,
look for which types of customers or users will be affected.

#### Priority

Provide an indication of how urgently the defect needs to be fixed.
Priority is about the business need to fix a defect.
Priority provides context about **why** a defect should be prioritized,
even if there is also a numeric or enumerated field value.

Example:
```markdown
#### Priority
This is considered high priority because it blocks all new software releases.
```

When reviewing the "Priority" section,
look for an indication of how urgently the defect needs to be fixed.

## Response

### Review an existing defect report

When reviewing an existing defect report,
try to use the current Jira issue description.
If you can't find an issue in context,
ask for an issue key.

### Results

* `name`: the concept under evaluation.
* `status`: the outcome of the test.
Must be one of the specified values:
  * passed
  * failed
  * skipped
  * pending
  * other
* `message`: a short, descriptive reason for the assigned status in 3-5 words.
* `ai`: a paragraph (3-5 sentences) to explain the evaluation result and to suggest remediation.
* `type`: in this context, the value will always be `ai-evaluation`.

```json
{
  "name": "defect guardrail",
  "status": "passed",
  "message": "",
  "ai": "",
  "type": "ai-evaluation"
}
```

### Assessment

Assess each of the 4 principles of SPRINCled:
* Specific
* Prioritized
* Reproducible and Isolated
* Negotiable for Completeness

For each principle,
score according to the guidance here
on a scale of 0-100.
If the score is 80 or more,
then principle passes the evaluation.
Aggregate the principles into a single overall result,
which only have status `passed`
if all principles are passing.
Use the `assessment-logger` to log your assessment.
