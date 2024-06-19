import { test, expect, describe, jest } from "@jest/globals";
import { convert } from "@/app/core/engine";
import { minimalDoc } from "@/app/snapshots/minimal-doc";

describe("convert engine", () => {
  test("it should match the ui snapshot", () => {
    const snap = convert(minimalDoc);
    expect(snap).toMatchInlineSnapshot(
      `
          <h1>Mercury</h1>
          <p>
            <strong>Mercury<strong>
            "  is the first planet from the "
            <a href="https://en.wikipedia.org/wiki/Sun">Sun</a>
            " and the smallest planet in the Solar System. "
          </p>
      `
    );
  });
});
