export function isPalindrome(word) {
    if (typeof word !== "string") {
      throw new Error("Invalid input: input must be a string");
    }
    if (word.length === 0) {
      return false;
    }
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error("Invalid input: only alphabetic characters allowed");
    }
  
    const normalized = word.toLowerCase();
    const reversed = normalized.split("").reverse().join("");
    
    return normalized === reversed;
  }
  