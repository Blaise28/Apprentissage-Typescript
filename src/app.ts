//Unknown

function demo(arg: unknown) {
  if (arg instanceof HTMLInputElement) {
    arg.value = "salut les gens";
  }
}

const a = { isprivate: true, isPublic: false } as const;
const b = ["blaise", "Man"] as const;

//Tuple

type ListItem = [string, number];

const list1: ListItem = ["tomate", 1];
const ab: (string | number)[] = ["tomate", "string"];
/**
 * list1 !== ab
 */
const list2: ListItem = ["banane", 3];

//extends pour que ca soit des tableaux qu'on ne connait pas le type des valeurs
function merge<T extends unknown[], U extends unknown[]>(
  a: T,
  b: U
): [...T, ...U] {
  return [...a, ...b];
}

//il va conserve le type fixe du tableau
const list = merge(list1, list2);

//si on ajoute merge avec un autre type de tableau il va se debrouille
const listDiff = merge(list1, [1, 2, 5]);

//Enum

const enum STEPS {
  Intro,
  selection,
  panier,
  paiment,
  facture,
}

const step: STEPS = STEPS.facture;

console.log(STEPS["Intro"]);

