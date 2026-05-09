import type { WebClient } from "@slack/web-api";
import type { OpenClawConfig } from "openclaw/plugin-sdk/config-types";
import { describe, expect, it, vi } from "vitest";
import { sendMessageSlack } from "./send.js";

function createSlackSendTestClient() {
  return {
    conversations: {
      open: vi.fn(async () => ({ channel: { id: "D123" } })),
    },
    chat: {
      postMessage: vi.fn(async () => ({ ts: "171234.567" })),
    },
  } as unknown as WebClient & {
    chat: { postMessage: ReturnType<typeof vi.fn> };
    conversations: { open: ReturnType<typeof vi.fn> };
  };
}

function slackConfig(slack: NonNullable<OpenClawConfig["channels"]>["slack"]): OpenClawConfig {
  return { channels: { slack } };
}

describe("sendMessageSlack unfurl controls", () => {
  it("omits Slack unfurl flags when config is unset", async () => {
    const client = createSlackSendTestClient();

    await sendMessageSlack("channel:C123", "https://example.com", {
      token: "xoxb-test",
      cfg: slackConfig({ botToken: "xoxb-test" }),
      client,
    });

    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.not.objectContaining({
        unfurl_links: expect.any(Boolean),
        unfurl_media: expect.any(Boolean),
      }),
    );
  });

  it("passes top-level Slack unfurl flags to chat.postMessage", async () => {
    const client = createSlackSendTestClient();

    await sendMessageSlack("channel:C123", "https://example.com", {
      token: "xoxb-test",
      cfg: slackConfig({
        botToken: "xoxb-test",
        unfurlLinks: false,
        unfurlMedia: false,
      }),
      client,
    });

    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        unfurl_links: false,
        unfurl_media: false,
      }),
    );
  });

  it("lets account-level Slack unfurl flags override the top-level defaults", async () => {
    const client = createSlackSendTestClient();

    await sendMessageSlack("channel:C123", "https://example.com", {
      token: "xoxb-test",
      accountId: "work",
      cfg: slackConfig({
        botToken: "xoxb-root",
        unfurlLinks: false,
        unfurlMedia: true,
        accounts: {
          work: {
            unfurlLinks: true,
            unfurlMedia: false,
          },
        },
      }),
      client,
    });

    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        unfurl_links: true,
        unfurl_media: false,
      }),
    );
  });

  it("applies Slack unfurl flags to block messages", async () => {
    const client = createSlackSendTestClient();

    await sendMessageSlack("channel:C123", "https://example.com", {
      token: "xoxb-test",
      cfg: slackConfig({
        botToken: "xoxb-test",
        unfurlLinks: false,
        unfurlMedia: false,
      }),
      client,
      blocks: [{ type: "divider" }],
    });

    expect(client.chat.postMessage).toHaveBeenCalledWith(
      expect.objectContaining({
        blocks: [{ type: "divider" }],
        unfurl_links: false,
        unfurl_media: false,
      }),
    );
  });

  it("applies Slack unfurl flags to every text chunk", async () => {
    const client = createSlackSendTestClient();

    await sendMessageSlack("channel:C123", "a".repeat(8500), {
      token: "xoxb-test",
      cfg: slackConfig({
        botToken: "xoxb-test",
        unfurlLinks: false,
        unfurlMedia: false,
      }),
      client,
    });

    expect(client.chat.postMessage).toHaveBeenCalledTimes(2);
    for (const [payload] of client.chat.postMessage.mock.calls) {
      expect(payload).toEqual(
        expect.objectContaining({
          unfurl_links: false,
          unfurl_media: false,
        }),
      );
    }
  });
});
