type User = { firstname: string; lastname?: string };
type DateString = string;
type Id = string | number;

//creation d'un type a partir des cles d'un autre
type k = keyof User;

//un type qui herite d'un autre
type Username = User["firstname"];

//on peut creer des type generiques
type Identity<ArgType> = (e: ArgType) => ArgType;

const User: User = { firstname: "Blaise" };
let date: DateString = "2023/02/13 4:20:3";
let id: Id = 2;

/**
 * ca doit extends d'un objet qui contient une cle lenght qui serai de type number
 * @param arg TYpe
 * @returns Type
 */
function consoleSize<Type extends { length: number }>(arg: Type): Type {
  console.log(arg.length);
  return arg;
}

const ab = consoleSize(["asd", 1]);

/**
 * on lui donne le type qu'on souhaite et celui qu'il va retourne
 * @param a ArgType
 * @returns ArgType
 */
function Gcool<ArgType>(a: ArgType): ArgType {
  return a;
}
let cool: number = Gcool<number>(3);
let coll: string = Gcool<string>("salut les gens");

function first<Type>(a: Type[]): Type {
  return a[0];
}
let first_str: string = first(["azez", "sddsd", "glkd"]);
let firstEl = first([0, true, "sddsd", "glkd"]);

const compteur = document.querySelector<HTMLButtonElement>("#compteur");
let i = 0;

const increment: (e: Event) => void = (e: Event) => {
  i++;
  const span = compteur?.querySelector("span");
  if (span) {
    span.textContent = i.toString();
  }
};

/**
 * ? veut dire n'utilise compteur que s'il existe
 */
compteur?.addEventListener("click", increment);
