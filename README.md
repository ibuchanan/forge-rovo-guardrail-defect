# Defect Guardrail Agent

[![Apache 2.0 license](https://img.shields.io/badge/license-Apache%202.0-blue.svg?style=flat-square)](LICENSE)

As [Wikipedia](https://en.wikipedia.org/wiki/Jira_(software)) explains:
> When launched in 2002, Jira was purely issue tracking software, targeted at software developers.

Although Jira has evolved into much more,
that oldest part of Jira means we know a thing or 2 about defects.
This project captures some of that experience in the form of an AI Agent
to evaluate the quality of a defect report (aka an issue or [bug](https://www.atlassian.com/software/jira/features/bug-tracking)).

You can install it directly using
[this link](https://developer.atlassian.com/console/install/364b791c-7ca6-4a31-a2a7-130a9c3ddfe8?signature=AYABeHQIL%2BMSOBmwN%2BywAh3VSlgAAAADAAdhd3Mta21zAEthcm46YXdzOmttczp1cy1lYXN0LTE6NzA5NTg3ODM1MjQzOmtleS83ZjcxNzcxZC02OWM4LTRlOWItYWU5Ny05MzJkMmNhZjM0NDIAuAECAQB4KVgoNesMySI2pXEz4J5S%2B4but%2FgpPvEEG0vL8V0Jz5cBU2MBu8MvLVy5EFmQhF23zwAAAH4wfAYJKoZIhvcNAQcGoG8wbQIBADBoBgkqhkiG9w0BBwEwHgYJYIZIAWUDBAEuMBEEDAoa9yjSuuHBhICxLgIBEIA7olkHXqYUDCxdjZEvrs1EG388PfZbXPtt9xFZjDGTOY69lhpYFX7Efcd4hHSFH1JWhiUkLRcjAgie0QoAB2F3cy1rbXMAS2Fybjphd3M6a21zOmV1LXdlc3QtMTo3MDk1ODc4MzUyNDM6a2V5LzU1OWQ0NTE2LWE3OTEtNDdkZi1iYmVkLTAyNjFlODY4ZWE1YwC4AQICAHig7hOcRWe1S%2BcRRsjD9q0WpZcapmXa1oPX3jm4ao883gHjex5neUqTTFEpwEIpTCqVAAAAfjB8BgkqhkiG9w0BBwagbzBtAgEAMGgGCSqGSIb3DQEHATAeBglghkgBZQMEAS4wEQQMpIRv%2FBFH6wmA6vKiAgEQgDu%2BQDTkVt1WdItQ15kMVBCvsIO%2FE1wJdBLbfx83PrfTDx4AyHwGtfzhhfR3%2FCEvCSB1EEfSaO41ixeXdgAHYXdzLWttcwBLYXJuOmF3czprbXM6dXMtd2VzdC0yOjcwOTU4NzgzNTI0MzprZXkvM2M0YjQzMzctYTQzOS00ZmNhLWEwZDItNDcyYzE2ZWRhZmRjALgBAgIAeBeusbAYURagY7RdQhCHwxFswh7l65V7cwKp%2BDc1WGoHAZkO%2FP2APA7ksU8IpNRFgI8AAAB%2BMHwGCSqGSIb3DQEHBqBvMG0CAQAwaAYJKoZIhvcNAQcBMB4GCWCGSAFlAwQBLjARBAxXn%2BbCNWa5MufVHa8CARCAO85TVo6JwsSPpDBpVL89Syc%2Bg2zy8PcyIuBDfoDvyVEswzd%2Fq4L3VP9JqdYhzpxsKIXvZX3BYwDEGBvKAgAAAAAMAAAQAAAAAAAAAAAAAAAAAF0UDGCpA%2BOTgtwEU8zSar%2F%2F%2F%2F%2F%2FAAAAAQAAAAAAAAAAAAAAAQAAADI1uvMn%2Fp3HNF96VZWEO9vaOp839%2FV1heO7S%2FDlEomIxdOevlxbJWX3dd%2FYgvKlGi6jOl0eD2ql5x%2FI%2BC9GbaqhTXY%3D&product=jira)
You can learn from it directly by reading
the [agent instructions](./prompts/agent-instructions.md) (ie the prompt).
You can explore interactively with "no code".
Just copy/paste those instructions into [Rovo Agent instructions](https://support.atlassian.com/rovo/docs/write-instructions-for-your-agent/).
You can explore as a "pro code" project by forking,
and modifying the prompt and code-based actions.

- **Rovo**. If you're new to Rovo,
[check out how it helps teams quickly discover knowledge across Atlassian and third-party SaaS apps with less time and effort.](https://www.atlassian.com/software/rovo)
- **Atlassian Forge**. If this is your first Forge app,
[try a simple "hello world" app first](https://go.atlassian.com/forge)

Questions?
Join the Rovo conversation in
[the Atlassian user community](https://community.atlassian.com/t5/Rovo/ct-p/rovo-atlassian-intelligence),
or the Forge conversation in
[the Atlassian developer community](https://community.developer.atlassian.com/c/rovo/138).

## Contributions

Contributions to the Forge Rovo Meta Prompting repo are welcome!
Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

Copyright (c) 2025 Atlassian US., Inc.
Apache 2.0 licensed, see [LICENSE](LICENSE) file.

[![With ❤️ from Atlassian](https://raw.githubusercontent.com/atlassian-internal/oss-assets/master/banner-with-thanks-light.png)](https://www.atlassian.com)
