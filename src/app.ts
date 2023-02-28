/**
 * vue que la methode reverse modifie le tableau original
 * et si on veut qu'il soie en lecture seul :On utilise readOnly
 * et si on veut que le retour soit en lecture seul: on utilise readonly
 * @param arr T
 * @returns T
 */

function reverse<T>(arr: readonly T[]): T[] {
  //on cree un nouveau tableau puis utilise le renverse
  return [...arr].reverse();
}
class User {
  constructor(
    private firstname:string
  ){}
}
class Collection<T> {
  constructor(private items: T[]) {}

  /**
   * On peut retourne l'instance actuelle
   */
  add(item: T):this{
    this.items.push(item);
    return this;
  }

  first(): T | null {
    return this.items[0] ?? null;
  }
}

const a = new Collection<User>([
  new User("bob"),
  new User("John")
]);
console.log(a.first());
