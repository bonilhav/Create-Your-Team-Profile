const Employee = require('../lib/Employee');

describe("Employee", () => {
    it("Can instantiate Employee instance", () => {
        const e = new Employee();
        expect(typeof(e)).toBe("object");
    });

    describe("getName", () => {
        it("Can get name through getName()", () => {
            const testValue = "Bala";
            const e = new Employee(testValue);
            expect(e.getName()).toBe(testValue);
        });
    });
        
    describe("getId", () => {
        it("Can get id through getId()", () => {
            const testValue = 123;
            const e = new Employee("Bala", testValue);
            expect(e.getId()).toBe(testValue);
        });
    });
        
    describe("getEmail", () => {
        it("Can get email through getEmail()", () => {
            const testValue = "example@example.com";
            const e = new Employee("Bala", 1, testValue);
            expect(e.getEmail()).toBe(testValue);
        });
    });
        
    describe("getRole", () => {
        it("getRole() should return Employee", () => {
            const testValue = "Employee";
            const e = new Employee("Bala", 1, "example@example.com");
            expect(e.getRole()).toBe(testValue);
        });
    });
    
});