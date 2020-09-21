module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es2021": true, 
    "node": true,
    "jest": true
  },
  "globals": {
    "browser": true,
    "$": true,
    "$$": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {"ecmaVersion": 12},
  "rules": {
    "key-spacing": ["error", { "afterColon": true }],
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "jsx-quotes": ["warn", "prefer-double"],
    "semi": ["error", "always"],
    "no-console": "off",
    "no-await-in-loop": "off",
    "space-before-function-paren": ["error", {
      "anonymous": "always",
      "named": "never",
      "asyncArrow": "always"
    }],
    "curly": ["error", "all"],
    "object-curly-newline": ["error", {"multiline": true, "minProperties": 4}]
  }
};
