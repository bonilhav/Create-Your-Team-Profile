const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    it('should set the username for GitHub', () => {
        const testValue = "Sample username";
        const e = new Engineer("Vern", 123, "example@example.com", testValue);
        expect(e.github).toBe(testValue);
    });
    
    it('should return Engineer for getRole()', () => {
        const testValue = "Engineer";
        const e = new Engineer("Vern", 123, "example@example.com", testValue);
        expect(e.getRole()).toBe(testValue);
    });

    it('should get GitHub username through getGithub()', () => {
        const testValue = "Sample username";
    const e = new Engineer("Vern", 123, "example@example.com", testValue);
    expect(e.getGithub()).toBe(testValue);
    })
})