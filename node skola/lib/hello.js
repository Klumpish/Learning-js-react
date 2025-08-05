function sayHello(name = "world") {
	console.log(`Hello, ${name}`);
}

// es module export
// export { sayHello };

module.exports = {
	sayHello,
};
