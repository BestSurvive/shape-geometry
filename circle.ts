import { Ishape } from './shape';
import { angularMath } from './node_modules/angular-ts-math';

export class Circle implements Ishape {
    constructor(public radius: number) {

    }
    getArea(): number {
        return angularMath.powerOfNumber(this.radius,2) * angularMath.getPi()
    }
    getPerimeter(): number {
        return this.radius * 2 * angularMath.getPi() 
    }
}