import Preview from "@/app/components/preview";
import CustomComponents from "./examples/custom-components";

export default function Index() {
  return (
    <main className="flex flex-col w-full min-h-screen h-full items-center justify-center">
      <div className="flex flex-col w-1/4 items-center justify-center space-y-2">
        <Preview>
          <CustomComponents />
        </Preview>
      </div>
    </main>
  );
}
