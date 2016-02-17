'use strict';

/**
 * Codec for code generated by the Bower plugin.
 * @type {{name:string, decode:function, abstract:boolean}}
 */
module.exports = {
  name    : 'bower-component',
  decode  : decode,
  abstract: true
};

/**
 * Validate the given uri (abstract).
 * @this {{options: object}} A loader or compilation
 * @param {string} uri A source uri to decode
 * @returns {boolean|string} False where unmatched else True
 */
function decode(uri) {
  return /^([\w-]+)\s+\(bower component\)$/.test(uri);
}