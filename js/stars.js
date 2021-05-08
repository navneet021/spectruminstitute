boardStudents = [
  {
    name: "name1",
    chemistry: 100,
    physics: 100,
    maths: 100,
    image: "../images/user.jpg",
  },
  {
    name: "name2",
    chemistry: 200,
    physics: 200,
    maths: 200,
    image: "../images/bharatKatiyar.jfif",
  },
  {
    name: "name3",
    chemistry: 300,
    image: "../images/bharatKatiyar.jfif",
  },
  {
    name: "name4",
    chemistry: 400,
    physics: 400,
    maths: 400,
    image: "../images/bharatKatiyar.jfif",
  },
  {
    name: "name5",
    // chemistry: 500,
    physics: 500,
    maths: 500,
    image: "../images/bharatKatiyar.jfif",
  },
  {
    name: "name6",
    chemistry: 600,
    maths: 600,
    image: "../images/bharatKatiyar.jfif",
  },
];

const boardlist = document.getElementsByClassName("d-flex align-content-stretch flex-wrap");

console.log(boardlist);

var boardStudentslist = "";
for (let i = 0; i < boardStudents.length; i++) {
  boardStudentslist += `
    <div class="p-4">
      <div class="testimonial-content text-center wow slideInUp">
      <img class="img-circle" src="${boardStudents[i].image}" alt="" />
      <h4>${boardStudents[i].name}<br /></h4>
      <p class="subjects" style="display:${
        boardStudents[i].chemistry ? "block" : "none"
      };">Chemistry: ${boardStudents[i].chemistry} </p>
      <p class="subjects" style="display:${
        boardStudents[i].physics ? "block" : "none"
      };">Physics: ${boardStudents[i].physics} </p>
      <p class="subjects" style="display:${
        boardStudents[i].maths ? "block" : "none"
      };">Maths: ${boardStudents[i].maths} </p>
  </div>
  </div>`;
}

boardlist[0].innerHTML = boardStudentslist;