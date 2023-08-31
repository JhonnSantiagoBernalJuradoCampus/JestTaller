import { voltaje } from "../../../version/v1/voltaje";

describe("Determinar el voltaje a partir de la resistencia y la intensidad", ()=>{
    test("El tes debe devolver un string", ()=>{
        const app = voltaje(112,4);
        expect(typeof app).toBe("number")
    });
    test("El test debe devolver el Voltaje", ()=>{
        
    })
})