{/* <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
  <div class="member">
    <div class="member-img">
      <img src="./images/bharatKatiyar.jfif" class="img-fluid" alt="" />
    </div>
    <div class="member-info">
      <h4>Bharat Katiyar</h4>
      <span>Experience: 26 years </span>
      <p>
        Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur
        ipsa quae aut. Ipsum exercitationem iure minima enim corporis et
        voluptate.
      </p>
    </div>
  </div>
</div>; */}


const student = [
    {
        name:"Aaryan kr Singh",
        school:"Air Force Sr. Sec School",
        marks:{
            Physics:96,
            Chemistry:99,
            Math:95
        },
        image:'aaryan.jpg'
    },
    {
        name:"Shivangi Aggarwal",
        school:"SFS",
        marks:{
            Physics:95,
            Chemistry:90,
            Math:95
        },
        image:'shivangi.jpg'
    }
]

const row = document.getElementById('starlist');


let studentList="";
for(let i =0;i<student.length;i++){
    
    studentList+=
    `
    <div class="col-lg-3 col-md-6 d-flex align-items-stretch">
    <div class="member">
      <div class="member-img">
        <img src="./images/bharatKatiyar.jfif" class="img-fluid star-image" alt="" />
      </div>
      <div class="member-info">
        <h4>${student[i].name}</h4>
        <span>Experience: 26 years </span>
        <p>
          Velit aut quia fugit et et. Dolorum ea voluptate vel tempore tenetur
          ipsa quae aut. Ipsum exercitationem iure minima enim corporis et
          voluptate.
        </p>
      </div>
    </div>
    </div> `
    
}

row.innerHTML=studentList;
