var Enclosure = require('../enclosure.js');
var Dinosaur = require('../dinosaur.js');
var assert = require('assert');

describe("An Enclosure", function(){

  var enclosure;
  var raptor;
  var diplodocus;
  var triceratops;

  beforeEach(function () {
    enclosure = new Enclosure();
    raptor = new Dinosaur("Velociraptor", 5);
    diplodocus = new Dinosaur("Diplodocus", 2);
    diplodocus2 = new Dinosaur("Diplodocus", 2);
    triceratops = new Dinosaur("Triceratops", 1);
  });

  it("should start out empty", function(){
    assert.strictEqual(0, enclosure.getNumberOfDinosaurs());
  });

  it("should be able to add a dinosaur", function(){
    enclosure.add(raptor);
    assert.strictEqual(1, enclosure.getNumberOfDinosaurs());
  });

  it("should be able to remove dinosaurs by type", function(){
    enclosure.add(raptor);
    enclosure.add(triceratops);
    enclosure.add(diplodocus);
    enclosure.add(diplodocus);
    enclosure.add(diplodocus2);
    enclosure.removeDinosaur("Diplodocus");
    assert.strictEqual(2, enclosure.getNumberOfDinosaurs());
  });

  it("should be able to get all dinosaurs with an offspring count over 2", function(){
      enclosure.add(triceratops);
      enclosure.add(diplodocus);
      enclosure.add(raptor);
      assert.strictEqual(raptor, enclosure.getFertiles()[0]);
  });

  it("can calculate population within enclosure after one year", function(){
    enclosure.add(diplodocus);
    enclosure.add(raptor);
    assert.strictEqual(9, enclosure.predictPopulation(1));
  });

  it("can calculate population within enclosure after two years", function(){
    enclosure.add(diplodocus);
    enclosure.add(raptor);
    assert.strictEqual(45, enclosure.predictPopulation(2));
  });











});