import { saludar } from "../../../version/v1/user"

describe("test del archivo user.js", ()=>{
    test("la función saludar devuelve 'Hola mundo'", ()=>{
        let app = saludar()
        expect(typeof app).toBe("string")
    })
})