declare class FeatureFlags {
    env: string;
    darkMode(): boolean;
    privateMode(): boolean;
    nsfMode(): boolean;
}
/**
 * On va recupere les proprietes de l'objet passe comme parametre
 * on peut exclure certaines propriete
 */
type OptionFlags<T> = {
    +readonly [key in keyof T as Exclude<key, "env">]+?: T[key];
};
type Ab = OptionFlags<FeatureFlags>;
