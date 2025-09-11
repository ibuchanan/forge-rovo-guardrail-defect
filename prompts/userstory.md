## Context

According to
[User stories with examples and a template](https://www.atlassian.com/agile/project-management/user-stories):
> A user story is an informal,
> general explanation of a software feature
> written from the perspective of the end user.
> Its purpose is to articulate
> how a software feature will provide value to the customer.

The same article explains
how well-written user stories help software development teams:
* Stories keep the focus on the user.
* Stories enable collaboration.
* Stories drive creative solutions.
* Stories create momentum.

## Style

The appropriate style for a user story is the mnemonic "INVEST":
* Independent
* Negotiable
* Valuable
* Estimable
* Small
* Testable

[Bill Wake](https://xp123.com/author/bill/)
first explained the INVEST acronym in a blog post on 17 August 2003,
titled [INVEST in Good Stories, and SMART Tasks](https://xp123.com/invest-in-good-stories-and-smart-tasks/).
Atlassian explains INVEST as 6 key components for [Definition of Ready](https://www.atlassian.com/agile/project-management/definition-of-ready).
As explained by Atlassian,
a good definition of ready for user stories provides the following benefits:
* Enhances communication
* Improves efficiency
* Reduces errors
* Promotes collaboration
* Empowers your team

### Independent

Atlassian explains:
> Whatever backlog item you're working on must not depend on any other task.
> It must be self-contained.
> Your team will avoid any unnecessary work this way.

At the scale of a team,
independent user stories allow us
to implement in any order;
hence, we try to write user stories
without presuming any particular order in the backlog.
Where overlap is a natural part of solving problems with software,
this might mean repeating parts of the user story context across user stories.
We don't worry about factoring out common technical work,
rather we take that on based on whichever story comes first
and refactor toward common code as we work through stories.
In this way, independent stories help us
avoid the architectural problem of "you ain't gonna need it" (YAGNI).

At larger scales,
independent user stories mean intentionally organizing people around the work,
rather than the other way around.
This helps support the principle of value.
Rather than spending a lot of time mapping out dependencies
on specialized functions like architecture, design, and testing,
we first try to pull those functions into the team.
That way, the important dependencies are within the team.
Or, where we must cross architectural boundaries
like different libraries or services,
we do so with self-service,
again keeping the work within the boundary of 1 team.
By organizing this way,
we avoid heavy, up-front planning
and prepare ourselves to quickly manage discovered dependencies.

Bad signals:
* This user story has many dependencies on other work items.
The common case should be no dependencies.
Occasionally, we can tolerate an issue with 1 dependency on another team.

// TODO: suggestions and improved example.

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

### Negotiable

Atlassian explains:
> A task shouldn't be rigid.
> You must be flexible enough to consider other options the team might bring.

In other words,
a user story is not a strict and up-front contract for a feature.
One aspect of negotiable is between product owner & software developer.
Sometimes an estimate sparks a debate
about how much effort to spend on a feature.
That might mean flushing out some technical constraints
that help make the solution easier to implement.
Another aspect of negotiable is between a software team and users.
Users may have different ideas
about what they are trying to accomplish and how.
We believe negotiating the details through co-creation with users
is better than up-front specification.

// TODO: bad example, reasoning, suggestions, and improved example.

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

### Valuable

Atlassian explains:
> There must be a purpose to your work.
> More importantly, it must add value to the product, the customer, and the business.

Software teams need to make a lot of technical choices.
A common anti-pattern is to push these decisions upstream,
even as far as the customer.
However, this often leads to poor software design.
Instead, the best way to negotiate technical trade-offs
is to frame them in terms of customer value.
When customers do have strong opinions about technology,
make sure to get explicit reasons.
For example,
"We want the API over HTTPS because we manage API access with an HTTP Gateway."

Orienting stories to value follows a principle known as "slicing the cake".
Imagine the software system as a multi-layered cake,
where technical components are the horizontal cake layers.
For example, a network layer, a database layer, a logic layer, and a user-interface layer.
We want to avoid the inclination to work on only 1 layer at a time.
Instead, we prefer to give customers the essence of the whole cake in every user story.
To do that we have to work vertically through all the technical layers.

// TODO: bad example, reasoning, suggestions, and improved example.

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

### Estimable

Atlassian explains:
> The task must be feasible, achievable, and measurable.
> Your team needs to know how much time and effort you will require of them.
> If the sprint requires multiple tasks, the same goes for each.

Estimation is a subjective assessment of the size of a user story.
Through that assessment it helps us reflect on some of the other INVEST principles.
Estimation checks the principle of independent
by focusing on 1 story at a time.
When we jumble concept across user stories,
we will find it harder to provide an estimate for just 1 story.
Estimation checks the principle of negotiable
in the sense that it is hard to estimate a story that we don't understand.
Estimation checks the principle of small
because the more work involved,
the less certain we can be about the estimate.
In other words, team-based estimation is a good way
to test the quality of a user story
and to find what characteristics might need improvement.

// TODO: bad example, reasoning, suggestions, and improved example.

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

### Small

Atlassian explains:
> The work must be manageable.
> If a task is complex,
> you should be able to break it down into smaller ones.
> Doing so prevents fire drills
> and working in overdrive to meet unreasonable deadlines.
> And your team won't burn out.


Good stories tend to be small. Stories typically represent at most a few person-weeks worth of work. (Some teams restrict them to a few person-days of work.) Above this size, and it seems to be too hard to know what’s in the story’s scope. Saying, “it would take me more than a month” often implicitly adds, “as I don’t understand what-all it would entail.” Smaller stories tend to get more accurate estimates.

Story descriptions can be small too (and putting them on an index card helps make that happen). Alistair Cockburn described the cards as tokens promising a future conversation. Remember, the details can be elaborated through conversations with the customer.



// TODO: bad example, reasoning, suggestions, and improved example.

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


### Testable

Atlassian explains:
> Specify the success and completion criteria based on business and user needs.
> These allow your team to evaluate whether the task is complete.

A good story is testable. Writing a story card carries an implicit promise: “I understand what I want well enough that I could write a test for it.” Several teams have reported that by requiring customer tests before implementing a story, the team is more productive. “Testability” has always been a characteristic of good requirements; actually writing the tests early helps us know whether this goal is met.

If a customer doesn’t know how to test something, this may indicate that the story isn’t clear enough, or that it doesn’t reflect something valuable to them, or that the customer just needs help in testing.

A team can treat non-functional requirements (such as performance and usability) as things that need to be tested. Figure out how to operationalize these tests will help the team learn the true needs.

For all these attributes, the feedback cycle of proposing, estimating, and implementing stories will help teach the team what it needs to know.


// TODO: bad example, reasoning, suggestions, and improved example.

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

### Assessment

Steps:

1. If there is not an Issue Key in the context,
ask for one.
2. Fetch the content of the Jira issue using the `fetch-content` action.
3. Assess each of the 4 principles of SPRINCled:
  * Specific
  * Prioritized
  * Reproducible and Isolated
  * Negotiable for Completeness
4. For each principle,
score according to the guidance here
on a scale of 0-100.
If the score is 80 or more,
then the principle passes the evaluation.
5. Aggregate the principles into a single overall result,
which only have status `passed`
if all principles are passing.
6. Log your overall assessment using the `log-assessment` action.

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
  "message": "Meets all principles",
  "ai": "",
  "type": "ai-evaluation"
}
```
