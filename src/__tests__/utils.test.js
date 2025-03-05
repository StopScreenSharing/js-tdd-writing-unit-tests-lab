// Your tests here
import { isPalindrome } from "../utils";

describe("isPalindrome", () => {
    it("returns true if the word is a palindrome", () => {
        const word = "racecar";
        const answer = isPalindrome(word);

        expect(answer).toBe(true);
    });

    it("returns false when the word is not a palindrome", () => {

        const word = "car";
        const answer = isPalindrome(word);

        expect(answer).toBe(false);
    });

    it("returns true for words that are a combination of uppercase and lowercase letters", () => {
        const word = "rAcECar"
        const answer =  isPalindrome(word)

        expect(answer).toBe(true)
    });

    it("returns an error if there is an empty string", () => {
        const word = "";
        
        expect(() => isPalindrome(word)).toThrow();
    });

    }
)