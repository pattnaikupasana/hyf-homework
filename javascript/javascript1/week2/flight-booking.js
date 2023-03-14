//Flight booking fullname function
function getFullname()
{
    let firstname = document.getElementById("fname").value;
    let surname = document.getElementById("lname").value;
    let useFormalName = document.getElementById("formalName").value;
    let fullname = firstname + " " + surname

    if (useFormalName == "male") {
        fullname = "lord" + fullname;
    }
    if (useFormalName == "female")
        fullname = "lady " + fullname;
    document.getElementById("fullName").innerHTML = fullname;
    console.log(fullname)

}
/*fullname1 = getFullname(" Hara ", " Panda ",true)
fullname2 = getFullname(" Ivan ", " Panda ",false)
console.log(fullname1);
console.log(fullname2);*/




