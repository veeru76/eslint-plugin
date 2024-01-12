'use strict';

module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "when even Promise.all is used, await should be added to it.",
    },
    fixable: "code", 
  },
  create: context => {
    return {
      CallExpression(node) { 
        const checkPromise =
          node.callee.type === "MemberExpression" &&
          node.callee.object.type === "Identifier" &&
          node.callee.object.name === "Promise" &&
          node.callee.property.type === "Identifier" &&
          node.callee.property.name === "all";

        if (checkPromise) {
          context.report({
            node,
            message: "Add 'await' before Promise.all()",
            fix: function (fixer) {
              return fixer.insertTextBefore(node, "await ");
            },
          });
        }
      },
    };
  },
};
