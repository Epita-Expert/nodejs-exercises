import { my_display_alpha_reverse } from "../day-1/exercise-2.js";
import assert from "assert";

describe("exercise 2", function () {
  describe("my_display_alpha_reverse", function () {
    it("should return the arg as an array", function () {
      assert.equal(my_display_alpha_reverse(), "zyxwvutsrqponmlkjihgfedcba");
    });
  });
});
