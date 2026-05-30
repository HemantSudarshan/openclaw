## 2025-01-20 - Fix weak random ID generation in UI attachments
**Vulnerability:** Weak random number generation (`Math.random()`) used for generating UI chat attachment IDs.
**Learning:** `Math.random()` was combined with `Date.now()` for IDs, which makes them predictable. The codebase already provides a wrapper for cryptographic randomness `generateUUID` in `ui/src/ui/uuid.ts`.
**Prevention:** Always use the project's existing cryptographic utilities like `generateUUID` instead of `Math.random()` when random uniqueness is required for IDs, even if on the frontend.