const sectionCards = document.querySelector("div.cards");
const card = document.querySelector("div.card");

const contents = [
  {
    id: 1,
    title: "Face in the Crowd, A",
    description: "Maecenas pulvinar lobortis est.",
    img: "img/guiter1.png",
    duration: 149,
  },
  {
    id: 2,
    title: "Never Sleep Again: The Elm Street Legacy",
    description:
      "Nulla suscipit ligula in lacus. Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla.",
    img: "img/guitar2.jpg",
    duration: 51,
  },
  {
    id: 3,
    title: "Full Tilt Boogie",
    description:
      "Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo. In blandit ultrices enim.",
    img: "img/guitar3.jpg",
    duration: 88,
  },
  {
    id: 4,
    title: "Embrace of the Vampire",
    description:
      "Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus.",
    img: "img/guitar4.jpg",
    duration: 63,
  },
  {
    id: 5,
    title: "Mystery of the Yellow Room, The (Mystère de la chambre jaune, Le)",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.",
    img: "img/guitar5.jpg",
    duration: 28,
  },
  {
    id: 6,
    title: "Star 80",
    description:
      "Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend.",
    img: "img/guiter1.png",
    duration: 28,
  },
];

contents.map((item) => {
  const cardClone = card.cloneNode(true);
  cardClone.setAttribute("id", item.id);
  cardClone.querySelector(
    ".card-cover"
  ).style.backgroundImage = `url(${item.img})`;
  cardClone.querySelector(".card-title").innerHtml = item.title;
  cardClone.querySelector(".card-description").innerHtml = item.description;
  cardClone.querySelector(".card-duration").innerHtml = `${item.duration} min`;
  sectionCards.appendChild(cardClone);
});

card.remove();

/* Resposividade do menu */

let show = true;

const menuSection = document.querySelector(".menu-section");
const menuToggle = menuSection.querySelector(".menu-toggle");

menuToggle.addEventListener("click", () => {
  menuSection.classList.toggle("on", show);
  show = !show;
});
