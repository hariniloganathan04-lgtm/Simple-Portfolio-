// Change profile image when user uploads a new one
document.getElementById("imageUpload").addEventListener("change", function () {
  const file = this.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("profileImage").src = e.target.result;
    };
    reader.readAsDataURL(file);
  }
});

// Save changes (simple example using localStorage)
document.getElementById("saveBtn").addEventListener("click", function () {
  const data = {
    name: document.getElementById("name").innerText,
    about: document.getElementById("about").innerText,
    skills: document.getElementById("skills").innerHTML,
    projects: document.getElementById("projects").innerHTML,
    education: document.getElementById("education").innerHTML,
  };

  localStorage.setItem("portfolioData", JSON.stringify(data));
  alert("Changes saved!");
});

// Load saved data if exists
window.onload = function () {
  const savedData = localStorage.getItem("portfolioData");
  if (savedData) {
    const data = JSON.parse(savedData);
    document.getElementById("name").innerText = data.name;
    document.getElementById("about").innerText = data.about;
    document.getElementById("skills").innerHTML = data.skills;
    document.getElementById("projects").innerHTML = data.projects;
    document.getElementById("education").innerHTML = data.education;
  }
};