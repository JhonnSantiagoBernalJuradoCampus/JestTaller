/**Dado un número indicar si es par o impar y si es mayor de 10 */
export const par = (number)=>{
    if(typeof number != "number"){
        return "Error"
    }
    else {
        if(number % 2 === 0){
            if(number > 10){
                return "par mayor que 10"
            }
            else {
                return "par menor que 10"
            }
        }
        else{
            if(number > 10){
                return "impar mayor que 10"
            }
            else {
                return "impar menor que 10"
            }
        }
    }
}