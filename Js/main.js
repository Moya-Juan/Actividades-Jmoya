



function suma(){
// se declaran varianles requeridas
    let a = 0
    let b = 0
    let sum = 0
 // Se solicitan datos y se asignan en variables
    a = parseInt(prompt("Por favor ingrese el primer valor a sumar") )
    b = parseInt( prompt("Por favor ingrese el segundo valor a sumar"))
// Se genera el proceso/operaciones requeridas
    sum = a + b

// Se muestra el resultado
    alert("El resultado de la suma entre "+ a +" y "+b+" es:..."+sum)
    console.log("El resultado de la suma entre "+a+" y "+ b+" es:... "+sum)
}
function opBasicas(){
// Declaracion variables.
let a = 0
let b = 0
let sum = 0
let res = 0
let mult= 0
let div= 0
let op = ""
// toma de datos
a = parseInt(prompt("Ingrese el primer valor"))
b= parseInt(prompt("Ingrese el segundo valor a calcular"))
op= prompt("ingresa la operacion que desea ejecurar entre '+' '-' '/' '*'  ")

if (op == '-' ) {
    res = a-b
    alert("la resta entre"+ a + "y"+ b+"es: "+ res)    
}
else if (op == "+"){
    sum = a+b
    alert("la suma entre"+a+ "y"+b+"es: "+ sum)
}
else if (op == "/"){
    if (a==0 || b==0) {
       alert("alguno de los dos numeros ingreados no puede ser igual a '0'") 
    }else{
    div = a/b
    alert("la division entre"+a+ "y"+b+"es: "+ div)
}
}
else if (op == "*" || op =="x"){
    mult = a*b
    alert("la multiplicacion entre"+a+ "y"+b+"es: "+ mult)
}
else{
alert("No se ha ingresado una operacion valida por favor escriba entre las siguentes: '+'  '-'  '*'  '/' ")
}
}
function convMed(){
// Declaracion variables
    let metros = 0
    let pulgadas= 0 
    let centiMetros= 0 
// Se toma el valor en metros:
    metros = parseInt(prompt("ingrese por favor la cantidad de 'metros' a calcular:"))
    // Se realiza el procedimiento: 
    pulgadas = metros * 39.3701
    centiMetros =  metros * 100 
// Se muestra en pantalla el resultado:
    alert(" Los siuentes "+metros+" metros a centimetros es "+centiMetros+" y en pulgadas es : "+pulgadas)
}
function cuandradoNum(){
//Declaracion varia 
    let num,cua = 0

//proceso... 
    
num = cua*cua 

// mostrar
alert("el cuadrado de "+num+ "es:  "+ cua )

}
function promNotas(){

let materia = ""
let n1,n2,n3,n4,n5,n6,n7,p = 0

materia = prompt("Ingresa el nombre de la materia:")
n1 = parseInt(prompt("Ingrese la nota 1"))
n2 = parseInt(prompt("Ingrese la nota 2"))
n3 = parseInt(prompt("Ingrese la nota 3"))
n4 = parseInt(prompt("Ingrese la nota 4"))
n5 = parseInt(prompt("Ingrese la nota 5"))
n6 = parseInt(prompt("Ingrese la nota 6"))
n7 = parseInt(prompt("Ingrese la nota 7"))
// procesos
p = (n1+n2+n3+n4+n5+n6+n7)/7

// mostrar resultado.
if (p >= 6) {

    alert("el aprendiz ha aprobado "+materia+ " con:" + p )
    
}else{
    alert("el aprendiz NO ha aprobado "+materia+ " con:" + p )
}
}
function mayordosnum(){
let n1,n2= 0


n1 = parseInt(prompt("Ingrese el primer numero: "))
n2 = parseInt(prompt("Ingrese el primer numero: "))

if(n1==n2){

    alert("Ambos Numeros SON IGUALES, se necesitan dos numeros diferentes")
}else if(n1>n2){

    alert("EL NUMERO MAYOR ES: "+n1)


}else{
    alert("EL NUMERO MAYOR ES: " + n2)

}





}
function areaTri(){

    let b,a,area = 0

    a = parseInt(prompt("ingrese la altura del triangulo"))
    b = parseInt(prompt("ingrese la base del triangulo"))

    area = (b*a)/2

    alert("el area del triangulo es:  "+ area)

}
function menorTres(){

let a,b,c= 0

a = parseInt(prompt("ingrese el primer numero"))
b = parseInt(prompt("ingrese el segundo numero"))
c = parseInt(prompt("ingrese el tercer numero"))

if(a==b && a==c){
alert("todos los numeros son iguales")
}else if(a<b && a<c){

    alert("el numero menor es: "+a )

} else if( b<c){

    alert("El numero menor es: "+b )
} else{

    alert("El numero menor es"+ c )
}
}
function edadporaño(){

    let añoActual=0
    let edad=0
    let añonacido= 0

    añoActual = parseInt(prompt("Ingrese el año actual:"))
    edad = parseInt(prompt("Ingrese su edad actual:"))

    añonacido = añoActual - edad

    alert("La fecha en la que usted nacio es: "+ añonacido  )
}
function parImpar(){

    let num = 0

    num = parseInt(prompt("Ingrese el Numero a validar: "))

    if (num % 2 == 0) {

        alert("EL numero "+num+" es Par")
    }
    else{
        alert("EL numero "+num+" NO ES Par")
    }


}

function cDT(){

    let años,cap,gan = 0
    let mesesT = años * 12

        cap = parseInt(prompt("Ingrese su capital inicial"))
        años = parseInt(prompt("Ingrese los años para validar"))
        mesesT = 12 * años
        
        gan = cap * Math.pow((1 + 0.17), mesesT);

        alert("Bajo el monto inicial: "+ cap+" la ganancia en "+años+" años seria: "+gan)

    

}


function fruteria(){
    let p, d, pr, k, tp;
    let fr;
  
    p = 0;
    d = 0;
    pr = 0;
    k = 0;
    tp = 0;
  
    fr = prompt("Escribe la fruta a comprar");
    k = parseFloat(prompt("Escribe la cantidad en kilos:"));
    p = parseFloat(prompt("Escribe el precio por kilo:"));
  
    switch (fr) {
      case "manzana":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "pera":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      case "sandia":
        switch (true) {
          case k < 3:
            pr = k * p;
            d = pr * 0.02;
            tp = pr - d;
            break;
          case k < 6:
            pr = k * p;
            d = pr * 0.04;
            tp = pr - d;
            break;
          case k < 17:
            pr = k * p;
            d = pr * 0.1;
            tp = pr - d;
            break;
        }
        break;
  
      default:
        alert(
          "La fruta ingresada no está disponible. Por favor, elija manzana, pera o sandía."
        );
        return; // Salir de la función si no se eligió una fruta válida
    }
  
    alert(
      "El valor del descuento es: $" +
        d.toFixed(2) +
        " pesos. El valor total a pagar es: $" +
        tp.toFixed(2) +
        " pesos"
    );



}