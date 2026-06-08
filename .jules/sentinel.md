
## 2024-06-08 - Use secure random generation for UUIDs and tokens
**Vulnerability:** Weak random generation (`Math.random()`) was being used for generating UI attachment IDs.
**Learning:** Even for non-critical identifiers in the UI (like `att-{timestamp}-{random}`), using a secure CSPRNG (like the `generateUUID` function already provided in the codebase) instead of `Math.random()` protects against potential predictability attacks and reduces the blast radius of randomness predictability in the app.
**Prevention:** Follow the memory guidelines which specify to "For secure random generation and UUIDs, prefer the project's existing utilities over Math.random(): use generateUUID() from ui/src/ui/uuid.ts for frontend code".
