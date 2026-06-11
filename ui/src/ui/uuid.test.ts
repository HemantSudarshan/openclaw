import { describe, expect, it, vi } from "vitest";
import { generateUUID } from "./uuid.ts";

describe("generateUUID", () => {
  it("uses crypto.randomUUID when available", () => {
    const id = generateUUID({
      randomUUID: () => "randomuuid",
      getRandomValues: () => {
        throw new Error("should not be called");
      },
    });

    expect(id).toBe("randomuuid");
  });

  it("falls back to crypto.getRandomValues", () => {
    const id = generateUUID({
      getRandomValues: (bytes) => {
        // @ts-expect-error
        for (let i = 0; i < bytes.length; i++) {
          // @ts-expect-error
          bytes[i] = i;
        }
        return bytes;
      },
    });

    expect(id).toBe("00010203-0405-4607-8809-0a0b0c0d0e0f");
  });

  it("still returns a v4 UUID when crypto is missing", () => {
    const warnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
    try {
      expect(() => generateUUID(null)).toThrow("Web Crypto is required for UUID generation");
      expect(warnSpy).toHaveBeenCalled();
    } finally {
      warnSpy.mockRestore();
    }
  });
});

describe("generateSecureFraction", () => {
  const { generateSecureFraction } = require("./uuid.ts");
  it("generates a fraction using getRandomValues", () => {
    const fraction = generateSecureFraction({
      getRandomValues: (arr) => {
        arr[0] = 0x80000000;
        return arr;
      },
    });
    expect(fraction).toBeCloseTo(0.5, 5);
  });

  it("throws when crypto is unavailable", () => {
    expect(() => generateSecureFraction(null)).toThrow(
      "Web Crypto is required for secure fraction generation",
    );
  });
});
