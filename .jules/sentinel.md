## 2024-07-13 - [Weak Randomness Fix]
**Vulnerability:** Found uses of `Date.now()` combined with `Math.random()` to generate IDs. This pattern produces predictable IDs and is a security weakness, violating the "No weak random number generation" guideline.
**Learning:** This codebase has custom UUID utilities (`ui/src/ui/uuid.ts` and `src/infra/secure-random.ts`) designed to correctly utilize `crypto.randomUUID()` in different environments.
**Prevention:** Developers should use the provided secure UUID/token generation functions (like `generateUUID()`) rather than re-implementing random generation with `Math.random()`.
