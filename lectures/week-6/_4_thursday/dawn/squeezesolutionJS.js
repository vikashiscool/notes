//TEST FOR THE PROGRAM

describe ("#squeeze", function() {
  it("it removes duplicate letters from a word", function() {
    expect(squeeze("squeeze")).toBe("squeze");
    expect(squeeze("AW-WEE-OO KILLER TOFU")).toBe("AW-WE-O KILER TOFU");
    expect(squeeze("yabba dabba doo")).toBe("yaba daba do");
  });
}); 

//PROGRAM

function squeeze(string) {
  //Array that will store single letters
  var splitString = string.split(""); //splits the string into an array of letters
  var previousLetter = ""; //variable declaration in the function's namespace
  var singleLettersCollection = splitString.filter(function(letter){
    if(letter != previousLetter){ //tests if the letter is a duplicate
      previousLetter = letter; //update previous letter value
      return letter; //adds letter to singleLettersCollection
    }
  });
  return singleLettersCollection.join(""); //joins the array back into a string
}
