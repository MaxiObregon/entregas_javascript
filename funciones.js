//Array de aguinaldo Junio 

let salarioDiciembre=parseInt(prompt("Ingrese su sueldo líquido de Diciembre"));
let salarioEnero=parseInt(prompt("Ingrese su sueldo líquido de Enero"));
let salarioFebrero=parseInt(prompt("Ingrese su sueldo líquido de Febrero"));
let salarioMarzo=parseInt(prompt("Ingrese su sueldo líquido de Marzo"));
let salarioAbril=parseInt(prompt("Ingrese su sueldo líquido de Abril"));
let salarioMayo=parseInt(prompt("Ingrese su sueldo líquido de Mayo"));
let salarioPrimerSemestre=(salarioDiciembre + salarioEnero + salarioFebrero + salarioMarzo + salarioAbril + salarioMayo)

let valorAguinaldo1=(salarioPrimerSemestre /12 )  
alert("El aguinaldo de Junio es " + valorAguinaldo1);

const aguinaldoJunio=[salarioDiciembre, salarioEnero, salarioFebrero, 
						salarioMarzo, salarioAbril, salarioMayo]

console.log("La cantidad de meses ingresados son " + aguinaldoJunio.length);
console.log(aguinaldoJunio.includes(salarioMarzo))

//Array de aguinaldo Diciembre 
let salarioJunio=parseInt(prompt("Ingrese su sueldo líquido de Junio"));
let salarioJulio=parseInt(prompt("Ingrese su sueldo líquido de Julio"));
let salarioAgosto=parseInt(prompt("Ingrese su sueldo líquido de Agosto"));
let salarioSeptiembre=parseInt(prompt("Ingrese su sueldo líquido de Septiembre"));
let salarioOctubre=parseInt(prompt("Ingrese su sueldo líquido de Octubre"));
let salarioNoviembre=parseInt(prompt("Ingrese su sueldo líquido de Noviembre"));
let salarioSegundoSemestre=(salarioJunio + salarioJulio + salarioAgosto + 
					salarioSeptiembre + salarioOctubre + salarioNoviembre)

let valorAguinaldo2=(salarioSegundoSemestre /12 )  
alert("El aguinaldo de Diciembre es " + valorAguinaldo2);

const aguinaldoDiciembre=[salarioJunio, salarioJulio, salarioAgosto, 
						salarioSeptiembre, salarioOctubre, salarioNoviembre]

console.log("La cantidad de meses ingresados son " + aguinaldoDiciembre.length);
console.log(aguinaldoDiciembre.includes(salarioMarzo))



