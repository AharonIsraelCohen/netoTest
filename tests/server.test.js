
const serverSeconds = require('../vars.js');

test ('Juest a test', () => {
	const value = serverSeconds.seconds;
	expect(value).toBe(60);

});
