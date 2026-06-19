## 2024-05-21 - [MEDIUM] Insecure frontend ID generation
**Vulnerability:** Found `Math.random()` being used to generate IDs (`att-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`) for chat attachments in `ui/src/ui/views/chat.ts`.
**Learning:** `Math.random()` is not cryptographically secure, and shouldn't be used for ID generation, even on the frontend. The project already has a secure random UUID utility `generateUUID()` available in `ui/src/ui/uuid.ts`.
**Prevention:** Always use secure random functions like `generateUUID()` from `ui/src/ui/uuid.ts` for frontend UUID generation and avoid `Math.random()` to generate IDs.
