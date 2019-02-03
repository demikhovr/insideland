module.exports = {
	"extends": "airbnb",
  "rules": {
    "no-underscore-dangle": "off",
    "react/prefer-stateless-function": "off",
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
  },
	"globals": {
	  "window": "off",
		"document": "off",
		"location": "off"
	}
};