WORKFLOW_AUTO.md

Startup & Memory Persistence Policy (Optimised)

Startup behaviour:
- On session startup (after /new or /reset), the assistant MUST read these small, required files if present: SOUL.md, USER.md, IDENTITY.md, HEARTBEAT.md, WORKFLOW_AUTO.md, and today's memory file memory/YYYY-MM-DD.md (if present).
- Do NOT auto-load the full MEMORY.md or older daily files at startup.

Daily files and retention:
- Daily memory files (memory/YYYY-MM-DD.md) are kept indefinitely unless explicitly deleted by the user. Do NOT compact or delete them automatically.
- Daily files are the raw source-of-truth for that day's events and actions.

Curated long-term index (MEMORY.md):
- MEMORY.md is a small, curated index used for high-signal, long-term facts (decisions, preferences, persistent project facts).
- After each approved EOD summary, the assistant will append a short curated entry to MEMORY.md (title, 1-line summary, tags, and pointer to memory/YYYY-MM-DD.md#line).
- The assistant will check for duplicates using a content hash and skip adding duplicates.

On-demand recall (efficient retrieval):
- Before answering questions about past work, decisions, dates, people, or preferences, the assistant will run a semantic search over MEMORY.md + memory/*.md and then use memory_get() to fetch only the relevant snippet lines returned by the search.
- The assistant will not load large files into context unnecessarily; it will fetch only what is needed.
- If a query returns no good hits, the assistant will explicitly tell the user and offer to run a broader search.

Index & fast lookups:
- The assistant will maintain memory/index.json (tags → entries with pointers + hashes) to speed tag-based lookups without scanning full files.

Heartbeats LLM routing:
- Heartbeat generation will prefer Ollama local model "llama3.2:3b" when available.
- If Ollama is unavailable, heartbeats will fall back to the default chat model (openai/gpt-5-mini).
- HEARTBEAT.md will specify the preferred model and fallback behaviour.

Logging & auditability:
- Every autonomous write (append to daily file, MEMORY.md, index updates) is timestamped and recorded in the current day's memory file with an explanation and source.
- EOD sends are logged in memory/last_eod_sent.json with timestamp + hash for dedupe.

User instruction recorded: keep daily files indefinitely; use on-demand search and a small curated MEMORY.md; maintain index.json for fast retrieval; tie EOD → MEMORY.md after approval; use Ollama llama3.2:3b for heartbeats with fallback to openai/gpt-5-mini.
