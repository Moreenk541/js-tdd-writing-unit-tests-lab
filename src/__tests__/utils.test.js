// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
  it("returns true for a palindrome word", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("returns false for a non-palindrome word", () => {
    expect(isPalindrome("car")).toBe(false);
  });

  it("is case insensitive (handles uppercase and lowercase)", () => {
    expect(isPalindrome("RaceCar")).toBe(true);
  });

  it("returns false for an empty string", () => {
    expect(isPalindrome("")).toBe(false);
  });

  it("throws an error if the word has non-alphabetic characters", () => {
    expect(() => isPalindrome("race1car")).toThrow("Invalid input: only alphabetic characters allowed");
  });

  it("throws an error if the input is not a string", () => {
    expect(() => isPalindrome(12321)).toThrow("Invalid input: input must be a string");
  });
});
