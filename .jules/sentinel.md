## 2024-06-10 - Replace Math.random with generateUUID for Attachment IDs
**Vulnerability:** Weak PRNG `Math.random` used for generating pseudo-random attachment identifiers in `generateAttachmentId` (`ui/src/ui/views/chat.ts`).
**Learning:** `Math.random` should not be used for security-sensitive or globally unique identifiers due to low entropy and lack of cryptographic security.
**Prevention:** Use a cryptographically secure UUID generator like `generateUUID` from `ui/src/ui/uuid.ts`.
