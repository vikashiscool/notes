describe("People", function() {

  var peeps = new People(["jill", "jack"]); 
  // akin to creating a new instance of a class in ruby
  //classes (ruby) and constructors (JS) are the same thing

  describe("name get", function() {
    it("returns all the peoples' names", function() {
      expect(peeps.getNames()).toEqual(["Jill", "Jack"]);
    }); //This is a prototype, which is the equivalent of an instance method in Ruby.
  });

  describe("sort", function() {
    it("sorts the names of Jack & Jill", function() {
      peeps.sort();
      expect(peeps.getNames()).not.toEqual(["Jill", "Jack"]);
      expect(peeps.getNames()).toEqual(["Jack", "Jill"]);
    });
    it("sorts the names of more than two people", function() {
      peeps = new People(["Zoe", "Chloe", "Joey", "Bill"]);
      peeps.sort();
      expect(peeps.getNames()).toEqual(["Bill", "Chloe", "Joey", "Zoe"]);
    });
  });

});