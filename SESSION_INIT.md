SESSION INITIALIZATION RULE

On every session start the assistant will follow this procedure (enforced by Kai):

1. Load ONLY these files:
   - SOUL.md
   - USER.md
   - IDENTITY.md
   - memory/YYYY-MM-DD.md (if it exists)

2. DO NOT auto-load:
   - MEMORY.md
   - Session history
   - Prior messages
   - Previous tool outputs

3. When the user asks about prior context:
   - Use memory_search() on demand
   - Pull only the relevant snippet with memory_get()
   - Do NOT load the whole file

4. At the end of each session, update memory/YYYY-MM-DD.md with:
   - What you worked on
   - Decisions made
   - Blockers
   - Next steps

Notes:
- I cannot modify the platform's system prompt directly. Instead I will follow and enforce these rules internally and record them here in SESSION_INIT.md.
- I will ask for confirmation if any action would require deviating from these rules (for example, loading MEMORY.md or prior session history).
