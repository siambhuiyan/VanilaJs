const sidebar = document.querySelector(".sidebar");
const closeBtn = document.querySelector(".close-btn");
const toggleBtn = document.querySelector(".sidebar-toggle");

//addEventListener

toggleBtn.addEventListener("click", function () {
  //   console.log(sidebar.classList);
  //   if (sidebar.classList.contains("show-sidebar")) {
  //     sidebar.classList.remove("show-sidebar");
  //   } else {
  //     sidebar.classList.add("show-sidebar");
  //   }
  sidebar.classList.toggle("show-sidebar");
});

closeBtn.addEventListener("click", function () {
  sidebar.classList.remove("show-sidebar");
});
