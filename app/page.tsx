"use client";

import SplitText from "@/components/splittext";
import FadeInImage from "@/components/fadeinimg";
import { ArrowDownToDot } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { caesarCipher } from "@/lib/cipher";

export default function Home() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

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

      {/* Section 2: Below the fold (also full screen) */}
      <div className="h-screen px-6 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-center justify-center">
        <Card>
          <CardHeader>
            <CardTitle>Plain Text</CardTitle>
            <Textarea
              value={plainText}
              onChange={(e) => {
                const input = e.target.value;
                setPlainText(input);
                setCipherText(caesarCipher(input, value));
              }}
              placeholder="Type your message and hit enter."
              className="border p-2 w-full mb-4"
            />
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Select Rotational Key</CardTitle>

            <div className="flex justify-center items-center gap-2">
              <button
                onClick={decrement}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={value}
                onChange={(e) => {
                  const num = e.target.value;
                  setValue(Number(num));
                }}
                className="border rounded px-2 py-1 text-center w-16 appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                placeholder="Enter a number"
              />
              <button
                onClick={increment}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cipher Text</CardTitle>
            <Textarea
              placeholder="Cipher text will apear here."
              value={cipherText}
              readOnly
            />
          </CardHeader>
        </Card>
      </div>
    </>
  );
}
