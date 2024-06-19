import { renderComp } from "../core/engine";
import CustomParagraph from "../components/paragraph";
import { minimalDoc } from "../snapshots/minimal-doc";

export default function CustomComponents() {
  return renderComp(minimalDoc, {
    p({ children }) {
      return <CustomParagraph>{children}</CustomParagraph>;
    },
  });
}
