import { my_is_posi_neg } from "../day-1/exercise-7.js";
import assert from 'assert'

describe("exercise 7", function () {
  describe("my_is_posi_neg", function () {
    it("nbr est positif ou null ou undefined alors afficher NEUTRAL", function () {
      assert.equal(my_is_posi_neg(0), 'NEUTRAL');
    });
    it("nbr est positif alors afficher POSITIF", function () {
      assert.equal(my_is_posi_neg(10), 'POSITIF');
    });
    it("nbr est null alors afficher POSITIF", function () {
      assert.equal(my_is_posi_neg(null), 'POSITIF');
    });
    it("nbr est undefined alors afficher POSITIF", function () {
      assert.equal(my_is_posi_neg(undefined), 'POSITIF');
    });
    it("nbr est négatif alors afficher NEGATIF", function () {
      assert.equal(my_is_posi_neg(-10), 'NEGATIF');
    });
  });
})
