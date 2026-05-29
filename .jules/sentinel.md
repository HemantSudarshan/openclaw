## 2024-05-29 - [Fix Insecure Random ID Generation]
**Vulnerability:** Found `Math.random().toString(36)` being used to generate attachment IDs in `ui/src/ui/views/chat.ts`.
**Learning:** `Math.random()` is cryptographically weak and predictable, which can be insecure depending on context and risks ID collisions. The project has an existing `generateUUID` utility in `ui/src/ui/uuid.ts` meant to handle this.
**Prevention:** Always prefer cryptographically secure ID generation like `generateUUID` over `Math.random()` for client-side entity IDs in this app.
