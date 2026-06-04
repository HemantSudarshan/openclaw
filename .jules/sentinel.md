## 2026-06-04 - [Fix weak PRNG usage]\n**Vulnerability:** Weak PRNG (`Math.random()`) was used for attachment ID generation in the chat UI.\n**Learning:** The project relies on  or other secure random generators. It explicitly warns against weak  combinations.\n**Prevention:** Use `generateUUID()` from `ui/src/ui/uuid.ts` in the frontend instead of `Math.random()` for secure or predictable identifier requirements.
## 2024-05-24 - Fix weak PRNG usage
**Vulnerability:** Weak PRNG (`Math.random()`) was used for attachment ID generation in the chat UI.
**Learning:** The project explicitly warns against weak `Math.random() + Date.now()` combinations and provides custom `generateUUID` function.
**Prevention:** Use `generateUUID()` from `ui/src/ui/uuid.ts` in the frontend instead of `Math.random()` for secure or predictable identifier requirements.
