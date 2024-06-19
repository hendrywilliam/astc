import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import rehypeReact from "rehype-react";
import remarkRehype from "remark-rehype";
import * as prod from "react/jsx-runtime";
import { Pluggable, unified } from "unified";
import rehypeStringify from "rehype-stringify";
import { createElement, Fragment } from "react";
import { assertString, assertArray } from "../libs/assertion";

export const convert = function (s: string) {
  assertString(s);

  const plugins: Pluggable = [remarkParse, remarkRehype, rehypeStringify];
  assertArray(plugins);

  const processor = plugins.reduce((pipe, plugin) => {
    return pipe.use(plugin);
  }, unified());
  return String(processor.processSync(s));
};

const production = { Fragment: prod.Fragment, jsx: prod.jsx, jsxs: prod.jsxs };
export const renderComp = function (s: string): JSX.Element {
  assertString(s);

  const h = convert(s);
  const f = unified()
    .use(rehypeParse, { fragment: true })
    // @ts-expect-error: to-do find the correct type.
    .use(rehypeReact, production)
    .processSync(h);
  return createElement(Fragment, null, f.result);
};
