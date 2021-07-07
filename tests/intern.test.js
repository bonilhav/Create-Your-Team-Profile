const Intern = require('../lib/Intern');

describe('Intern', () => {
    it('should set the school', () => {
        const testValue = "ABC School";
        const e = new Intern ("Vern", 123, "example@example.com", testValue);
        expect(e.school).totoBe(testValue);
    });
    
    it('should return Intern for getRole()', () => {
        const testValue = "Intern ";
        const e = new Intern ("Vern", 123, "example@example.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });

    it('should get School through getSchool()', () => {
        const testValue = "ABC School";
    const e = new Intern ("Vern", 123, "example@example.com", testValue);
    expect(e.getSchool()).toBe(testValue);
    })
})