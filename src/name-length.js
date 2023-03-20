'use strict';

const MAX_LENGTH = 30;

module.exports = {
  meta: {},
  create: context => {
    const maxLength = context.options[0] || MAX_LENGTH;
    return {
      Identifier: node => {
        if (node.name.length > maxLength) {
          context.report({
            node,
            message: `"${node.name}" is too long (max allowed length is ${maxLength})`
          });
        }
      }
    };
  }
};
