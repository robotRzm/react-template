module.exports = {
    "settings": {
        "react": {
            "version": "999.999.999"
        }
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "plugin:react/recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "babel-eslint"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "no-unused-vars": "error"
    }
};
