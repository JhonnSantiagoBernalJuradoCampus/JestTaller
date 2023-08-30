/**. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
 */
export let nota = (n1,n2,n3) =>{
    const notas = [n1,n2,n3];
    //Validando si alguna nota es o menor 0 o mayor a 5 o es un string para pasar error
    if(notas.some(nota=> nota<0 || nota>5 || typeof nota != "number")){
        return "Error"
    } else {
        const promedio = (n1+n2+n3)/3;
        if (promedio <= 3.9) return "Estudie"
        else return "becado"
    }
}