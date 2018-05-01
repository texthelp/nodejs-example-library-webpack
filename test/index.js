// When your library is published, you'd require it like this:
// const MyLibrary = require("node-basic-library-webpack");
// Where "node-basic-library-webpack" is the "name" property from package.json
// But for demo purposes, we'll require the file...
const MyLibrary = require("../dist/main");

MyLibrary.sayHello();

setTimeout(() => {
    MyLibrary.sayGoodbye();
}, 2000);