# HEARTBEAT.md

## Task 1: Daily Mission Check @ 10:00 SGT
- Every heartbeat, check current Singapore time.
- If local time is 10:00 ± 5 minutes and today’s summary has not been sent yet, produce the "Daily Mission Check" report.
- Summary structure (in this order):
  1. **Carryover + Today’s Priorities** – start with the "Tomorrow’s Top 3" items from last night’s EOD (carryover) and add any additional tasks for today. Present as a single ordered list.
  2. **Key Signals** – top insight (support trend, marketing note, upcoming deliverable).
  3. **Alerts / Blockers** – only if something needs attention; otherwise omit.
  4. **Action Links** – Mission Control, Run Crawl, QMD Update, Codex Console, etc.
- After sending, log completion in memory/YYYY-MM-DD.md so it isn’t repeated.

## Task 2: End-of-Day Summary @ 18:00 SGT
- At 18:00 ± 5 minutes, produce the EOD report with:
  1. Completed Today
  2. In Progress / Carry Over
  3. Blockers / Risks
  4. Insights / Signals
  5. Tomorrow’s Top 3 (feeds into next day’s priorities)
- Dedupe guard: before sending to Telegram (or any channel) check workspace/memory/last_eod_sent.json for a recent matching entry. If the same summary (exact text or identical hash) was sent within the last 30 minutes, skip sending to avoid duplicates.
- After sending, write a record to workspace/memory/last_eod_sent.json with timestamp (ISO8601) and a short hash of the sent text. Also log completion in memory/YYYY-MM-DD.md.

