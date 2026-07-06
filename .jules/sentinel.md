## 2024-05-18 - [Weak Randomness in ID Generation]

**Vulnerability:** Use of insecure Math.random() for generating IDs.
**Learning:** Found usage of Math.random() in attachment ID generation which could lead to ID collisions or predictability. Replaced with cryptographically secure generateUUID() utility.
**Prevention:** Always use secure UUID generators or standard crypto functions when generating IDs, even in frontend contexts.
