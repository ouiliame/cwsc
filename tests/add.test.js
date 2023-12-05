"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const codegen_1 = require("../src/codegen");
describe('add', () => {
    it('should add two numbers', () => {
        expect((0, codegen_1.add)(1, 2)).toBe(3);
    });
});
