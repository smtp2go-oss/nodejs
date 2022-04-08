import SMTP2GO_API from "../lib";
const SMTP2GO_APIInstance = new SMTP2GO_API();

document.querySelector("body").innerHTML = `<h1>Hello World!</h1>`;

console.log("SMTP2GO_APIInstance", SMTP2GO_APIInstance);

SMTP2GO_APIInstance.myMethod(); 