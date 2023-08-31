/**Construir el algoritmo para determinar el voltaje de un
circuito a partir de la resistencia y la intensidad de corriente. */
export const voltaje= (corriente, resistencia)=>{
    const datos = [corriente, resistencia];
    if(datos.some(dato=> dato<0 || typeof dato != "number")){
        return "Error";
    }
    else{
        const voltaje = (corriente*resistencia)
    return voltaje
    }
    
}