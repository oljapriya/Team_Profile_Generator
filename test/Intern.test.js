const Intern = require("../lib/Intern")

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern ("Foo", "test@test.com", testValue);
  expect (e.school).toBe(testValue);
});

test("getRole() should return \"intern\"", () => {
  const testValue = "Intern";
  const e = new Intern ("Foo", "test@test.com", testValue);
  expect (e.school).toBe(testValue);
});

test("Can set school via constructor", () => {
  const testValue = "UCLA";
  const e = new Intern ("Foo", "test@test.com", testValue);
  expect (e.school).toBe(testValue);
});

