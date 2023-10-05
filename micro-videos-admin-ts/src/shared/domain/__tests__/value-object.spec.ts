import { ValueObject } from "../value-object";

class StringValueObject extends ValueObject {
    constructor(readonly value: string) {
        super();
    }
}
class ComplexValueObject extends ValueObject{
    constructor(readonly prop1:string, readonly prop2:number) {
        super();
    }
}

describe("Value Object Unit Tests", () => {
    it("should be equals", () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new StringValueObject('test');
        expect(vo1.equals(vo2)).toBe(true);
        expect(vo1.equals(null as any)).toBe(false);
        expect(vo2.equals(null as any)).toBe(false);

        const cvo1 = new ComplexValueObject('test',1);
        const cvo2 = new ComplexValueObject('test',1);
        expect(cvo1.equals(cvo2)).toBe(true);
        expect(cvo1.equals(null as any)).toBe(false);
        expect(cvo2.equals(null as any)).toBe(false);
    })
    it("should be not equals", () => {
        const vo1 = new StringValueObject('test');
        const vo2 = new StringValueObject('test2');
        expect(vo1.equals(vo2)).toBe(false);

        const cvo1 = new ComplexValueObject('test',1);
        const cvo2 = new ComplexValueObject('test2',2);
        expect(cvo1.equals(cvo2)).toBe(false);
    })

})