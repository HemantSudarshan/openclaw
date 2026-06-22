#!/bin/bash
for f in .github/workflows/*.yml; do
  sed -i "s/if: steps.app-token.outcome == 'failure'/if: steps.app-token.outcome == 'failure' \&\& secrets.GH_APP_PRIVATE_KEY_FALLBACK != ''/g" "$f"
  # Also need to add if: secrets.GH_APP_PRIVATE_KEY != '' to the first app-token step.
done
