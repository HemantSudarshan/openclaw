## 2024-05-15 - Insecure attachment ID generation via Math.random

**Vulnerability:** Weak, predictable attachment IDs were being generated in frontend chat views using Math.random().
**Learning:** Math.random() is cryptographically weak and predictable. Using it to generate sensitive identifiers on the frontend can lead to insecure object reference generation.
**Prevention:** Always use secure UUID generators (e.g., `generateUUID()` exported from `uuid.ts` which is backed by crypto APIs) rather than `Date.now() + Math.random()` for important resource identifiers.
