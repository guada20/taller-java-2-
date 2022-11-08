//primer punto
/*
var sueldo = prompt("Digite el sueldo del empleado");
var salud =  sueldo*8/100;
var pension = sueldo*10/100
var sueldoNeto = sueldo - salud - pension
document.write("El sueldo del empleado es" + sueldo+"<br>");
document.write("El descuento de salud es:" +salud+"<br>");
document.write("El descuento de pension es:" +pension+"<br>");
document.write("El sueldo a pagar es" +sueldoNeto+"<br>");
*/
//segundo punto
/*
var base_triangulo = prompt("ingrese la base del triangulo");
var altura_triangulo = prompt("ingrese la altura del triangulo");
var area_triangulo = base_triangulo*altura_triangulo/2
document.write("El area del triangulo es: " +area_triangulo);
*/
//tercer punto
/*
var numero_uno = parseInt (prompt("ingrese el primer numero"));
var numero_dos =  parseInt (prompt("ingrese el segundo numero"));
var suma = numero_uno+numero_dos
var resta = numero_uno-numero_dos
var multiplicacion = numero_uno*numero_dos
var division = numero_uno/numero_dos
var modulo= numero_uno%numero_dos
document.write("la suma de" + numero_uno +  " mas "  + numero_dos + " es igual a: " + suma + "<br>");
document.write("la resta de" + numero_uno +   " - "  + numero_dos + " es igual a: " + resta + "<br>");
document.write("la multiplicacion de" + numero_uno +  " por "  + numero_dos + " es igual a: " + multiplicacion + "<br>");
document.write("la division de" + numero_uno +  " / "  + numero_dos + " es igual a " + division + "<br>");
document.write("El residuo de " + numero_uno +   " / "  + numero_dos + "es igual a" + modulo + "<br>");
*/
//cuarto punto
/*
var horas_trabajadas = parseInt(prompt("ingrese la cantidad de horas trabajadas al mes sin contar las horas extras"));
var horas_extras = parseInt(prompt("ingrese la cantidad de horas extras trabajadas en el mes"));
var valor_hora = parseInt(prompt("ingrese el valor de la hora legal"));
var valor_horaextra = parseInt(prompt("ingrese el valor de la hora extra"));
var salario_legal = horas_trabajadas*valor_hora
var horas_extras = horas_extras*valor_horaextra
var salario_neto = salario_legal+horas_extras
document.write(" Su salario legal es: " + salario_legal + "<br>")
document.write(" El valor total de sus horas extras es:" + horas_extras +  "<br>");
document.write( " El valor total de su salario es: " + salario_neto +  "<br>");
*/
//quinto punto
        var  preart=parseFloat(prompt("ingrese precio del producto porfavor"));
        var  iva=(preart*0.19);
        var prefinal=(preart+iva);
        document.write("el precio del producto es: " + preart +  "<br>")
        document.write("el valor del iva es:" + iva +  "<br>");
        document.write("el precio final de la compra es:"  + prefinal +  "<br>");