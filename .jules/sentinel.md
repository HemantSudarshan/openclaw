## $(date +%Y-%m-%d) - Replaced weak Math.random() with secure UUID generation
**Vulnerability:** Weak random number generation (`Math.random()`) was being used for generating IDs (`generateAttachmentId` in `ui/src/ui/views/chat.ts`).
**Learning:** Browser cryptography API (`crypto.randomUUID()` / `crypto.getRandomValues()`) should be preferred over `Math.random()` to generate identifiers, even if they aren't explicitly used as secrets, to avoid predictability. The implementation requires a try/catch fallback since `crypto.randomUUID()` may crash in non-HTTPS environments or SSR contexts.
**Prevention:** Use standard library functions like `generateUUID` from `ui/src/ui/uuid.ts` everywhere when creating UUIDs or identifiers, wrapping them in safe fallbacks for compatibility.
