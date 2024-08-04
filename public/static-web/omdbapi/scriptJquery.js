$("#button-addon2").on("click", () => hasilPencarian());
$(".s-input").on("keyup", (x) => x.key == "Enter" && hasilPencarian());
const hasilPencarian = () => {
  $("#hasil").html("");
  $.getJSON(
    `http://omdbapi.com/?apikey=99773434&s=${$("input").val()}`,
    function (r) {
      if (r.Response == "True") {
        $.each(r.Search, function (i, data) {
          $("#hasil").append(card(data));
          $("input").val("").focus();
        });
      } else {
        $("#hasil").append(
          `<div class="alert alert-danger" role="alert">${r.Error}: ${$(
            "input"
          ).val()}</div>`
        );
        $("input").val("").focus();
      }
    }
  );
};
$(document).on("click", function (x) {
  if (x.target.classList.contains("btn-detail")) {
    $.getJSON(
      `http://omdbapi.com/?apikey=99773434&i=${x.target.dataset.imdbId}`,
      function (r) {
        $(".modal-body").html(detail(r));
      }
    );
  }
});
const card = (x) => `<div class="col-md-4 my-2">
                          <div class="card" style="width: 18rem;">
                              <img src="${x.Poster}" class="card-img-top" alt="...">
                              <div class="card-body">
                                  <h5 class="card-title">${x.Title}</h5>
                                  <p class="card-text">${x.Year}</p>
                                  <button type="button" class="btn-detail btn btn-primary" data-imdb-id=${x.imdbID} data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
                              </div>
                          </div>
                      </div>`;
const detail = (x) => `<div class="row">
                              <div class="col-md-6">
                                  <img src="${x.Poster}" class="card-img-top" alt="...">
                              </div>
                              <div class="col-md-6">
                                  <ul class="list-group">
                                      <li class="list-group-item">${x.Title}</li>
                                  </ul>
                              </div>
                          </div>`;
