export function caesarCipher(input: string, shift: number): string {
  return input
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      // Uppercase A–Z
      if (code >= 65 && code <= 90) {
        return String.fromCharCode(
          ((((code - 65 + shift) % 26) + 26) % 26) + 65
        );
      }

      // Lowercase a–z
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(
          ((((code - 97 + shift) % 26) + 26) % 26) + 97
        );
      }

      // Non-alphabetic characters unchanged
      return char;
    })
    .join("");
}
