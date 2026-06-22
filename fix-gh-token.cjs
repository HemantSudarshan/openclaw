const fs = require("fs");
const glob = require("glob"); // Need to install? No, just use simple fs.readdirSync
const path = require("path");

const workflowsDir = path.join(__dirname, ".github", "workflows");
const files = fs.readdirSync(workflowsDir).filter((f) => f.endsWith(".yml"));

files.forEach((file) => {
  const filepath = path.join(workflowsDir, file);
  let content = fs.readFileSync(filepath, "utf-8");

  // Regex to find:
  // - uses: actions/create-github-app-token@v3
  //   id: app-token
  //   continue-on-error: true
  //   with:
  //     client-id: "2729701"
  //     private-key: ${{ secrets.GH_APP_PRIVATE_KEY }}

  // We want to insert `if: ${{ secrets.GH_APP_PRIVATE_KEY != '' }}` after `id: app-token`
  content = content.replace(
    /(- uses: actions\/create-github-app-token(?:@[^\n]+)?\n\s*id: app-token\n)/g,
    "$1        if: ${{ secrets.GH_APP_PRIVATE_KEY != '' }}\n",
  );

  // Replace the fallback condition
  content = content.replace(
    /if: steps\.app-token\.outcome == 'failure'/g,
    "if: ${{ steps.app-token.outcome == 'failure' && secrets.GH_APP_PRIVATE_KEY_FALLBACK != '' }}",
  );

  // We should also replace the github-token usages to use secrets.GITHUB_TOKEN as fallback
  content = content.replace(
    /github-token: \${{ steps\.app-token\.outputs\.token \|\| steps\.app-token-fallback\.outputs\.token }}/g,
    "github-token: ${{ steps.app-token.outputs.token || steps.app-token-fallback.outputs.token || secrets.GITHUB_TOKEN }}",
  );

  fs.writeFileSync(filepath, content);
});

console.log("Done");
