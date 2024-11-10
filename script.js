// listing element
var _a;
// document.getElementById("resume-form")?.addEventListener("submit",function(event) {
//     event.preventDefault();
//     const profilePicture = document.getElementById("profile-picture") as HTMLInputElement;
//     // type assertion 
//     const nameElement =document.getElementById("name") as HTMLInputElement;
//     const emailElement =document.getElementById("email") as HTMLInputElement;
//     const phoneElement =document.getElementById("phone") as HTMLInputElement;
//     const educationElement =document.getElementById("education") as HTMLInputElement;
//     const experienceElement =document.getElementById("experience") as HTMLInputElement;
//     const skillsElement =document.getElementById("skills") as HTMLInputElement;
//     const usernameElement = document.getElementById("user-name") as HTMLInputElement;
//     if(profilePicture && nameElement && emailElement && phoneElement && educationElement && experienceElement && skillsElement &&  usernameElement){
//         const name = nameElement.value ;
//         const email = emailElement.value ;
//         const phone = phoneElement.value ;
//         const education = educationElement.value ;
//         const experience = experienceElement.value ;
//         const skills = skillsElement.value ;
//         // picture elements
//         const profilePictureFile = profilePicture.files?.[0];
//         const profilePictureUrl = profilePictureFile?URL.createObjectURL(profilePictureFile) : "";
//         const username = usernameElement.value;
//         const uniquePath =`resumes/${username.replace(/\ s+/g, "_")}_cv.html`
//     // create resume output
//     const resumeOutput = `<h2>Resume</h2>
//     ${profilePictureUrl ?`<img src = "${profilePictureUrl}" alt ="ProfilePicture" class = "profilePicture">`:''}
//     <p><strong>Name:</strong> ${name} </p>
//     <p><strong>Email:</strong> ${email} </p>
//     <p><strong>Phone:</strong> ${phone} </p>
//     <h3>Education</h3>
//     <p>${education}</p> 
//     <h3>Experience</h3>
//     <p> ${experience} </p>
//     <h3>Skills</h3>
//     <p> ${skills} </p>
//     `;
//     const downloadLink = document.createElement("a")
// downloadLink.href = "data:text/html;charset = utf-8," +encodeURIComponent(resumeOutput)
// downloadLink.download = uniquePath;
// downloadLink.textContent = "Download Your 2024 Resume";
//     // display resume output
//     const resumeOutputElement = document.getElementById("resume-output")
//     if(resumeOutputElement){
//     resumeOutputElement.innerHTML = resumeOutput
//     resumeOutputElement.appendChild(downloadLink)
//     }else{
//         console.error("The resume output elements are missing");
//     }
//      } else{
//         console.error("One or more output elements are missing")
//     }
//     }
//     );
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
