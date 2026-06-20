## 2026-06-20 - Secure Attachment ID Generation

**Vulnerability:** Weak attachment ID generation using Math.random()
**Learning:** The project has a cryptographically secure UUID generator in ui/src/ui/uuid.ts that should be preferred over ad-hoc IDs using Math.random() + Date.now().
**Prevention:** Always use generateUUID() from ui/src/ui/uuid.ts when generating unique identifiers in frontend code instead of falling back to Math.random().
