## 2024-05-18 - [Replaced Weak Randomness with Secure UUID]
**Vulnerability:** Weak random number generation (`Math.random()`) used for generating attachment IDs.
**Learning:** `Math.random()` shouldn't be used to generate secure IDs because it's predictable. Found that `Math.random()` is used multiple times throughout the project. The codebase provides a secure `generateUUID` utility located at `ui/src/ui/uuid.ts` which provides secure IDs without breaking SSR. It's best to always use `generateUUID` instead of `Math.random()` for identifier generation.
**Prevention:** Use secure `generateUUID` for UI components or backend cryptography equivalents for backend identifier generation.
