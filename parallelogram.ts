import{Ishape} from './shape';

export class Parallelogram implements Ishape{
  constructor(public base: number, public high: number){

  }
   getArea():number{
      return this.base*this.high
   }
   getPerimeter():number{
    return (this.base + this.high) *2
 }
}