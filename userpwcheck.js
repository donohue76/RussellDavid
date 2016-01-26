var userId = prompt("Enter user ID");
var password = prompt("Enter Password");

/*checks id for length and invalid characters*/
function goodId(userId) {return !(userId.includes("#") || userId.includes("!") || userId.includes("$")) && userId.length > 5}

/*checks password for number, special character reqs, length and casing reqs.*/
function goodPassword(password) {return (password.includes("#") || password.includes("!") || password.includes("$")) && !(password.includes("password")) && password.length > 5 && hasNumber(password) && pwCaps(password)};

/* checks to see that userId and password are not the same*/
function matching(userId, password) {return userId != password}

/*Validates userId and password*/
function validCred(userId, password) {return goodId(userId) && goodPassword(password) && matching(userId, password)};

/*Prompts user for validation credentials and alerts user is credentials are invalid*/
function getCreds() {var userId = prompt("Enter user ID"); var password = prompt("Enter Password"); alert("Your creds are valid:" + validCred(userId, password));}

/*Checks for all uppercase, if it is, it returns false*/
function downCase(password) { return password !== password.toUpperCase() };
/*Checks for all lowercase, if it is, it returns false*/
function upCase(password) { return password !== password.toLowerCase() };

/*Checks for at least one number*/
function hasNumber(password) {return password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9")};

function pwCaps(password) {return downCase(password) && upCase(password)};
