class Github {
  constructor() {
    this.client_id = "Ov23liqhY5GbdDAeyX37";
    this.client_secret = "822413fc31ce2312c802838e4d6d7ab253587fbc";
    //데이터 5개만
    this.repos_count = 5;
    //생성 오름차순
    this.repos_sort = "created: asc";
  }
  async getUser(user) {
    //비동기요청
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const repoResponse = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    return {
      profile,
      repos,
    };
  }
}
