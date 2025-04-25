export function caesarCipher(input: string, shift: number): string {
  return input
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (char >= "a" && char <= "z") {
        return String.fromCharCode(((code - 97 + shift + 26) % 26) + 97);
      }

      if (char >= "A" && char <= "Z") {
        return String.fromCharCode(((code - 65 + shift) % 26) + 65);
      }

      return char; // non-alphabetical chars unchanged
    })
    .join("");
}
