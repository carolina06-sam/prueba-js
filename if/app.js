var numero1 = 5;
var numero2 = 8;

if (numero1 < numero2) {
    console.log(numero1, "no es mayor  que numero 2");
}
if (numero2 > 0) {
    console.log(numero2, "es positivo");
}
if (numero1 < 0) {
    console.log(numero1, "es negativo o distinto a 0 ");
}
if (numero1++ > numero2) {
    console.log(
        "incrementar en  1 unidad el valor de ",
        numero1,
        "no lo hace mayor o igual que ",
        numero2
    );
    console.log(numero1);
}
