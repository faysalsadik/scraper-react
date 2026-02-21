const fs = require('fs');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generator = require('@babel/generator').default;
const t = require('@babel/types');

function restoreCode(filePath) {
    if (!fs.existsSync(filePath)) return;
    let code = fs.readFileSync(filePath, 'utf8');

    code = code.replace(/import\s+\{.*\}\s+from\s+["']\.\/common\.js["'];\n?/, "import React from 'react';\nimport ReactDOM from 'react-dom/client';\n");

    const ast = parser.parse(code, {
        sourceType: 'module',
        plugins: ['jsx']
    });

    traverse(ast, {
        CallExpression(path) {
            const { callee, arguments: args } = path.node;
            if (
                t.isMemberExpression(callee) &&
                t.isIdentifier(callee.object, { name: 'jsxRuntime' }) &&
                (t.isIdentifier(callee.property, { name: 'jsx' }) || t.isIdentifier(callee.property, { name: 'jsxs' }))
            ) {
                const element = args[0];
                const propsObj = args[1];

                let tagName = '';
                let isComponent = false;
                let isFragment = false;

                if (t.isStringLiteral(element)) {
                    tagName = element.value;
                } else if (t.isIdentifier(element)) {
                    tagName = element.name;
                    isComponent = true;
                } else if (t.isMemberExpression(element) && t.isIdentifier(element.object, { name: 'jsxRuntime' }) && t.isIdentifier(element.property, { name: 'Fragment' })) {
                    isFragment = true;
                }

                const attributes = [];
                let children = [];

                if (t.isObjectExpression(propsObj)) {
                    for (const prop of propsObj.properties) {
                        if (t.isObjectProperty(prop)) {
                            let key = '';
                            if (t.isIdentifier(prop.key)) key = prop.key.name;
                            if (t.isStringLiteral(prop.key)) key = prop.key.value;

                            if (key === 'children') {
                                if (t.isArrayExpression(prop.value)) {
                                    children = prop.value.elements;
                                } else {
                                    children = [prop.value];
                                }
                            } else if (key !== '') {
                                let attrValue;
                                if (t.isStringLiteral(prop.value)) {
                                    attrValue = prop.value;
                                } else {
                                    attrValue = t.jsxExpressionContainer(prop.value);
                                }
                                attributes.push(t.jsxAttribute(t.jsxIdentifier(key), attrValue));
                            }
                        }
                    }
                }

                const processChildren = (childrenArray) => {
                    return childrenArray.filter(c => c !== null).map(c => {
                        if (t.isStringLiteral(c)) return t.jsxText(c.value);
                        if (t.isJSXElement(c) || t.isJSXFragment(c)) return c;
                        return t.jsxExpressionContainer(c);
                    });
                };

                const jsxChildren = processChildren(children);

                let openingElement, closingElement;

                if (isFragment) {
                    openingElement = t.jsxOpeningFragment();
                    closingElement = t.jsxClosingFragment();
                    path.replaceWith(t.jsxFragment(openingElement, closingElement, jsxChildren));
                } else {
                    const jsxIdentifier = t.jsxIdentifier(tagName);
                    const isSelfClosing = jsxChildren.length === 0;

                    openingElement = t.jsxOpeningElement(jsxIdentifier, attributes, isSelfClosing);
                    closingElement = isSelfClosing ? null : t.jsxClosingElement(jsxIdentifier);
                    path.replaceWith(t.jsxElement(openingElement, closingElement, jsxChildren, isSelfClosing));
                }
            }
        }
    });

    const output = generator(ast, { retainLines: false, jsescOption: { minimal: true } }, code).code;
    fs.writeFileSync(filePath, output);
    console.log(`Transformed JSX for ${filePath}`);
}

['./assets/sidepanel.js', './assets/popup.js'].forEach(restoreCode);
