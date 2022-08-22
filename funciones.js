//Array de aguinaldo Junio 

let salarioDiciembre=parseInt(prompt("Ingrese su sueldo líquido de Diciembre"));
let salarioEnero=parseInt(prompt("Ingrese su sueldo líquido de Enero"));
let salarioFebrero=parseInt(prompt("Ingrese su sueldo líquido de Febrero"));
let salarioMarzo=parseInt(prompt("Ingrese su sueldo líquido de Marzo"));
let salarioAbril=parseInt(prompt("Ingrese su sueldo líquido de Abril"));
let salarioMayo=parseInt(prompt("Ingrese su sueldo líquido de Mayo"));
let salarioPrimerSemestre=(salarioDiciembre + salarioEnero + salarioFebrero + salarioMarzo + salarioAbril + salarioMayo)

let aguinaldoJunio=(salarioPrimerSemestre /12 )  
alert("El aguinaldo de Junio es " + aguinaldoJunio);


//USO DE ARRAYS PARA PRIMER AGUINALDO
const arraySueldos1=[salarioDiciembre, salarioEnero, salarioFebrero, 
						salarioMarzo, salarioAbril, salarioMayo]
console.log("La cantidad de meses ingresados son " + arraySueldos1.length);
console.log(arraySueldos1.includes(salarioMarzo))

//Consulta si quiere calcular aguinaldo diciembre
let consulta = prompt("¿Desea calcular el aguinaldo de Diciembre?")

if (consulta=="si") {
	let salarioJunio=parseInt(prompt("Ingrese su sueldo líquido de Junio"));
	let salarioJulio=parseInt(prompt("Ingrese su sueldo líquido de Julio"));
	let salarioAgosto=parseInt(prompt("Ingrese su sueldo líquido de Agosto"));
	let salarioSeptiembre=parseInt(prompt("Ingrese su sueldo líquido de Septiembre"));
	let salarioOctubre=parseInt(prompt("Ingrese su sueldo líquido de Octubre"));
	let salarioNoviembre=parseInt(prompt("Ingrese su sueldo líquido de Noviembre"));
	let salarioSegundoSemestre=(salarioJunio + salarioJulio + salarioAgosto + 
				salarioSeptiembre + salarioOctubre + salarioNoviembre)

	let aguinaldoDiciembre=(salarioSegundoSemestre /12 )  
	alert("El aguinaldo de Diciembre es " + aguinaldoDiciembre);
	alert("Gracias por usar este servicio.")
	const arraySueldos2=[salarioJunio, salarioJulio, salarioAgosto, 
				salarioSeptiembre, salarioOctubre, salarioNoviembre]
	//USO DE ARRAYS PARA SEGUNDO AGUINALDO
	console.log("La cantidad de meses ingresados son " + aguinaldoDiciembre.length);
	console.log(aguinaldoDiciembre.includes(salarioMarzo))


} else {
	alert("Gracias por usar este servicio.")
}






