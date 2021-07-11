const Manager = require('../lib/Manager');

describe('Manager', () => {
    it('should set the office number', () => {
        const testValue = 303564;
        const e = new Manager ("Vern", 123, "example@example.com", testValue);
        expect(e.officeNumber).toBe(testValue);
    });
    
    it('should return Manager for getRole()', () => {
        const testValue = "Manager";
        const e = new Manager ("Vern", 123, "example@example.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });

    it('should get OfficeNumber through getOfficeNumber()', () => {
        const testValue = 303564;
    const e = new Manager ("Vern", 123, "example@example.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
    })
})