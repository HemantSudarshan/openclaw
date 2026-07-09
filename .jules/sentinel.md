## 2024-07-09 - Fix weak randomness in generateAttachmentId
**Vulnerability:** Weak randomness using `Math.random()` for generating attachment IDs could lead to unpredictable but insecure identifiers that might collide.
**Learning:** Using `Math.random()` for IDs is discouraged and security guidelines advise against it in this project, preferring the existing `generateUUID` function which has SSR safety in mind.
**Prevention:** Use `generateUUID()` from `ui/src/ui/uuid.ts` everywhere unique identifiers are generated.
