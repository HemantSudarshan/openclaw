## 2026-07-15 - Replace weak random with secure UUID for Chat Attachments
**Vulnerability:** `ui/src/ui/views/chat.ts` used `Math.random()` to generate chat attachment IDs, which is a weak source of randomness and can lead to predictability or collisions in IDs.
**Learning:** For identifiers and other random values, it is important to use a cryptographically secure pseudo-random number generator (CSPRNG), instead of `Math.random()`. The project provides a safe wrapper for UUID generation, `ui/src/ui/uuid.ts`.
**Prevention:** Use `generateUUID()` or equivalent secure utilities when generating unique identifiers, and avoid using `Math.random()` for IDs.
