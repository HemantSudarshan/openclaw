## 2025-02-27 - Replace weak random number generation

**Vulnerability:** Weak PRNG (`Math.random()`) used for generating attachment IDs.
**Learning:** Avoid `Math.random` for identifier generation even if it's not strictly cryptographic.
**Prevention:** Use cryptographically secure methods like `generateUUID` or `crypto.randomUUID()` when generating identifiers in the codebase.
