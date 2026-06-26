## 2024-06-26 - Fix Weak Randomness in Chat Attachment IDs
**Vulnerability:** Weak PRNG (`Math.random()`) was used in `ui/src/ui/views/chat.ts` to generate chat attachment IDs.
**Learning:** Using predictable identifiers can lead to ID collisions or predictability, presenting minor security risks in how attachments are referenced or shared.
**Prevention:** Use the existing secure `generateUUID()` from `ui/src/ui/uuid.ts` for cryptographic random number generation when generating identifiers in the frontend.
