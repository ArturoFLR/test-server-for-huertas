const users = require("../data/users");
const genUserToken = require("./genUserToken");
const generateId = require("./generateId");

async function registerUser (userData) {
	const isEmailDuplicate = checkDuplicateEmail(userData.userEmail);

	if (!isEmailDuplicate) {
		const id = generateId();
		const street= userData.userAddressStreet;
		const city= userData.userAddressCity;
		const country= userData.userAddressCountry;
		const address = `${street}, ${city}, ${country} `;
	
		const newUser = {
			id,
			name: userData.userName,
			lastName: userData.userLastName,
			email: userData.userEmail,        
			address,
			password: userData.userPassword,
			userType: "user"
		};
	
		const newUserToken = await genUserToken(userData.userPassword);
	
		users.push(newUser);

		return newUserToken;
	} else {
		throw new Error("The email already exists!");
	}
}

function checkDuplicateEmail (email) {
	let isDuplicate = false;
	
	users.map( (element) => {
		console.log(element.email);
		console.log(email);
		if (element.email === email) {
			isDuplicate = true;
		}
	});
	console.log(isDuplicate);
	return isDuplicate;
}


module.exports = registerUser;