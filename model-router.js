// Lightweight model router for OpenClaw
// Policy: no classifier upgrades. Defaults to gpt-5-mini for chat; explicit requests use gpt-5.2; code/tool runs use codex.

function chooseModel({ intent, userOverride, isToolCall }) {
  // userOverride may be: 'gpt-5-mini' | 'gpt-5.2' | 'gpt-5.1-codex'
  if (userOverride) return userOverride;
  if (isToolCall) return 'openai/gpt-5.1-codex';
  // If intent explicitly requests a stronger model, caller should set userOverride.
  return 'openai/gpt-5-mini';
}

module.exports = { chooseModel };
