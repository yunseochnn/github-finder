class UI {
  constructor() {
    this.profile = document.getElementById("profile");
    this.calendar = document.getElementById("calendar");
    this.spinner = document.getElementById("spinner");
  }

  showProfile(user) {
    this.hideSpinner();
    this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-3">
                        <img class="img-fluid mb-2" src="${user.avatar_url}">
                        <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View Profile</a>
                    </div>
                    <div class="col-md-9">
                        <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                        <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                        <span class="badge bg-success">Followers: ${user.followers}</span>
                        <span class="badge bg-info">Following: ${user.following}</span>
                        <br><br>
                        <ul class="list-group">
                            <li class="list-group-item">Company: ${user.company}</li>
                            <li class="list-group-item">Website/Blog: ${user.blog}</li>
                            <li class="list-group-item">Location: ${user.location}</li>
                            <li class="list-group-item">Member Since: ${user.created_at}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <h3 class="page-heading mb-3">Latest Repos</h3>
            <div id="repos"></div>`;
    this.showCalendar(user.login);
  }

  showRepos(repos) {
    this.hideSpinner();
    let output = "";
    repos.forEach(function (repo) {
      output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge bg-primary">Stars: ${repo.stargazers_count}</span>
                            <span class="badge bg-secondary">Watchers: ${repo.watchers_count}</span>
                            <span class="badge bg-success">Forks: ${repo.forks_count}</span>
                        </div>
                    </div>
                </div>`;
    });
    document.getElementById("repos").innerHTML = output;
  }
  showCalendar(username) {
    this.calendar.style.display = "block";
    GitHubCalendar(this.calendar, username, { responsive: true });
  }
  showSpinner() {
    this.spinner.classList.remove("d-none");
  }
  hideSpinner() {
    this.spinner.classList.add("d-none");
  }
}
