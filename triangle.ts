import{Ishape} from './shape';
import { angularMath } from './node_modules/angular-ts-math';

export class Triangle implements Ishape{
  constructor(public base: number, public high: number){

  }
   getArea():number{
      return (this.base*this.high)/2
   }
   getPerimeter():number{
   // let ipo = ( Math.sqrt(Math.pow(this.high,2)) + (Math.pow(this.base,2)/4)  )
   let ipo = angularMath.squareOfNumber( (angularMath.powerOfNumber(this.high,2)) + (angularMath.powerOfNumber(this.base,2)/4) )
    return ipo*2 + this.base
   }
}