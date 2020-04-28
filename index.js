const visit = require("unist-util-visit");
const toString = require("mdast-util-to-string");

const phoneRegex = /\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*/gi;
const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi;

module.exports = ({ markdownAST }, pluginOptions) => {
  visit(markdownAST, "link", node => {
    const text = toString(node);
    const phoneRegexp = pluginOptions.phoneNumberRegexp ? pluginOptions.phoneNumberRegexp : phoneRegex;
    const emailRegexp = pluginOptions.emailIdRegexp ? pluginOptions.emailIdRegexp : emailRegex;
    const noTransformFlag = pluginOptions.noTransformFlag ? pluginOptions.noTransformFlag : 'noTransform:';

    if(text.includes(noTransformFlag)) {
      node.children[0].value = text.replace(/noTransform:/, '');
    }
    else {
      node.url = node.url.replace(phoneRegexp, `tel:${node.url}`);
      node.url = node.url.replace(emailRegexp, `mailto:${node.url}`);
    }
  })

  return markdownAST
}