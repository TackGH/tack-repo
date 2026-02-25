# Local OpenClaw settings (user-requested changes)

The following runtime flags were set (record only — these files live in the workspace for traceability). Note: I cannot change the underlying platform/system config outside this workspace; I will apply and respect these behaviours from within Kai's control flows when possible.

- compaction.memoryFlush.enabled: true
- memorySearch.experimental.sessionMemory: true
- memory.backend: qmd (enabled)

What these do (explanations):

1) compaction.memoryFlush.enabled = true
   - Meaning: When enabled, the assistant will proactively compact and flush short-term/session memory into the persistent memory store at appropriate times (for example, at end-of-session or when a memory chunk grows beyond a threshold).
   - Effect (from Kai's side): I will ensure important session content is summarized and appended to memory/YYYY-MM-DD.md at session end, and perform periodic compaction so the memory files stay concise and focused. This reduces noise in memory and keeps long-term records small and relevant.
   - Limits: This is a workspace-side behaviour and does not change any platform-level memory retention policy. It only affects how Kai writes and maintains the local memory files.

2) memorySearch.experimental.sessionMemory = true
   - Meaning: This enables an experimental session-aware memory search mode where searches prefer recent session memory snippets and can include lightweight session-context summaries.
   - Effect (from Kai's side): When you ask about prior context, I'll prefer searching today's and recent session files first, return concise snippets, and avoid loading whole memory files. I'll use memory_search + memory_get as you requested, and the experimental mode will bias results toward session memory when relevant.
   - Limits: Marked experimental — results may be less stable than the default memory search. Also, I do not actually change the platform's search engine; this flag tells Kai to behave as if session-aware search is enabled and to implement the preference logic in how I call memory_search and pick snippets.

3) memory.backend = qmd
   - Meaning: Opt-in to use QMD as the retrieval backend (local-first sidecar combining BM25 + vectors + reranking). Markdown files remain the source of truth; Kai will shell out to the QMD CLI for retrieval instead of the built-in SQLite indexer when this is enabled.
   - Prerequisites & notes:
     - QMD is experimental and disabled by default; you've opted in.
     - QMD CLI must be installed separately (recommended: bun install -g https://github.com/tobi/qmd or download a release) and the `qmd` binary must be on the gateway's PATH.
     - QMD requires an SQLite build that allows extensions (on macOS: `brew install sqlite`).
     - QMD runs locally via Bun + node-llama-cpp and will auto-download GGUF models from HuggingFace on first use (no separate Ollama daemon required).
     - The gateway will run QMD in a self-contained XDG home under ~/.openclaw/agents/<agentId>/qmd/ by setting XDG_CONFIG_HOME and XDG_CACHE_HOME. Ensure those directories are writable.
     - OS: macOS and Linux supported; Windows via WSL2 recommended.
   - What I will do from Kai's side:
     - When you ask for memory search, I'll prefer calling QMD CLI (if available) for retrieval.
     - If QMD is not present or fails, I'll fall back to the existing memory_search toolchain and notify you.

Current system check:
- qmd binary on PATH: not found (I checked with `which qmd`).

Next steps I can take for you:
- Attempt to install qmd CLI automatically (requires Bun and network access) — ask before I install.
- Guide you through installing QMD manually and verifying the environment (commands for Bun, SQLite, PATH updates).
- Create the .openclaw agent qmd directory structure and set XDG env vars when you want to run QMD.

Tell me how you'd like to proceed.