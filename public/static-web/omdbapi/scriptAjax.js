document.querySelector("#button-addon2").addEventListener("click", function () {
  hasilPencarian();
});
document.querySelector("input").addEventListener("keyup", function (e) {
  if (e.key == "Enter") hasilPencarian();
});
const hasilPencarian = () => {
  const key = document.querySelector(".s-input").value;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", `http://omdbapi.com/?apikey=99773434&s=${key}`);
  xhr.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let hasil = document.getElementById("hasil");
      let data = JSON.parse(this.responseText);
      if (data.Response == "True") {
        let search = data.Search;
        let kartu = "";
        search.forEach((e, i) => (kartu += card(e)));
        hasil.innerHTML = kartu;
        key.value = "";
      } else {
        hasil.innerHTML = `<div class="alert alert-danger" role="alert">${data.Error}: <span class="text-danger">${key.value}</span></div>`;
      }
    }
  };
  xhr.send();
};
document.addEventListener("click", function (x) {
  if (x.target.classList.contains("btn-detail")) {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `http://omdbapi.com/?apikey=99773434&i=${x.target.dataset.imdbId}`,
      true
    );
    xhr.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        let data = JSON.parse(this.responseText);
        const modalBody = document.querySelector(".modal-body");
        modalBody.innerHTML = detail(data);
      }
    };
    xhr.send();
  }
});
const card = (x) => `<div class="col-md-4">
                        <div class="card my-2" style="width: 18rem;">
                            <img src="${x.Poster}" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${x.Title}</h5>
                                <p class="card-text">${x.Year}</p>
                                <button type="button" class="btn-detail btn btn-primary" data-bs-toggle="modal" data-imdb-id="${x.imdbID}" data-bs-target="#exampleModal">
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>`;
const detail = (x) => `<div class="row">
                    <div class="col-md-6 border">
                        <img src="${x.Poster}" alt="" class="img-fluid mx-auto img-thumbnail">
                    </div>
                    <div class="col-md-6 border">
                        <ul class="list-group">
                            <li class="list-group-item">Judul : ${x.Title}</li>
                        </ul>
                    </div>
                </div>`;
