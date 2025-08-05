// import { sayHello } from "./lib/hello";

// det här är legacy och vi bör använda import /export med type:module
const sayHello = require("./lib/hello").sayHello;

// comand line interface (cli)
// tar agrument nr två när vi skriver node server "å det här"
const name = process.argv[2];

sayHello(name);
