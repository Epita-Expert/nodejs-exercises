import { my_sum } from "../day-1/exercise-0.js";
import assert from "assert";

describe("exercise 1", function () {
  describe("my_display_alpha", function () {
    it("should return 0", function () {
      assert.equal(my_sum(), 0);
    });
    it("should return 0", function () {
      assert.equal(my_sum(1), 0);
    });
    it("should return 0", function () {
      assert.equal(my_sum(undefined, 1), 0);
    });
    it("should return 0", function () {
      assert.equal(my_sum("2", 2), 0);
    });
    it("should return 0", function () {
      assert.equal(my_sum(2, "2"), 0);
    });
    it("should return 4", function () {
      assert.equal(my_sum(2, 2), 4);
    });
  });
});
