import { InvalidUuidError, Uuid } from "../uuid.vo"
import { validate as uuidValidate, validate } from "uuid";
describe("Uuid unit test", () => {

    const validateSpy = jest.spyOn(Uuid.prototype as any, 'validate');

    it('should throw an error when uuid is valid', () => {
        expect(() => {
            new Uuid('invalid-uuid')
        }).toThrowError(new InvalidUuidError())
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });
    it('should create a valid uuid', () => {
        const uuid = new Uuid();
        expect(uuid.id).toBeDefined();
        expect(uuidValidate(uuid.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });

    it("should accept a valid uuid", () => {
        const uuid = new Uuid("c3e9b0d0-7b6f-4a8e-8e1f-3f9e6a2f7e3c");
        expect(uuid.id).toBe("c3e9b0d0-7b6f-4a8e-8e1f-3f9e6a2f7e3c");
        expect(validateSpy).toHaveBeenCalledTimes(1);
    });
});