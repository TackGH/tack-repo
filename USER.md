# USER.md - About Your Human (persisted preferences)

- Preferred models:
  - Chat & reasoning: openai/gpt-5-mini (default)
  - Higher‑quality reasoning: openai/gpt-5.2 (use on explicit request)
  - Coding / tool runs: openai/gpt-5.1-codex (only for code/tool tasks)

- Model routing policy:
  - Default chat uses gpt-5-mini.
  - Do not auto-upgrade via classifier rules (user preference). Upgrades to gpt-5.2 or codex require explicit user request or are triggered by tool runs.
  - Tool runs (mcporter, shell, compile, codegen) always use codex.

- Notes:
  - This preference is enforced per-session by the assistant and persisted here for future sessions.
  - No secrets or API keys are stored in this file.

Last updated: 2026-02-27T03:11:00+08:00
