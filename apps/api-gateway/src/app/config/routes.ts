// TODO: Get Routes from Database like Redis
export default [
  {
    "path"   : [ "/api/todos/**", ],
    "target" : "http://localhost:3001",
    "logLevel" : "debug",
    "pathRewrite": {'^/todos/' : '/api/'},
    "headers": {
      "X-Test": "Added Header"
    }
  },
  { 
    "path"     : ["/json-pl/**"],
    "target"   : "https://jsonplaceholder.typicode.com",
    "pathRewrite": {'^/json-pl/' : '/'},
    "logLevel" : "error"
  } 
];
