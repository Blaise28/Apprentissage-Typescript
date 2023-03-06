// type AnimalOptions = { nager: any } | { sauter: any };
// type AnimalFromOptions<T> = T extends { nager: any } ? Poisson : Chat;

// class Poisson {}

// class Chat {}

// function generator<T extends AnimalOptions>(options: T): AnimalFromOptions<T> {
//   if ("nager" in options) {
//     return new Poisson();
//   } else {
//     return new Chat();
//   }
// }

// const a = generator({ nager: "Je nage" });

// //Utilise la valeur de retour d'une fonction comme type de retour

// /**
//  * notre generique T  sera un object qui contient une methode cri
//  * Et la valeur de retour on la transforme en Generique
//  * Puis le retourne
//  */
// type AnimalCri<T> = T extends { cri: () => infer U } ? U : never;
// class Chien {
//   cri() {
//     return "woauuu";
//   }
// }
// class Panda {
//   cri() {
//     return false;
//   }
// }

// /**
//  * il va detecter le retour
//  */
// type A = AnimalCri<Chien>;
// type B = AnimalCri<Panda>;

class FeatureFlags {
  env = "hello";
  darkMode() {
    return false;
  }
  privateMode() {
    return true;
  }
  nsfMode() {
    return false;
  }
}

/**
 * On va recupere les proprietes de l'objet passe comme parametre
 * on peut exclure certaines propriete
 */
type OptionFlags<T> = {
  +readonly [key in keyof T as Exclude<key, "env">]+?: T[key];
};

type Ab = OptionFlags<FeatureFlags>;
