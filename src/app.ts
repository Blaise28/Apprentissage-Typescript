export class Pointer{
  x: number = 0;
  y: number = 0;

  move(x:number, y: number){
    this.x += x;
    this.y += y;
  }
}

import scrollTo from 'scroll-to';

scrollTo(500,1200,{
  ease:'out-bounce',
  duration: 1500
});