module.exports = {
    // By convention, Webpack will look for "src/index.js" as your entrypoint, you can change that with:
    // entry: "src/myLibrary.js"
    mode: "development", // or "production", or process.env.NODE_ENV === "production" ? "production" : "development"
    output: {
        // "commonjs2" will allow consumers to use NodeJS or Webpack/Gulp/etc.
        // If you want to allow consumers to call it via a global variable or similar
        // you can use "umd" instead
        libraryTarget: "commonjs2"
        // By convention, Webpack will output the library to "dist/main.js", you can change that with:
        // path: path.resolve(__dirname, "dist/myLibrary.js");
        // (Don't forget to put const path = require("path"); at the top of the file :))
    }
};