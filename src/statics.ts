class Shape {
  static #origin: { x: number; y: number };
  static size: { x: number; y: number };

  /**
   * vu qu'il est prive et static l'initialisation se fait :
   */
  static {
    this.#origin = { x: 2, y: 2 };
  }
}

Shape.size = { x: 2, y: 4 };
