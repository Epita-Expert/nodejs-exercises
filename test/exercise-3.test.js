import { my_alpha_number } from "../day-1/exercise-3.js";
import assert from "assert";

describe("exercise 3", function () {
  describe("my_alpha_number", function () {
    it("should return the number as string", function () {
      assert.equal(my_alpha_number(1), "1");
    });
    it("should return the number as string", function () {
      assert.equal(my_alpha_number(0), "0");
    });
    it("should return the number as string", function () {
      assert.equal(my_alpha_number(-1), "-1");
    });
  });
});
