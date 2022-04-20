import { my_length_array } from "../day-1/exercise-6.js";
import assert from "chai";

describe("exercise 6", function () {
  describe("my_array_alpha", function () {
    it("should return the arg as an array", function () {
      assert.expect(my_length_array(["h", "e", "l", "l", "o"]), 5);
    });
  });
});
