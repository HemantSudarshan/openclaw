## 2025-02-14 - Predictable IDs in Frontend
**Vulnerability:** Weak Randomness for IDs (`Math.random()`) in `ui/src/ui/views/chat.ts` for attachment IDs.
**Learning:** `Math.random()` was used for generating IDs that could theoretically lead to ID collisions or predictable IDs, which can cause subtle bugs or security issues depending on how IDs are handled. The codebase already provides `generateUUID` for secure UUIDs on the frontend, which was not being used here.
**Prevention:** Always use the project's existing cryptographic utilities over `Math.random()`. In the frontend code, prefer `generateUUID()` from `ui/src/ui/uuid.ts`.
