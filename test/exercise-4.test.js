import { my_size_alpha } from "../day-1/exercise-4.js";
import assert from "chai";

describe("exercise 3", function () {
  describe("my_alpha_number", function () {
    it("should return 0", function () {
      assert.expect(my_size_alpha([]), 0);
    });
    it("should return 0", function () {
      assert.expect(my_size_alpha(19), 0);
    });
    it("should return 0", function () {
      assert.expect(my_size_alpha('hello'), 5);
    });
  });
});
