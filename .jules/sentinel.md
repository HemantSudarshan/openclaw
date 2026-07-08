## 2024-05-18 - Replacing weak pseudo-random generation with secure UUIDs in Chat Attachments
**Vulnerability:** Chat attachment IDs were being generated using `Math.random()`, which does not guarantee uniqueness and lacks cryptographic security.
**Learning:** For frontend component IDs, it is safer to use the dedicated `generateUUID` function which relies on the Web Crypto API, eliminating the risks associated with weak PRNG collisions.
**Prevention:** Avoid `Math.random()` for identifier generation. Always prefer `generateUUID()` (from `ui/src/ui/uuid.ts`) for frontend code, or appropriate utility functions from `src/infra/secure-random.ts` for backend/infrastructure logic.
