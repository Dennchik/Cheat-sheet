//* Deleting a directory - Public
const clear = () => {
	return $.del('./public');
};
module.exports = clear;