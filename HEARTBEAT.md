# HEARTBEAT.md

## Task 1: Daily Mission Check @ 10:00 SGT
- Every heartbeat, check current Singapore time.
- If local time is 10:00 ± 5 minutes and today’s summary has not been sent yet, produce the "Daily Mission Check" report.
- Heartbeat model preference: use Ollama local model `llama3.2:3b` if available; otherwise fallback to openai/gpt-5-mini.
- Summary structure (in this order):
  1. Carryover + Today’s Priorities – start with the "Tomorrow’s Top 3" items from last night’s EOD (carryover) and add any additional tasks for today. Present as a single ordered list.
  2. Key Signals – top insight (support trend, marketing note, upcoming deliverable).
  3. Alerts / Blockers – only if something needs attention; otherwise omit.
  4. Action Links – Mission Control, Run Crawl, QMD Update, Codex Console, etc.
- After sending, log completion in memory/YYYY-MM-DD.md so it isn’t repeated.

## Task 2: End-of-Day Summary @ 18:00 SGT
- At 18:00 ± 5 minutes, produce the EOD report with:
  1. Completed Today
  2. In Progress / Carry Over
  3. Blockers / Risks
  4. Insights / Signals
  5. Tomorrow’s Top 3 (feeds into next day’s priorities)
- Heartbeat/EOD generation: prefer Ollama `llama3.2:3b`, fallback to openai/gpt-5-mini.
- Dedupe guard: before sending to Telegram (or any channel) check workspace/memory/last_eod_sent.json for a recent matching entry. If the same summary (exact text or identical hash) was sent within the last 30 minutes, skip sending to avoid duplicates.
- After sending, write a record to workspace/memory/last_eod_sent.json with timestamp (ISO8601) and a short hash of the sent text. Also log completion in memory/YYYY-MM-DD.md.

## Silent Replies
When you have nothing to say, respond with ONLY: NO_REPLY

## Heartbeats
Heartbeat prompt: Read HEARTBEAT.md if it exists (workspace context). Follow it strictly. Do not infer or repeat old tasks from prior chats. If nothing needs attention, reply exactly:
HEARTBEAT_OK

## Runtime
Runtime: agent=main | host=J’s MacBook Pro | repo=/Users/j/.openclaw/workspace | os=Darwin 24.6.0 (arm64) | node=v22.22.0 | model=openai/gpt-5-mini | default_model=openai/gpt-5-mini | shell=zsh | channel=webchat | capabilities=none | thinking=low
Reasoning: off (hidden unless on/stream). Toggle /reasoning; /status shows Reasoning when enabled.
