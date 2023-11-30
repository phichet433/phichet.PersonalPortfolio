function send(){
    let fullname = document.forms["contactUs"]["fullName"].value;
    let email = document.forms["contactUs"]["email"].value;
    let message = document.forms["contactUs"]["message"].value;
    
    if (fullname === "")
    {
        alert("Full Name must be filled out");
        document.forms["contactUs"]["fullname"].select();
        document.forms["contactUs"]["fullname"].focus();
        return false;
    }

    if (email === "")
    {
        alert("Email must be filled out");
        document.forms["contactUs"]["email"].select();
        document.forms["contactUs"]["email"].focus();
        return false;
    }
    
    if (message === "")
    {
        alert("Message must be filled out");
        document.forms["contactUs"]["message"].select();
        document.forms["contactUs"]["message"].focus();
        return false;
    }
}