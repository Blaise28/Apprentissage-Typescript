//Les interfaces restent ouverts
interface Point {
  x: number;
  y: number;
  get(): number;
}

interface Point {
  z: number;
}

//autre exemple => modifie l'interface de window
interface Window {
  GoogleAnalytics: string;
}
window.GoogleAnalytics;

//on peut aussi les implementes
class Triangle implements Point {
  x = 3;
  y = 4;
  z = 2;
  get(): number {
    return this.x;
  }
}

function draw(p: Point) {}

/**
 * vue que draw attend comme argument de type Point
 * les classes qui implementes cette interface seront le bienvenue
 * */
draw(new Triangle());
