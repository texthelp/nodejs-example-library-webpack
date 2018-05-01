// We can put all of our 
const sayHello = () => {
    console.log("Hello!");
};

const sayGoodbye = () => {
    console.log("Bye!");
};

// Standard CommonJS syntax (works out-of-the-box with Webpack):
module.exports = { sayHello, sayGoodbye };

// ES6 synax (need to be using BabelJS for this to work)
// export { sayHello, sayGoodbye };