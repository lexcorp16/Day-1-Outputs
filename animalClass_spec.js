(function(){
  'use strict';
  describe("Animal Class: create animals and make them move", function() {

    it("The goat should be a type of `object`, and an instance of the `Animal` class", function() {
      var goat = new Animal(5);
      expect(typeof goat).toEqual(typeof {});
      expect(goat instanceof Animal).toBeTruthy();
    });
    
    it("The move function should make the animal walk", function() {
      var dog  = new Animal();
      var moving = dog.move();
      expect(moving).toBe("WALKING.....");
      expect(typeof dog.move).toBe(typeof (function (){}));
   
    });

    it("The cat age and number of legs should be a property of the animal", function() {
      var cat  = new Animal(10, 4);
      expect(cat.age).toEqual(10);
      expect(cat.numberOfLegs).toEqual(4);
    });

  });

  describe("Mammal class: creates a mammal and makes them give rise to young", function(){
    it("The ape should be an instance of the mammal class with properties properly assigned", function(){
      var ape = new Mammal(15, "black");
      expect(ape instanceof Mammal).toBeTruthy();
      expect(ape.furColor).toBe("black");

    });

    it("should have access to the move function of the super class", function(){
      var calf = new Mammal(5, "brown");
      var movee = calf.move();
      expect(movee).toBe("WALKING.....");
    });

    it("should determine if the mammal is to give birth", function(){
      var pig = new Mammal(4, "white");
      expect(pig.giveBirth("female", true, "elapsed")).toBe("congrats, youre now a mother");
    });

  });

  describe("Human class: creates a human and makes them speak", function(){
    it("should have access to the giveBirth function of the super class", function(){
      var tola = new Human(5, "brown", "English");
      expect(tola.giveBirth("female", true, "elapsed")).toBe("congrats, youre now a mother");
    });

    it("should speak based on language", function(){
      var teni = new Human(4, "black", "French");
      expect(teni.speak()).toBe("comment ca va?");
    });
  })
})();