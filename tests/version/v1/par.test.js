import { par } from "../../../version/v1/par"

describe("La funcion debe devolver si es par o impar y si es mayor a 10", ()=>{
    test("La función debe devolver par mayor que 10", ()=>{
        const app = par(800);
        expect(app).toBe("par mayor que 10");
    });
    test("la funcion debe devolver par menor que 10", ()=>{
        const app = par(2);
        expect(app).toBe("par menor que 10");
    });
    test("la funcion debe devolver impar mayor que 10", ()=>{
        const app = par(31);
        expect(app).toBe("impar mayor que 10");
    });
    test("la funcion debe devolver impar menor que 10", ()=>{
        const app = par(9);
        expect(app).toBe("impar menor que 10");
    });
})