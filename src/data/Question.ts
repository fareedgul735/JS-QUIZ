import type { QuestionType } from "../types/type.ts";


export const questions: QuestionType[] = [
    {
        question: "Which keyword is used to declare a constant variable in JavaScript?",
        options: ["let", "const", "var", "define"],
        correctAnswer: "const"
    },
    {
        question: "Which method is used to convert JSON to a JavaScript object?",
        options: ["JSON.parse()", "JSON.stringify()", "parse.JSON()", "toObject()"],
        correctAnswer: "JSON.parse()"
    },
    {
        question: "Which symbol is used for arrow functions in ES6?",
        options: ["=>", "->", "::", "==>"],
        correctAnswer: "=>"
    },
    {
        question: "What is the default value of `this` in arrow functions?",
        options: ["Global object", "undefined", "Lexical context", "null"],
        correctAnswer: "Lexical context"
    },
    {
        question: "Which method is used to add an element at the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: "push()"
    },
    {
        question: "Which ES6 feature allows unpacking values from arrays or objects?",
        options: ["Destructuring", "Rest parameters", "Spread", "Binding"],
        correctAnswer: "Destructuring"
    },
    {
        question: "Which loop is used to iterate over object properties?",
        options: ["forEach", "for", "for...of", "for...in"],
        correctAnswer: "for...in"
    },
    {
        question: "What does the `typeof` operator return for null?",
        options: ["'object'", "'null'", "'undefined'", "'boolean'"],
        correctAnswer: "'object'"
    },
    {
        question: "How do you declare a class in ES6?",
        options: ["function class()", "class MyClass {}", "def class MyClass", "create class MyClass"],
        correctAnswer: "class MyClass {}"
    },
    {
        question: "Which feature allows combining arrays or objects?",
        options: ["Spread operator", "Rest operator", "Arrow function", "Bind"],
        correctAnswer: "Spread operator"
    },
    {
        question: "How do you write a comment in JavaScript?",
        options: ["// comment", "<!-- comment -->", "# comment", "`comment`"],
        correctAnswer: "// comment"
    },
    {
        question: "What is the output of `typeof NaN`?",
        options: ["number", "NaN", "undefined", "object"],
        correctAnswer: "number"
    },
    {
        question: "Which of these is a falsy value?",
        options: ["0", "true", "[]", "1"],
        correctAnswer: "0"
    },
    {
        question: "How do you create a Promise?",
        options: ["new Promise()", "Promise()", "create Promise", "promise()"],
        correctAnswer: "new Promise()"
    },
    {
        question: "What is the scope of a variable declared with `let`?",
        options: ["Function", "Global", "Block", "Module"],
        correctAnswer: "Block"
    },
    {
        question: "Which operator is used to assign default values in destructuring?",
        options: ["=", ":", "||", "??"],
        correctAnswer: "="
    },
    {
        question: "Which string method is used to check for a substring?",
        options: ["includes()", "match()", "find()", "contains()"],
        correctAnswer: "includes()"
    },
    {
        question: "How do you export a function in ES6?",
        options: ["export function myFunc() {}", "module.exports = myFunc", "define(myFunc)", "function export myFunc()"],
        correctAnswer: "export function myFunc() {}"
    },
    {
        question: "Which of these is a valid way to declare an arrow function?",
        options: ["const f = () => {}", "let f() => {}", "=> function f()", "function => f()"],
        correctAnswer: "const f = () => {}"
    },
    {
        question: "Which ES6 feature allows default values in functions?",
        options: ["Default parameters", "Destructuring", "Arrow function", "Rest parameters"],
        correctAnswer: "Default parameters"
    },
    {
        question: "Which method converts an array to string?",
        options: ["join()", "split()", "concat()", "push()"],
        correctAnswer: "join()"
    },
    {
        question: "How do you declare a variable in ES6 that will not change?",
        options: ["const", "let", "var", "static"],
        correctAnswer: "const"
    },
    {
        question: "Which operator is used to find remainder in JavaScript?",
        options: ["%", "/", "//", "**"],
        correctAnswer: "%"
    },
    {
        question: "What will `2 + '2'` output?",
        options: ["22", "4", "NaN", "undefined"],
        correctAnswer: "22"
    },
    {
        question: "What is a template literal?",
        options: ["A string using backticks", "A string with quotes", "A number format", "An object property"],
        correctAnswer: "A string using backticks"
    }

]