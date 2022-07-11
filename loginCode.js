//the function for inputing the login information
function checkCreds(){
    console.log("checkCreds() started");
    var firstName;
    var lastName;
    var badgeNumb;
    var fullName;
    var fullNameLength;
//the three variables created for the inputs
    firstName = document.getElementById("fName").value;
    console.log("The first name is:" + firstName);

    lastName = document.getElementById("lName").value;
    console.log("The last name is:" + lastName);

    badgeNumb = document.getElementById("badgeID").value;
    console.log("The badge number is:" + badgeNumb);

    fullName = firstName + " " + lastName;
    console.log("The users full name is:" + fullName);

    fullNameLength = fullName.length;
    console.log("The users full name length is:" + fullNameLength);
//all the above are the displays for when someone enters information into the right boxes
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid name, please try again."
    } else if(badgeNumb > 999 || badgeNumb< 1){
        document.getElementById("loginStatus").innerHTML = "Invalid badge number, please try again."
    } else {
        location.replace("./UATspace.html");
        //if credentials are correct, this takes the user to the main uat space page
    }
    //if else statements determining the parameters of the information given and validating the name and badge number
}