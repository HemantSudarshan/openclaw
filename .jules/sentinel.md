## 2024-05-18 - [Replaced Weak Attachment ID Generation]
**Vulnerability:** [Weak random number generation used for attachment IDs]
**Learning:** [The code was using `Math.random().toString(36)` instead of standard `generateUUID()` for generating unique attachment IDs]
**Prevention:** [Use `generateUUID` from `ui/src/ui/uuid.ts` or secure random utilities in `src/infra/secure-random.ts`]
