## 2025-02-23 - [Weak Randomness for UI Attachment IDs]
**Vulnerability:** Weak randomness used for attachment IDs. `generateAttachmentId` in `ui/src/ui/views/chat.ts` generated IDs using `Date.now()` and `Math.random()`.
**Learning:** This repo has a script `scripts/check-temp-path-guardrails.ts` that enforces guardrails and detects unsafe use of weak random number generators like `Math.random()` and `Date.now()`. It is important to look at this when determining what the repo needs.
**Prevention:** Use `generateUUID` from `ui/src/ui/uuid.ts` in UI code.
