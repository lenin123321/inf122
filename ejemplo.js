let suma = 5 + 5;
console.log(suma);

let resta = 5 - 5;
console.log(resta);

let multiplicacion = 5 * 5;
console.log(multiplicacion);

let division = 5 / 5;
console.log(division);

let modulo = 5 % 5;
console.log(modulo);

let mayorQue = 5 > 5;
console.log(mayorQue);

let mayorIgualQue = 5 >= 5;
console.log(mayorIgualQue);

let menorQue = 5 < 5;
console.log(menorQue);

let menorIgualQue = 5 <= 5;
console.log(menorIgualQue);

let igualQue = 5 == 5;
console.log(igualQue);

let diferenteQue = 5 != 5;
console.log(diferenteQue);

let and = true && true;
let or = true || false;
let not = !true;
///
const persona={
    nombre:"carlos",
    edad:25,
    ocupacion:"desarrolador"
};

console.log(persona.edad);
console.log(persona.nombre);
console.log(persona.ocupacion);

const colores=["rojo","verde","azul"];

persona["apellido"]="perez";

console.log(persona);

persona.nombre="pedrito";

console.log(persona);

persona["ci"]=9075966;
9075966
console.log(persona);

persona.ocupacion="programador";

console.log(persona);

console.log(colores.length);


console.log(colores.[0]); 

console.log(colores.find("rojo")); 


for(i=0; i<colores;i++){
    console.log(colores[i])
}

for(i=0; i<colores.length;i++){
    console.log("elemento: "+colores[i]+ ", indice:"+i);
}

colores.push("violeta");
4
colores.push("blanco");
5
colores.push("rosa");
6
for(i=0; i<colores.length;i++){
    console.log("elemento: "+colores[i]+ ", indice:"+i);
}
