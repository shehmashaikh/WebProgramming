var fname = false;
var lname = false;
var email = false;
var phoneDay = false;
var phoneEvening = false;
var mailAddress = false;
var mailCity = false;
var prov = false;
var postalCode = false;
var w1 = false;
var w2 = false;
var w3 = false;
var w = false;
var shipingType = false;

function error1(elementID, popUpText) {
	"use strict";
	document.getElementById(elementID).style.borderColor = "red";
	document.getElementById("errDiv1").innerHTML += "<br>Pelease Enter " + popUpText;
}

function error2(popUpText) {
	"use strict";
	document.getElementById("errDiv1").innerHTML += "<br>" + popUpText;
}

function resetForm(elementID) {
	"use strict";
	document.getElementById(elementID).style.borderColor = "white";
}

function validateFN() {
	if (document.getElementById("firstName").value === null || document.getElementById("firstName").value === "") {
		error1("firstName", "FirstName");
		fname = false;
	} else {
		resetForm("firstName");
		fname = true;
	}
}

function validateLN() {
	if (document.getElementById("lastName").value === null || document.getElementById("lastName").value === "") {
		error1("lastName", "Last Name");
		lname = false;
	} else {
		resetForm("lastName");
		lname = true;
	}
}

function validationEmail() {
	if (document.getElementById("email").value === null || document.getElementById("email").value === "") {
		error1("email", "E-mail");
		email = false;
	} else {
		resetForm("email");
		email = true;
	}
}

function validatePD() {
	if (document.getElementById("phoneDay").value === null || document.getElementById("phoneDay").value === "") {
		error1("phoneDay", "Phone(Day) Number");
		phoneDay = false;
	} else {
		resetForm("phoneDay");
		phoneDay = true;
	}
}

function validatePE() {
	if (document.getElementById("phoneEvening").value === null || document.getElementById("phoneEvening").value === "") {
		error1("phoneEvening", "Phone(Evening) Number");
		phoneEvening = false;
	} else {
		resetForm("phoneEvening");
		phoneEvening = true;
	}
}

function validateMA() {
	if (document.getElementById("mailAddress").value === null || document.getElementById("mailAddress").value === "") {
		error1("mailAddress", "Mail Address");
		mailAddress = false;
	} else {
		resetForm("mailAddress");
		mailAddress = true;
	}
}

function validateMC() {
	if (document.getElementById("mailCity").value === null || document.getElementById("mailCity").value === "") {
		error1("mailCity", "Mail City");
		mailCity = false;
	} else {
		resetForm("mailCity");
		mailCity = true;
	}
}

function validateProvince() {
	if (document.getElementById("province").value === null || document.getElementById("province").value === "wrong") {
		"use strict";
		document.getElementById("province").style.borderColor = "red";
		document.getElementById("errDiv1").innerHTML += "<br>Pelease Select a province";
		prov = false;
	} else {
		"use strict";
		document.getElementById("province").style.borderColor = "white";
		prov = true;
	}
}


function validatePC() {
	if (document.getElementById("postalCode").value === null || document.getElementById("postalCode").value === "") {
		error1("postalCode", "Six Digit Postal Code");
		postalCode = false;
	} else if (isNaN(document.getElementById("postalCode").value) === true) {
		error1("postalCode", "a Six Digit Numeric value in Postal Code");
		postalCode = false;
	} else if (document.getElementById("postalCode").value.length != 6) {
		error1("postalCode", "Six Digit Postal Code");
		postalCode = false;
	} else {
		console.log("true");
		resetForm("postalCode");
		postalCode = true;
	}
}

function validateW1() {
	if (document.getElementById("widget1qty").value < 0) {
		error1("widget1qty", "Quantity of Widget #1 must be positive");
		w1 = false;
	} else {
		w1 = true;
	}
}

function validateW2() {
	if (document.getElementById("widget2qty").value < 0) {
		error1("widget2qty", "Quantity of Widget #2 must be positive");
		w2 = false;
	} else {
		w2 = true;
	}
}

function validateW3() {
	if (document.getElementById("widget3qty").value < 0) {
		error1("widget3qty", "Quantity of Widget #3 must be positive");
		w3 = false;
	} else {
		w3 = true;
	}
}

function validateW() {
	if ((document.getElementById("widget1qty").value + document.getElementById("widget2qty").value + document.getElementById("widget3qty").value) < 1) {
		error2("You must order atleast 1 product");
		w = false;
	} else {
		w = true;
	}
}

function validateST() {
	if (document.getElementById("shipTypeStandard").checked === true) {
		shipingType = true;
	} else if (document.getElementById("shipTypeExpress").checked === true) {
		shipingType = true;
	} else if (document.getElementById("shipTypeOvernight").checked === true) {
		shipingType = true;
	} else {
		error2("Please select a Shiping type");

		shipingType = false;
	}
}

function calculations() {
	var totalW1 = (document.getElementById("widget1qty").value * 7),
		totalW2 = (document.getElementById("widget2qty").value * 12.50),
		totalW3 = (document.getElementById("widget3qty").value * 18.75),
		totalshipping = 0,
		total = 0;
	if (document.getElementById("shipTypeStandard").checked === true) {
		totalshipping = 2.50;
	} else if (document.getElementById("shipTypeExpress").checked === true) {
		totalshipping = 8.50;
	} else if (document.getElementById("shipTypeOvernight").checked === true) {
		totalshipping = 12.50;
	}
	total = totalW1 + totalW2 + totalW3 + totalshipping;
	alert("Total cost of your order:	" + total);
}

function validate() {
	"use strict";
	document.getElementById("errDiv1").innerHTML = " ";
	validateFN();
	validateLN();
	validationEmail();
	validatePD();
	validatePE();
	validateMA();
	validateMC();
	validateProvince();
	validatePC();
	validateW1();
	validateW2();
	validateW3();
	validateW();
	validateST();
	if ((fname === true && lname === true && email === true && phoneDay === true && phoneEvening === true && mailAddress === true && mailCity === true && prov === true && postalCode === true && w1 === true && w2 === true && w3 === true && w === true && shipingType === true)) {
		calculations();
		return true;
	}
	return false;
}