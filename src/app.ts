const a: number = 2;
const b: boolean = true;
const c: string[] = ["hey", "hi", "ds"];
const user: { firstName: string; lastName?: string } = {
  firstName: "John",
  lastName: "Rambo",
};
let date: Date = new Date();

//La forme de cette fonction
const cb: (e: Event) => void = (e: Event): void => {};

function printId(id: number | string): void {
  console.log(id.toString);
}

const compteur = document.querySelector("#compteur") ;
let i = 0;

const increment: (e:Event)=>void = (e:Event)=>{
    i++;
    const span = compteur?.querySelector("span");
    if(span){
        span.textContent = i.toString();
    }
}

/**
 * ? veut dire n'utilise compteur que s'il existe
 */
compteur?.addEventListener("click",increment);
