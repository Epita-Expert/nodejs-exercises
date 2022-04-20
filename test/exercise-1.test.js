import { my_display_alpha } from "../day-1/exercise-1.js";
import assert from "chai";

describe("exercise 1", function () {
  describe("my_display_alpha", function () {
    it("should return the arg as an array", function () {
      assert.expect(my_display_alpha(), "abcdefghijklmnopqrstuvwxyz");
    });
  });
});
