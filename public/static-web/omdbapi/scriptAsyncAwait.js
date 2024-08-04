document.getElementById("button-addon2").addEventListener("click", () => mainSearch());

document.querySelector(".s-input").addEventListener("keyup", (e) => e.key == "Enter" && mainSearch());

function mainSearch() {
  let key = document.querySelector(".s-input").value;
  document.getElementById("hasil").innerHTML = "";
  document.querySelector(".s-input").value = "";
  showFetch(key);
}

function showFetch(key) {
  // fetch(`http://omdbapi.com/?apikey=99773434&s=${key}`, { mode: "cors", headers: { "Access-Control-Allow-Origin": "*" } })
  fetch(`http://omdbapi.com/?apikey=99773434&s=${key}`)
    .then((res) => res.json())
    .then((res) => show(res));
}

const show = (res) => {
  res.Search.map((item) => {
    document.getElementById("hasil").innerHTML += `<div class="col-md-4">
      <div class="card" style="width: 18rem;">
            <img src="${item.Poster}" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">${item.Title}</h5>
              <p class="card-text">${item.Year}</p>
              <button type="button" class="btn-detail btn btn-primary" data-imdbid="${item.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
            </div>
        </div>
    </div>`;
  });
};

window.addEventListener("click", function (e) {
  const detailId = e.target.dataset.imdbid;
  if (e.target.innerHTML == "Detail") {
    fetch(`http://omdbapi.com/?apikey=99773434&i=${detailId}`, {
      mode: "cors",
      headers: { "Access-Control-Allow-Origin": "*" },
    })
      .then((res) => res.json())
      .then((res) => showDetail(res));
  }
});

const showDetail = (res) => {
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
};

// document
//   .querySelector("#button-addon2")
//   .addEventListener("click", async function () {
//     const input = document.querySelector(".s-input").value;
//     updateUI(await getMovies(input));
//   });

// document.querySelector(".s-input").addEventListener("keyup", async (e) => {
//   if (e.key == "Enter") {
//     const input = document.querySelector(".s-input").value;
//     updateUI(await getMovies(input));
//   }
// });

// document.addEventListener("click", async function (x) {
//   if (x.target.classList.contains("btn-detail")) {
//     const id = x.target.dataset.imdbId;
//     let data = await detailId(id);
//     updateDetail(data);
//   }
// });

// const getMovies = (x) => {
//   document.querySelector(".s-input").value = "";
//   return fetch(`http://omdbapi.com/?apikey=99773434&s=${x}`)
//     .then((r) => r.json())
//     .then((r) => r.Search);
// };

// const updateUI = (x) => {
//   let card = "";
//   x.forEach((y) => (card += show(y)));
//   document.querySelector(".row").innerHTML = card;
// };

// const detailId = (x) => {
//   return fetch(`http://omdbapi.com/?apikey=99773434&i=${x}`)
//     .then((r) => r.json())
//     .then((r) => r);
// };

// const updateDetail = (x) => {
//   document.querySelector(".modal-body").innerHTML = detail(x);
// };

// function show(x) {
//   return `<div class="col-md-4">
//           <div class="card" style="width: 18rem;">
//             <img src="${x.Poster}" class="card-img-top" alt="..." />
//             <div class="card-body">
//               <h5 class="card-title">${x.Title}</h5>
//               <p class="card-text">${x.Year}</p>
//               <button type="button" class="btn-detail btn btn-primary" data-imdb-id="${x.imdbID}" data-bs-toggle="modal" data-bs-target="#exampleModal">Detail</button>
//             </div>
//           </div>
//         </div>`;
// }

// function detail(x) {
//   return `<div class="row">
//                 <div class="col-md-6">
//                     <img src="${x.Poster}" class="card-img-top" alt="..." />
//                 </div>
//                 <div class="col-md-6">
//                     <ul class="list-group">
//                         <div class="list-group-item">${x.Title}</div>
//                     </ul>
//                 </div>
//               </div>`;
// }
