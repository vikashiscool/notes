<<<<<<< HEAD
var People = {};

// var getNames = function(peeps){
// 		for(i=0; i=peeps.length; i++){
// 			var peepsCap[i] = peeps[i].charAt(0).toUpperCase();
// 		}
// 		return peepsCap;
// 	};

// var sort = function(peeps){
 

// }
// };

var People = function(names){
	this.allNames = [];
	names.forEach(function(name) {
		name = name.charAt(0).toUpperCase() + name.slice(1);
		this.allNames.push(name); //"this" is the same as "self" in Ruby
	}.bind(this)); //calling bind on a function maintains the context of "this" 
};


People.prototype.getNames = function() {
};

People.prototype.sort = function() {
};

=======
var People = function(names) {
  this.allNames = [];
  names.forEach(function(name) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    this.allNames.push(name);
  }.bind(this));
};

People.prototype.getNames = function() {
  return this.allNames;
};

People.prototype.sort = function() {
  this.allNames.sort();
  return this.getNames();
};
>>>>>>> 8e8131f7c437ab394fb067f2531210e7e61e7ce3
