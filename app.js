const github = new Github();
const ui = new UI();
const searchUser = document.getElementById("searchUser");
searchUser.addEventListener("keyup", (e) => {
  const userText = e.target.value;
  if (userText !== "") {
    ui.showSpinner();
    github.getUser(userText).then((data) => {
      if (data.profile.message === "Not Found") {
        ui.showAlert(data.profile.message, "alert alert-danger");
      } else {
        ui.showProfile(data.profile);
        ui.showRepos(data.repos);
      }
    });
  }
});
