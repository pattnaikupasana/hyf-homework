
function removeAName(name) {
for (let i = 0; i < names.length; i++){
        if (names[i] === name) {
            names.splice(i, 1);
        } 
   }
}   
const names = ["Peter", "Ahmad", "Yana", "kristina", "Rasmus", "Samuel", "katrine", "Tala",];
removeAName("Ahmad");
console.log(names);

/*const nameToRemove = "Ahmad";
names.splice(names.indexOf(nameToRemove), 1)
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']*/