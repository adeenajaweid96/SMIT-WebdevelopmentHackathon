// import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";

// const db = getFirestore();

// const postsRef = collection(db, "posts");
// const q = query(postsRef, where("gender", "==", "male"));
// const querySnapshot = await getDocs(q);

// querySnapshot.forEach((doc) => {
//   console.log(doc.id, " => ", doc.data());
// });






document.getElementById("searchForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const category = document.getElementById("searchCategory").value.trim().toLowerCase();
    
    if (!category) {
      alert("Please type a category to search.");
      return;
    }
  
    const db = getFirestore(); // Initialize Firestore
    const postsRef = collection(db, "posts");
  
    // Search posts matching gender OR education
    const q = query(
      postsRef,
      where("gender", "==", category),
      where("education", "==", category)
    );
  
    const querySnapshot = await getDocs(q);
  
    // Display search results
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
  
    if (querySnapshot.empty) {
      console.log("No matching documents found.");
    }
  });


  let goToSignup = document.getElementById("gotosignup");
goToSignup.addEventListener("click",()=>{
    window.location.href = "signup.html";
})