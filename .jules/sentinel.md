## 2024-05-27 - [Predictable IDs]
**Vulnerability:** Weak random generation for attachment IDs in UI using Math.random().
**Learning:** Math.random() generates predictable values which could lead to ID collisions or allow guessing generated IDs in UI features.
**Prevention:** Use a cryptographically secure UUID generator or Web Crypto API instead of Math.random().
