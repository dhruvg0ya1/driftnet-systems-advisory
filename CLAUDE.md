# Standing rules — every workspace, every session
## Always end the turn with a closing summary
The closing summary must contain:
- **What was done**, as a list — including changes made
- **Every number he has to act on** — Costs, deadlines, quantities.
- **What is still open**, and what is specifically needed from him.
- **Corrections** to anything said earlier.

## How to apply
- Use headings and tables so it stays scannable. The summary comes AFTER all tool work, agents and commits are finished. Order the closing summary by what matters to Dhruv, with money and deadlines first.

## Never credit Claude in a commit
Attribution for git commits and pull requests you create from here on:
- Never add the trailer `Co-Authored-By: Claude` or any `anthropic.com` address
- Commits are authored by the account that made them.

## Never run an agent on Fable
The rule: no subagent ever runs on the Fable model. That covers the Agent tool, every `agent()` inside a Workflow, background agents and agent definitions, in every workspace. When an agent is used, it runs on the most capable model available (Opus, today) at the highest effort.
