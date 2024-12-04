
// let postTitle = document.getElementById("postTitle");
// let postDescription = document.getElementById("postDescript");
// let postBTn = document.getElementById("postBtn");

// postBTn.addEventListener("click",()=>{

    // console.log(postTitle.value);
    // console.log(postDescription.value);

// if(postTitle.value.trim() && postDescription.value.trim()){
//     postList.innerHTML += `
//     <div class="card" style="width: 18rem;">
//   <div class="card-body">
//     <h2 class="card-title">${postTitle.value}</h2>
//     <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
//     <p class="card-text">${postDescription.value}</p>
   
//   </div>
// </div>`

// }


// })










// postBTn.addEventListener("click",()=>{
    function submitPost(){
        
let postTitle = document.getElementById("postTitle");
let postDescription = document.getElementById("postDescription");
let postList = document.getElementById("postList");

if(postTitle.value.trim() && postDescription.value.trim()){
    postList.innerHTML += `   <div class="card ">
                        <div class="card-header fontStyle">
                            Your Posts
                        </div>
                            <h5 class="card-title fontStyle" id="previousTitle">${postTitle.value}</h5>
                            <p class="card-text fontStyle" id="previousDescrip">${postDescription.value}</p>
                        </div>
               
                        <div class="d-flex p-3 gap-2">
                        <button type="button" class="btn btn-success" onclick="editBtn(event)">Edit</button>
                        <button type="button" class="btn btn-danger" onclick="removeBtn(event)">Delete</button>
                        </div>
                    </div>
                </div>`

                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Your post has been created",
                    showConfirmButton: false,
                    timer: 1500
                  }); 

                  postTitle.value = ' ';
                  postDescription.value = ' ';                  
                
                
                }
    else{
        Swal.fire({
            title: "Empty Field",
            text:"Fill Both Fields",
            icon:"question",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
    }

}

async function editBtn(event){

let previousTitle = document.getElementById("previousTitle");
let previousDescrip = document.getElementById("previousDescrip");



    const { value: formValues } = await Swal.fire({
        postTitle: "Edit Post",
      html: `
      <label>Title:
        <input id="swal-input1" class="swal2-input" value="${previousTitle.innerHTML}"></label>
        <label>Description:
         <input id="swal-input2" class="swal2-input" value="${previousDescrip.innerHTML}"></label>
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      },
    });


    Swal.fire({
			position: 'center',
			icon: 'success',
			title: 'Update Post',
			showConfirmButton: false,
			timer: 1500,
		});

 setTimeout(function () {
    
        previousTitle.innerHTML = formValues[0];
        previousDescrip.innerHTML = formValues[1];
},1500)
}
function removeBtn(event){
    Swal.fire({
		title: 'Are You sure! You want to delete this post',
		showDenyButton: true,
		confirmButtonText: 'Sure',
		denyButtonText: `No`,
	})
  .then((result)=>{
    if(result.isConfirmed){
      event.target.parentNode.parentNode.remove();

    }
    else if(result.isDenied){

    }
  });
}