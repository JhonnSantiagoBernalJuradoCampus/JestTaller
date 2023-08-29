import { obtener } from "../../../version/v1/factura";

describe("Test del archivo factura.js", ()=>{
    let obj = {
        id: 1,
        nombre: "Santiago"
    };  
    let app = obtener();
    test('la funcion obtener devuelve {id:1, nombre: "Santiago"}', ()=>{
        expect(app).toStrictEqual(obj)
    })
    test('El objeto esperado "Object"',()=>{
        expect(typeof app).toBe("object");
    })
})