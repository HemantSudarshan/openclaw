## 2026-06-15 - Replace Weak Randomness with Secure UUIDs
**Vulnerability:** Found `Math.random()` being used to generate `ChatAttachment` IDs (`generateAttachmentId` in `ui/src/ui/views/chat.ts`).
**Learning:** The use of `Math.random()` to generate IDs is inherently weak and predictable. In the codebase, replacing it requires care since top-level browser APIs like `crypto.getRandomValues()` may crash server-side rendering (SSR) or non-browser environments.
**Prevention:** Always use the project's existing secure wrapper `generateUUID()` (from `ui/src/ui/uuid.ts` for frontend code) or `src/infra/secure-random.ts` for backend to handle ID generation robustly and safely across all environments.
