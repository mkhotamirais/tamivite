document.getElementById("button-addon2").addEventListener("click", () => {
  mainSearch();
});

document
  .querySelector(".s-input")
  .addEventListener("keyup", (e) => e.key == "Enter" && mainSearch());

function mainSearch() {
  let key = document.querySelector(".s-input").value;
  document.getElementById("hasil").innerHTML = "";
  document.querySelector(".s-input").value = "";
  fetch(`http://omdbapi.com/?apikey=99773434&s=${key}`)
    .then((res) => res.json())
    .then((res) => {
      res.Search.map((item) => {
        document.getElementById("hasil").innerHTML += `
        <div class="col-md-4">
          <div class="card" style="width: 18rem;">
            <img src="${item.Poster}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.Title}</h5>
              <p class="card-text">${item.Year}</p>
              <button type="button" class="btn-detail btn btn-primary" data-imdbid="${item.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
            </div>
          </div>
        </div>
        `;
      });
      const detail = document.querySelectorAll(".btn-detail");
      detail.forEach((dt) => {
        dt.addEventListener("click", function () {
          fetch(`http://omdbapi.com/?apikey=99773434&i=${this.dataset.imdbid}`)
            .then((res) => res.json())
            .then((res) => {
              document.querySelector(".modal-body").innerHTML += `
                <div class="row">
                  <div class="col-md-6">
                      <img src="${res.Poster}" class="card-img-top" alt="..." />
                  </div>
                  <div class="col-md-6">
                      <ul class="list-group">
                          <div class="list-group-item">${res.Title}</div>
                      </ul>
                  </div>
                </div>`;
              console.log(res);
            });
        });
      });
    });
}
