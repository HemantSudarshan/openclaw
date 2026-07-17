## 2025-03-01 - [Replace weak randomness with UUID for attachment IDs]
**Vulnerability:** Use of `Math.random()` for generating attachment IDs in `ui/src/ui/views/chat.ts`.
**Learning:** Found a pattern of weak pseudo-random number generation combined with `Date.now()` which is susceptible to predictability. The project already has secure utilities available.
**Prevention:** Use `generateUUID()` from `ui/src/ui/uuid.ts` instead of `Math.random()` for frontend IDs, or `generateSecureUuid()` from `src/infra/secure-random.ts` for backend/infrastructure code.
