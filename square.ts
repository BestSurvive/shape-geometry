import { Parallelogram } from './parallelogram';

export class Square extends Parallelogram{
    constructor(public side:number){
        super(side,side) //new Parallelogram
    }
 
}