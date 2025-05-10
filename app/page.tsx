"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { caesarCipher } from "@/lib/cipher";
import { useEffect } from "react";
import Hero from "@/components/hero";

export default function Home() {
  const [plainText, setPlainText] = useState("");
  const [cipherText, setCipherText] = useState("");
  const [value, setValue] = useState<number>(0);
  const increment = () => setValue((prev) => prev + 1);
  const decrement = () => setValue((prev) => prev - 1);

  useEffect(() => {
    setCipherText(caesarCipher(plainText, value));
  }, [plainText, value]);
  // Update cipherText whenever plainText or value changes

  return (
    <>
      {/* Hero Section */}
      <Hero />
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
              placeholder="Type your message here."
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
                step="1"
                value={value}
                onChange={(e) => {
                  const num = Number(e.target.value);
                  if (Number.isInteger(num)) {
                    setValue(num);
                  }
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
