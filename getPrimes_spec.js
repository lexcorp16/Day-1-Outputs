describe("Tests Prime number generator ", function() {
  describe("Case for invalid input", function() {

    it("should return 'invalid input' for strings", function() {
      expect(getPrimes("number")).toEqual('Invalid Input');
    });

    it("should return 'invalid input' for 0", function() {
      expect(getPrimes(0)).toEqual('Invalid Input');
    });

    it("should return 'invalid input' for negative numbers", function() {
      expect(getPrimes(-5)).toEqual('Invalid Input');
    });

  });

  describe("Returns the correct array of primes",function(){
  	
  	it("should return [2,3,5,7,11] for strings", function() {
      expect(getPrimes(12)).toEqual([2, 3, 5, 7, 11]);
    });

    it("should return [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67] for 70", function() {
      expect(getPrimes(70)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
    });

    it("should return [] for 1", function() {
      expect(getPrimes(1)).toEqual([]);
    });

  });

  describe("Output is of the correct data type",function(){
  	it("should return an array for 15", function() {
      expect(getPrimes(15)).toBeArray;
    });

  });

});