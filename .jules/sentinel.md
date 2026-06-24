## 2024-05-15 - Replace Math.random with generateUUID in UI

**Vulnerability:** Found `Math.random()` being used to generate unique IDs for chat attachments in frontend UI code (`ui/src/ui/views/chat.ts`).
**Learning:** While attachment IDs are generally not the highest-value targets compared to API keys or session tokens, replacing weak random values limits potential ID prediction attacks and sets a better precedent for security throughout the codebase. Furthermore, applying the `generateUUID()` utility correctly maintains safe operation in SSR/Node vs Browser environments while ensuring cryptographically secure randomness.
**Prevention:** Make sure developers know to always prefer safe utility wrappers like `ui/src/ui/uuid.ts` for frontend logic rather than defaulting to `Math.random()`.
