import remarkParse from "remark-parse";
import rehypeParse from "rehype-parse";
import rehypeReact, { Options } from "rehype-react";
import remarkRehype from "remark-rehype";
import * as prod from "react/jsx-runtime";
import { Pluggable, unified } from "unified";
import rehypeStringify from "rehype-stringify";
import { createElement, Fragment } from "react";
import { assertString, assertArray } from "../libs/assertion";
import type { Element } from "hast";

export const convert = function (s: string): string {
  assertString(s);

  const plugins: Pluggable = [remarkParse, remarkRehype, rehypeStringify];
  assertArray(plugins);

  const processor = plugins.reduce((pipe, plugin) => {
    return pipe.use(plugin);
  }, unified());
  return processor.processSync(s).value;
};

type RenderCompReactOptions = Options;
const options: RenderCompReactOptions = {
  Fragment: prod.Fragment,
  /** @ts-ignore */
  jsx: prod.jsx,
  /** @ts-ignore */
  jsxs: prod.jsxs,
};

type Components = {
  [TagName in keyof JSX.IntrinsicElements]:
    | Component<JSX.IntrinsicElements[TagName] & ExtraProps>
    | keyof JSX.IntrinsicElements;
};
type ExtraProps = { node?: Element | undefined };
type Component<ComponentProps> =
  /** Class component */
  | (new (props: ComponentProps) => JSX.ElementClass)
  /** Function component */
  | ((props: ComponentProps) => JSX.Element | string | null | undefined);

export const renderComp = function (
  s: string,
  customComponents?: Partial<Components>
): JSX.Element {
  assertString(s);

  const h = convert(s);
  const f = unified()
    .use(rehypeParse, { fragment: true })
    /** @ts-ignore */
    .use(rehypeReact, { ...options, components: customComponents })
    .processSync(h);
  return createElement(Fragment, null, f.result);
};
