export class Pointer{
  x: number = 0;
  y: number = 0;

  move(x:number, y: number){
    this.x += x;
    this.y += y;
  }
}