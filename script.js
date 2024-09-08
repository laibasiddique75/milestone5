// listing element
var _a;
(_a = document.getElementById("resume-form")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a;
    event.preventDefault();
    var profilePicture = document.getElementById("profile-picture");
    // type assertion 
    var nameElement = document.getElementById("name");
    var emailElement = document.getElementById("email");
    var phoneElement = document.getElementById("phone");
    var educationElement = document.getElementById("education");
    var experienceElement = document.getElementById("experience");
    var skillsElement = document.getElementById("skills");
    var usernameElement = document.getElementById("user-name");
    if (profilePicture && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement && usernameElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        // picture elements
        var profilePictureFile = (_a = profilePicture.files) === null || _a === void 0 ? void 0 : _a[0];
        var profilePictureUrl = profilePictureFile ? URL.createObjectURL(profilePictureFile) : "";
        var username = usernameElement.value;
        var uniquePath = "resumes/".concat(username.replace(/\ s+/g, "_"), "_cv.html");
        // create resume output
        var resumeOutput = "<h2>Resume</h2>\n\n    ".concat(profilePictureUrl ? "<img src = \"".concat(profilePictureUrl, "\" alt =\"ProfilePicture\" class = \"profilePicture\">") : '', "\n    <p><strong>Name:</strong> ").concat(name_1, " </p>\n    <p><strong>Email:</strong> ").concat(email, " </p>\n    <p><strong>Phone:</strong> ").concat(phone, " </p>\n    \n    <h3>Education</h3>\n    <p>").concat(education, "</p> \n    \n    <h3>Experience</h3>\n    <p> ").concat(experience, " </p>\n    \n    <h3>Skills</h3>\n    <p> ").concat(skills, " </p>\n    \n    \n    ");
        var downloadLink = document.createElement("a");
        downloadLink.href = "data:text/html;charset = utf-8," + encodeURIComponent(resumeOutput);
        downloadLink.download = uniquePath;
        downloadLink.textContent = "Download Your 2024 Resume";
        // display resume output
        var resumeOutputElement = document.getElementById("resume-output");
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            resumeOutputElement.appendChild(downloadLink);
        }
        else {
            console.error("The resume output elements are missing");
        }
    }
    else {
        console.error("One or more output elements are missing");
    }
});
