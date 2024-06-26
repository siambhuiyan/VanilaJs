const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "Steak dinner",
    category: "dinner",
    price: 30.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(`.section-center`);

const btnContainer = document.querySelector(".btn-container");

//load  items to the DOM
window.addEventListener("DOMContentLoaded", function () {
  // console.log("Shake and bake");
  displayMenuItems(menu);
  displayMenuButtons();
  /*My approach
  // const categories = menu.map(function (item) {
  //   return item.category;
  // });
  // console.log(categories);
  // const uniqueItems = new Set(categories);
  // const uniqueCate = Array.from(uniqueItems);
  // console.log(uniqueCate);
  //iterate over categories return buttons*/
});

//display menu item function
function displayMenuItems(menuItem) {
  let displayMenu = menuItem.map(function (item) {
    return `<article class="menu-item">
          <img src=${item.img} class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">$${item.price}</h4>
            </header>
            <p class="item-text">
             ${item.desc}
            </p>
          </div>
        </article>`;
  });
  // console.log(displayMenu);
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
  // console.log(displayMenu);
}

//display buttons for category

function displayMenuButtons() {
  // Get unique items  from array using reduce
  const categories = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtns = categories
    .map(function (cate) {
      return `<button class="filter-btn" data-id=${cate} type="button">${cate}</button>`;
    })
    .join("");
  //make sure to select buttons when they are available.
  btnContainer.innerHTML = categoryBtns;
  const filterBtns = document.querySelectorAll(".filter-btn");
  //filter items
  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const currentCate = e.currentTarget.dataset.id;
      console.log(currentCate);
      const menuCate = menu.filter(
        (menuItem) => menuItem.category === currentCate
      );
      if (currentCate == "all") {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCate);
      }
    });
  });
}
