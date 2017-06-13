var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe("A Dinosaur", function(){

  var tRex;

  beforeEach(function(){
    tRex = new Dinosaur("Tyrannosaurus Rex", 3);
  })

  it("should have a type", function(){
    assert.strictEqual("Tyrannosaurus Rex", tRex.type);
  });

  it("should have offspringPerYear", function(){
    assert.strictEqual(3, tRex.offspringPerYear);
  });

  it("should calculate number of dinosaurs after one year", function(){
    assert.strictEqual(4, tRex.calculateAnnualFamilyGrowth(1));
  })

  it("should calculate number of dinosaurs after two years", function() {
    assert.strictEqual(16, tRex.calculateAnnualFamilyGrowth(2));
  })

  it("should calculate number of dinosaurs after three years", function() {
    assert.strictEqual(64, tRex.calculateAnnualFamilyGrowth(3));
  })








})