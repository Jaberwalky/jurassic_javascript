var Dinosaur = function(type, offspringPerYear){
  this.type = type;
  this.offspringPerYear = offspringPerYear;
}

Dinosaur.prototype = {
  calculateAnnualFamilyGrowth: function(years){
    return Math.pow(1 + this.offspringPerYear, years);
  }
}

module.exports = Dinosaur;