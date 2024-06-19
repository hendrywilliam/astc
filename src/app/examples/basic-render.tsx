"use client";

import { renderComp } from "../core/engine";
import { minimalDoc } from "../snapshots/minimal-doc";

export default function BasicRender() {
  return renderComp(minimalDoc);
}
