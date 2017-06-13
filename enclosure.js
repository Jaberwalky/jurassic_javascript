var Enclosure = function(){
  this.enclosure = [];
}

Enclosure.prototype ={
  getNumberOfDinosaurs: function(){
    return this.enclosure.length;
  },

  add: function(dinosaur){
    this.enclosure.push(dinosaur);
  },

  removeDinosaur: function(dinosaurName){
    for (var i = this.enclosure.length - 1; i >= 0; i--){
      if (this.enclosure[i].type === dinosaurName){
        this.enclosure.splice(i, 1);
      }
    }
  },

  getFertiles: function(){
    var fertiles = [];
    for(var dinosaur of this.enclosure){
      if(dinosaur.offspringPerYear > 2){
        fertiles.push(dinosaur);
      }
    }
    return fertiles;
  },

  predictPopulation: function(years){
    var total = 0;
    for(var dinosaur of this.enclosure){
      total += dinosaur.calculateAnnualFamilyGrowth(years);
    }
    return total;
  }
  
}

module.exports = Enclosure;









  // removeDinosaur: function(dinosaur){
  //   for(var dino of this.enclosure){
  //     if (dino.value === dinosaur.value){
  //       var index = this.enclosure.indexOf(dinosaur);
  //       this.enclosure.splice(index, 1);
  //     } 
  //   } 
  // },