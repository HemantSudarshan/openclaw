## 2024-10-24 - Replace Math.random with generateUUID in Chat
**Vulnerability:** Weak random number generation (Math.random) was used for generating UI attachment IDs, creating potentially predictable identifiers.
**Learning:** Math.random() is frequently used for non-security-critical logic, but standardizing to the `generateUUID()` utility is a good security hygiene pattern to implement across the project where possible, providing robust cryptographically secure uniqueness.
**Prevention:** Use existing random/UUID utilities like `ui/src/ui/uuid.ts` or `src/infra/secure-random.ts` rather than `Math.random()` when creating identifiers.
