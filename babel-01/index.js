const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const generate = require("@babel/generator").default;

console.log();

const sourceCode = `console.log(1);`;

const ast = parser.parse(sourceCode, {
  sourceType: "unambiguous", // 需要指定代码是不是包含 import、export 等 , 设置为 unambiguous，让它根据内容是否包含 import、export 来自动设置 moduleType
});

traverse(ast, {
  CallExpression(path, state) {},
});

const a = generate(ast);
const { code, map } = a;
console.log(a, "---");
