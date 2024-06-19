/* eslint-disable */

export const assertString = function (text: string) {
  const type = typeof text;
  if (type !== "string") {
    throw new Error(`input must be a string. received: ${type}`);
  }
};

export const assertFunction = function (method: () => any) {
  const type = typeof method;
  if (type !== "function") {
    throw new Error(`input must be a function. received: ${type}`);
  }
};

export const assertArray = function <T>(x: T[]) {
  if (!Array.isArray(x)) {
    const type = typeof x;
    throw new Error(`input must be an array. received: ${type}`);
  }

  if (x.length <= 0) {
    throw new Error(
      `expecting an array with atleast one element, but received empty.`
    );
  }
};
