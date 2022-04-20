import { my_display_alpha_reverse } from "../day-1/exercise-2.js";
import assert from "chai";

describe("exercise 2", function () {
  describe("my_display_alpha_reverse", function () {
    it("should return the arg as an array", function () {
      assert.expect(my_display_alpha_reverse(), "zyxwvutsrqponmlkjihgfedcba");
    });
  });
});
