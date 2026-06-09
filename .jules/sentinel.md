## 2024-06-09 - Math.random() in attachment ID
**Vulnerability:** Math.random() was used to generate IDs for chat attachments.
**Learning:** While not immediately exploitable for remote code execution, weak PRNGs can sometimes lead to collision attacks, prediction of identifiers (which might bypass certain checks or let someone spoof references), or just generally violate secure coding standards for unique identifiers. The fix uses Web Crypto (`generateUUID`).
**Prevention:** Always use cryptographic PRNGs (like `generateUUID` in the UI or `randomUUID` in backend) for IDs instead of `Math.random()`.
