## 2024-05-25 - [Insecure Randomness]
**Vulnerability:** Usage of Math.random() in attachment ID generation
**Learning:** Math.random() is cryptographically weak and predictable. Use secure UUIDs.
**Prevention:** Prefer using generateUUID() which uses Web Crypto API.
