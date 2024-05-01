const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const btnContainer = document.querySelectorAll(".btn-container");

about.addEventListener("click", function (e) {
  //console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  if (id) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");
    //hide other articles
    articles.forEach((article) => {
      article.classList.remove("active");
    });
    const activeDesc = document.getElementById(id);
    activeDesc.classList.add("active");
  }
});

// btnContainer.forEach((item) => {
//   console.log(item);
//   item.addEventListener("click", (e) => console.log(e.target.dataset.id));
// });
