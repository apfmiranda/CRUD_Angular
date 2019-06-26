const proxy = [
  {
    "/contacts": {
      "target": "http://localhost:8080",
      "secure": true,
      "pathRewrite": {
      "^/contacts": ""
    },
      "changeOrigin": true
    }
  }
];
module.exports = proxy;
