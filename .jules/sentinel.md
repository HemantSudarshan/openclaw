## 2024-05-22 - Replaced weak Math.random() in UI IDs
**Vulnerability:** Weak random number generation was used for `generateAttachmentId` via `Math.random()`.
**Learning:** `Math.random()` predictability can pose low-severity risks like ID collisions or predictability, and SAST tools routinely flag it. The UI codebase already provides a secure `generateUUID` function in `ui/src/ui/uuid.ts`.
**Prevention:** Avoid `Math.random()` for any non-deterministic identifier, always use `generateUUID` or `crypto.randomUUID` in UI code.
