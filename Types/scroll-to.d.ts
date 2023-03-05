/**
 * on declare notre methode dispo dans le module scroll-to
 * Qui contient une constant ScrollTo et qui est une fonction avec cette structure avec les types
 */
declare module "scroll-to"{
    const scrollTo:(x: number, y:number, options:{
        ease: string,
        duration: number
    }) => void;

    export default scrollTo;
} 