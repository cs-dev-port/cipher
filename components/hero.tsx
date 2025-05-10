import { ArrowDownToDot } from "lucide-react";
import SplitText from "@/components/splittext";
import FadeInImage from "@/components/fadeinimg";

export default function Hero() {
  return (
    <>
      {/* Section 1: Hero (full screen) */}
      <div className="h-screen grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-[32px] row-start-2 items-center">
          <SplitText />
          <FadeInImage />
          <div className="text-center">
            <p className="fade-in">scroll</p>
            <br />
            <div className="inline-block">
              <ArrowDownToDot className="animate-bounce" />
            </div>
          </div>
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center"></footer>
      </div>
    </>
  );
}
