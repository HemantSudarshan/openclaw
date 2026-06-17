## 2024-05-03 - [Security Enhancement]

**Vulnerability:** Missing check for hardcoded secrets
**Learning:** Adding a rule to detect hardcoded secrets (API keys, passwords, tokens) into `src/security/skill-scanner.ts`
**Prevention:** Future API keys, secrets, tokens in source code will be flagged.
