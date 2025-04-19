//Adding an on click event listener for UI items
// document.getElementById("navbar-container").addEventListener("click", function(event) {
//   console.log(`Clicked ${event.target}`);
// });
//Getting nav bar from files dir
fetch("/navbar.html")
  .then(response => {
    console.log(response);
    return response.text();
  })
  .then((data)=>{
    console.log(data);
    document.getElementById("navbar-container").innerHTML = data;
  })
  .catch(
    (error)=>{
      console.log(error);
      document.getElementById("navbar-container").innerHTML = "Nav Bar Not Found(404)";
    }
  );
  //Getting footer
  //Getting nav bar from files dir
fetch("/footer.html")
.then(response => response.text())
.then((data)=>{
  // console.log(data);
  document.getElementById("footer").innerHTML = data;
})
.catch(
  (error)=>{
    console.log(error);
    document.getElementById("footer").innerHTML = "Footer Not Found(404)";
  }
);
