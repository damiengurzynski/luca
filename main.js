var luca = document.getElementById("luca");

var food = "var food = 1; ";
var dup = "if (food){food = 'var food = 0; '; var clone = document.createElement('script'); clone.innerHTML = food + dup; document.body.appendChild(clone)}";
var dna = [food, dup];

luca.innerHTML = dna.join("");

