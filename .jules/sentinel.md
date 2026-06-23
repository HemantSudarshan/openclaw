## 2024-05-24 - [Title]
**Vulnerability:** Found `Math.random()` used for generating Attachment IDs in chat view.
**Learning:** `Math.random()` is not cryptographically secure and can be predicted, so it shouldn't be used for generating IDs that could be sensitive.
**Prevention:** Use a cryptographically secure random generator, such as the provided `generateUUID` function, for all sensitive ID and token generation logic.
