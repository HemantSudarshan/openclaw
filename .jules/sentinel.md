## 2025-02-23 - Avoid Using Top-Level Browser APIs When Addressing Security Theater

**Vulnerability:** Weak randomness (\`Math.random()\`) was flagged by tools for UI phrase picking, but strictly fixing this blindly using \`crypto.getRandomValues()\` at the top-level of a module is unsafe.
**Learning:** Fixing security theater risks introducing real bugs (crashing server-side rendering or non-browser environments) because browser APIs like \`crypto\` may not be polyfilled in time.
**Prevention:** Avoid strict substitutions of \`Math.random()\` for cosmetic purposes. If forced to fix it, do so inside a function or with a top-level try-catch fallback.
