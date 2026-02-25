# HEARTBEAT.md

## Task: Daily Mission Summary @ 10:00 SGT
- Every heartbeat, check current Singapore time.
- If local time is 10:00 ± 5 minutes and today’s summary has not been sent yet, produce the "Daily Mission Check" report.
- Summary structure:
  1. Status Snapshot (heartbeat, last crawl, Codex readiness)
  2. Top Priorities Today (3 bullets from tasks/goals)
  3. Recent Signals (support trend, upcoming deliverable)
  4. Action Buttons/Links (Mission Control, run job, Codex console)
  5. Alerts/blockers if any.
- After sending, log completion in memory/YYYY-MM-DD.md so it’s not repeated that day.

## Notes
- Outside the 10:00 SGT window, respond HEARTBEAT_OK unless another HEARTBEAT.md task is added.
- If prerequisites missing (e.g., Codex not configured), mention it in Status Snapshot.
