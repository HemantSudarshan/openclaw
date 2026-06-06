## 2024-05-18 - Fix Predictable ID Generation in Chat Attachments
**Vulnerability:** Insecure use of `Math.random()` to generate IDs for chat attachments in `ui/src/ui/views/chat.ts`.
**Learning:** Math.random() provides weak, predictable randomness. This can lead to identifier collisions or potential enumeration if these IDs were used in a sensitive context. This codebase has existing secure implementations that should be used instead.
**Prevention:** Always use secure RNG methods. Use `generateUUID()` from `ui/src/ui/uuid.ts` for frontend client code, and `src/infra/secure-random.ts` for backend logic instead of native `Math.random()`.
