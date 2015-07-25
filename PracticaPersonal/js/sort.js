var maxSpeed = {car:300, bike:60, motorbike:200, airplane:1000,
    helicopter:400, rocket:8*60*60}
var sortable = [];
for (var vehicle in maxSpeed)
      sortable.push([vehicle, maxSpeed[vehicle]]);
sortable.sort(function(a, b) {return b[1] - a[1]});

console.log(JSON.stringify(sortable,null, 0)); //función para mostrar el contenido de un objeto bien
console.log(sortable);
//[["bike", 60], ["motorbike", 200], ["car", 300],
//["helicopter", 400], ["airplane", 1000], ["rocket", 28800]]

var fruit = ['cherries', 'apples', 'bananas'];
fruit.sort(); // ['apples', 'bananas', 'cherries']

console.log(fruit);

