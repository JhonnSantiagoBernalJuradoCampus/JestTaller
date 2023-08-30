import { nota } from "../../../version/v1/notas";

describe("El promedio debe devolver Estudie o Becado", ()=>{
    test("La funcion nota debe devolver 'Estudie' si la nota es meno o igual a 3.9", ()=>{
        const app = nota(4,1,2);
        expect(app).toBe("Estudie");
    });
    test("La funcion nota debe devolver 'Estudie' si la nota es meno o igual a 3.9", ()=>{
        const app = nota(4,5,3);
        expect(app).toBe("becado");
    });
});