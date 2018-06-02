import{Ishape} from './shape';
import{Parallelogram} from './parallelogram';
import{Triangle} from './triangle';
import {Square} from './square';
import {Circle} from './circle';

let parallelogram = new Parallelogram(5,7);
let triangle = new Triangle(3,5);
let square = new Square(5);
let circle = new Circle(3)
/*
console.log("Ap", parallelogram.getArea())
console.log("Pp",parallelogram.getPerimeter())
console.log("As",square.getArea());
console.log("Ts",square.getPerimeter());
console.log("At",triangle.getArea());
console.log("Pt",triangle.getPerimeter());
console.log("Ac",triangle.getArea());
console.log("Pc",triangle.getPerimeter());
*/
let shapeContainer : Ishape[] = []
shapeContainer.push(parallelogram)
shapeContainer.push(triangle)
shapeContainer.push(square)
shapeContainer.push(circle)

for (let index = 0; index < shapeContainer.length; index++) {
    console.log(shapeContainer[index].getArea());
    console.log(shapeContainer[index].getPerimeter()); 
}
