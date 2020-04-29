//document.write("<h1>Hello Git File </h1>");
/*var a = 3; // '=' right-to-left
var b = 3;
var result = a+b; //+ left-to-right
 document.write("The result is :"+result);

*/

/*var x = 7;
if(x%2==0){
    document.write("Even Number")
}
else{
    document.write("Odd Number");
}
*/
// var day = 10;
// switch (day) {
//     case 1:
//         document.write("<h2>Sunday</h2>");
//         break;
//     case 2:
//         document.write("<h2>Monday</h2>");
//         break;
//     case 3:
//         document.write("<h2>Tuesday</h2>");
//         break;
//     case 4:
//         document.write("<h2>Wednesday</h2>");
//         break;
//     case 5:
//         document.write("<h2>Thursday</h2>");
//         break;
//     case 6:
//         document.write("<h2>Friday</h2>");
//         break;
//     case 7:
//         document.write("<h2>Saturday</h2>");
//         break;
//     default:
//         document.write("<h2>Wrong Input</h2>");
// }

// for(var x = 2 ; x <= 10 ; x+=2){
//     document.write("<h2>"+(x*5)+"</h2>");

// }

// function add2Numbers(a, b){
//     var total = a+b;
//     return total;
    
// }

// var output = add2Numbers(10,5);
// document.write("<h1> The total is :"+output+"</h1>");

// var car = {

//     car_brand : "Tesla",
//     car_model : "Model 3",
//     price : 3500,

//     testAutoPilot : function(){
//         document.write("<h2>The car has auto pilot</h2>");
//     }
// }

// car.testAutoPilot();
// document.write("<h2>Car brand name is :"+car.car_brand+"</h2>");
function Cars(car_brand,car_model,price){
    this.car_brand = car_brand;
    this.car_model = car_model,
    this.price = price,
    this.teslaAutoPilot = function(){
        document.write("<h2>The car has auto pilot</h2>");
    }
}

var c1 = new Cars("Tesla","Model3",3500);
c1.teslaAutoPilot();

document.write(c1.price);