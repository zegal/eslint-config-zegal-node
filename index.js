module.exports = {
  "extends": ["eslint:recommended"],
  "rules": {
    "brace-style": "error",
    "comma-spacing": [
      "error",
      {
        "before": false,
        "after": true
      }
    ],
    "curly": "error",
    "eol-last": ["error", "always"],
    "eqeqeq": ["error", "always"],
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1
      }
		],
    "key-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "newline-before-return": "error",
    "no-await-in-loop": "error",
    "no-console": [
			"error",
      {
				"allow": ["warn", "error"]
      }
		],
		'no-duplicate-imports': [
			'error'
		],
    "no-multi-spaces": "error",
    "no-return-await": "error",
    "no-unused-vars": [
			"error",
      {
				"argsIgnorePattern": "next"
      }
    ],
		"no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "padding-line-between-statements": [
      "error",
      {
        "blankLine": "always",
        "prev": ["const", "let", "var"],
        "next": "*"
      },
      {
        "blankLine": "any",
        "prev": ["const", "let", "var"],
        "next": ["const", "let", "var"]
      }
    ],
    "prefer-const": [
      "error",
      {
        "destructuring": "any",
        "ignoreReadBeforeAssign": false
      }
    ],
    "quotes": [
      "error",
      "single",
      {
        "allowTemplateLiterals": true,
        "avoidEscape": true
      }
    ],
    "require-await": "error",
    "semi": ["error", "always"],
    "space-before-blocks": "error",
    "spaced-comment": ["error", "always"],
    "space-infix-ops": "error"
  }
}
