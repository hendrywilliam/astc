import { test, expect, describe } from "@jest/globals";
import { assertArray, assertString } from "@/app/libs/assertion";
import { minimalDoc } from "@/app/snapshots/minimal-doc";

describe("assert functions", () => {
  test("assertString should throw an error when we passed the wrong argument.", () => {
    expect(() => {
      // @ts-expect-error: passed wrong argument.
      assertString(104);
    }).toThrow("input must be a string. received: number");
  });
  test("assertString should not throw an error.", () => {
    expect(assertString(minimalDoc)).toBeUndefined();
  });
  test("assertArray should throw an error when we passed empty list.", () => {
    expect(() => {
      assertArray<number>([]);
    }).toThrow(
      "expecting an array with atleast one element, but received empty."
    );
  });
  test("assertArray should not throw an error.", () => {
    expect(assertArray<number>([10, 20, 30])).toBeUndefined();
  });
});
