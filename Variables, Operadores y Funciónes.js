//VARIABLES
// el igual = es para asignaciónes
var cajon;
var cajon10='Guantes azules';
//No olvidar los punto y comas al final de asignaciones
/* Strings --> van entre comillas simples*/ String
/* Números*/ Number
/* Boleanos*/ Boolean
/*Undefined --> Cuando aún no se le ha asignado un valor a la variable*/ undefined
/*Null --> El programador indica que el valor de la variable es igual a null*/ null
let sym1=Symbol()
/*Symbol*/ Symbol
/*Object-->Tipo estructural especial que no es de datos pero para cualquier instancia de objeto construido que también se utiliza
como estructuras de datos: new Object, new Array, new Map (en-US), new Set, new WeakMap, new WeakSet, new Date y casi todo lo hecho 
con la palabra clave new*/ Object
/*Function-->una estructura sin datos, aunque también responde al operador typeof: typeof instance === "function"
Esta simplemente es una forma abreviada para funciones,aunque cada constructor de funciones se deriva del constructor 
Object.*/ Function



//OPERADORES
//consoles.log(); --> para imprimir valores que querramos y no olvidar los puntos y coma al final de las asignaciones
console.log(9-(-4))
/*suma=+, resta=-, multiplicación=*, división= /, modulo o resto=%, potenciación=** y el orden de ejecución va tal cual 
escrito aqui de < a >, utilizar los parentesis para hacer algo importante*/
//la Suma concatena STRINGS y VARIABLES
var nombre='Arturo';
var saludo='Hola '+nombre;
console.log(saludo);
console.log('Hola '+'Arturo');


//OPERADORES DE COMPARACIÓN
//mayor que (>), menor que (<), mayor o igual (>=), menor o igual (<=), igual == ( se representa con doble igual) y distinto de (!=)
console.log(4<5);
console.log(4==5);
//igualdad estricta === verifica si el tipo de dato y el valor son los mismos mientras que la igualdad = verifica solo el valor
console.log(3==='3');
console.log(3=='3');
//ASOCIATIVIDAD--> va de derecha a izquierda
var a=1;
var b=2;
var c=a=b;
console.log(a);
console.log(b);
console.log(c);


//FUNCIONES--> no confundir el console.log con return, el console.log solo ayuda visualmente a la hora de programar, en funciones
// me retorna el valor mas no es tipo de dato, en cambio el return ayuda a mostrame el tipo de dato correspondiente
//Además todo lo que esté por debajo del RETURN ya no se ejecutará
//Primero -->función normal
function sumaTres(x) {
    return (x+3);
}
sumaTres(5);
//Segundo -->función con variable
var sumaTres = function (x){
    return x+3;
};
sumaTres(5);
//Tercero --> función flecha
var sumaTres = (x) => {
    return x+3;
};
sumaTres(5);

var suma=0
for (var i=0; i<10; i++){
    suma= suma+1;
    console.log(suma)
}
//CONSOLE.LOG nos ayuda visualmente nada más.
//NOMENCLATURAS--> camelCase=holaMundo, PascalCase=HolaMundo, snakecase=hola_mundo


//CONDICIONALES IF / ELSE
function viajar(destino) {
    if(destino === 'Brasil') {
             return ('Gire a la izquierda');
    } 
    else if(destino === 'Argentina') {
             return ('Gire a la derecha');
    } 
    else {
             return ('Nos perdimos');
    }
  };
viajar('Brasil');
viajar('Argentina');
// no olvidar los parentesis{}


//MATEMÁTICAS DE OBJETOS
Math.pow(2,3);  // convierte el primer numero en base y el segundo en potencia =8
Math.round(0.53);  // redondea el numero al entero mas próximo =1
Math.floor(4.65);  // redondea el numero al entero de menor valor =4
Math.ceil(3.21);  // redondea el numero al entero de mayor valor =4
Math.max(1,2,3,4,5);  // me da el numero de mayor valor =5
Math.min(1,2,3,4,5);  // me da el numero de menor valor =1
Math.random();  // me da un numero al azar entre 0 y 1


// .length --> cuenta cuantos caracteres hay en lo escrito, es decir letras

// || sirve como un or o disyuntor es muy util

// if(letra==="a"||letra==="e"||etc)

// && --> "and", "y", conjuga 2 o más condiciones al mismo tiempo, se puede ir agregando las condiciones que se quiera
function mayorYMenor(num){
    if (num>5 && num<10 && num%2===0){
        console.log(num, true);
    } 
    else {
        console.log(num, false);
    }
};
mayorYMenor(7);
mayorYMenor(6);

// ||-->"or", disyuntor, sean los condicionales a los que se le aplique esto determinará al menos una condición que se cumpla
// solo se cumple una condición propuesta
function nombrePrimero(nom){
    if (nom==='Joel'|| nom.length<3){
        console.log (nom, true);
    }
    else {
        console.log(nom,false)
    }
};
nombrePrimero('Arturo'); // esta no cumple con ninguna condición
nombrePrimero('Joel'); // esta cumple con al menos una condición
nombrePrimero('jo'); // esta cumplea con al menos una condición

// ! --> negación, en este ejemplo solo se ejecutará si ambos argumentos son diferentes ya que no tengo otro valor de salida
// transforma un valor en su opuesto
function negación(permiso){
    if (permiso!==true){
        console.log('Tiene permiso');
    }
};
negación(false);

// el operador "or" precede al "and"
function condicionCompleja(comple){
    if (comple>9 && comple%2===0 || comple===3){
        console.log(comple,true);
    }
    else {
        console.log(comple,false);
    }
};
condicionCompleja(3);
condicionCompleja(10);
condicionCompleja(6);
// no olvidar que se puede preceder algunos operadores aplicandole parentesis






// BUCLES O CICLOS DE ITERACIÓN --> "for" y "while"


// FOR --> Cuando sabemos la cantidad máxima exacta de pasos que queremos ejecutar
var suma=0;
for (var i=0; i<10; i++){
    suma= suma+i;
    console.log('variable de itaración: ',i);
}
console.log('variable suma ',suma)


// WHILE --> Cuando no sabemos con certeza la cantidad de pasos necesarios hasta finalizar la ejecución
var suma=0
while (suma<10){
    suma=suma+1;
    console.log(suma)
}