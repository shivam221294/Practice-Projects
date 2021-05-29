const reviews = [
  {
    id: 1,
    name: "Rashmi Dhupia",
    job: "Student",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "Neha Pandey",
    job: "Monitor-1",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    info: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "Lord Voldemort",
    job: "Monitor-2",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
];
let personName = document.getElementById("name");
let job = document.getElementById("job");
let info = document.getElementById("info");
let img = document.getElementById("img-id");

let prevBtn = document.querySelector("#prev-btn");
let nextBtn = document.querySelector("#next-btn");

let startItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  showPerson(startItem);
});
prevBtn.addEventListener("click", function () {
  startItem -= 1;
  if (startItem < 0) {
    startItem = reviews.length - 1;
  }
  showPerson(startItem);
});

nextBtn.addEventListener("click", function () {
  startItem += 1;
  if (startItem >= reviews.length) {
    startItem = 0;
  }
  showPerson(startItem);
});

function showPerson(person) {
  const item = reviews[person];
  personName.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.info;
  img.src = item.img;
}
