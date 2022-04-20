import { my_array_alpha } from "../day-1/exercise-5.js";
import assert from "chai";

describe("exercise 5", function () {
  describe("my_array_alpha", function () {
    it("should return the arg as an array", function () {
      assert.expect(my_array_alpha("hello"), ["h", "e", "l", "l", "o"]);
    });
    it("should return the arg as an array", function () {
      assert.expect(my_array_alpha("hello").length, 5);
    });
  });
});
