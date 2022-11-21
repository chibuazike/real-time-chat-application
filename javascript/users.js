const searchBar = document.querySelector(".users .search input"),
searchBtn = document.querySelector(".users .search button"),
usersList = document.querySelector(".users .users-list");

searchBtn.onclick = ()=>{
    searchBar.classList.toggle("active");
    searchBar.focus();
    searchBar.classList.toggle("active");
    searchBar.Value = "";
}

searchBar.onekeyup = ()=>{
  let searchTerm = searchBar.Value;  
  if(searchTerm != ""){
    searchBar.classList.add("active");
  }else{
    searchBar.classList.remove("active");
  }
   // Ajax
   let xhr = new XMLHttpRequest(); //creating xml object
   xhr.open("POST", "PHP/search.php",true);
   xhr.onload = () => {
       if(xhr.readyState === XMLHttpRequest.DONE){
           if(xhr.status === 200){
               let data = xhr.response;
               usersList.innerHTML = data;
           }
       }
   }
   xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
   xhr.send("searchTerm=" + searchTerm);
}

setInterval(()=>{
  // Ajax
  let xhr = new XMLHttpRequest(); //creating xml object
  xhr.open("GET", "PHP/users.php",true);
  xhr.onload = () => {
      if(xhr.readyState === XMLHttpRequest.DONE){
          if(xhr.status === 200){
              let data = xhr.response;
              if(!searchBar.classList.contains("active")){//if active is not containED IN SEARCH}
              usersList.innerHTML = data;
              }
          }
      }
  }
  xhr.send();
}, 500);//this function will run frequently after 500ms