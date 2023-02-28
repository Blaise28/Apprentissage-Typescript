abstract class Geometry {
  x = 0;
  y = 0;
  abstract surface(): number;
}

class Triangle extends Geometry {
  b = 2;
  h = 3;
  surface(): number {
    return this.b * this.h;
  }
}
