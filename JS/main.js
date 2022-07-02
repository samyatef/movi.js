const API_KEY = 'api_key=6f6fd32baec80884585617f38eb2a45a';
let BASE_URL = 'https://api.themoviedb.org/3';
let API_URL = BASE_URL + '/discover/movie?sort_by=popularity.desc&'+API_KEY;
let IMG_URL = 'https://image.tmdb.org/t/p/w500';
let searchURL = BASE_URL +'/search/movie?'+API_KEY
let main = document.getElementById('main');
let search = document.getElementById('search');
let searchByWord = document.getElementById('searchByWord');
let trendingURL = "https://api.themoviedb.org/3/trending/all/day?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let latestURL = "https://api.themoviedb.org/3/movie/latest?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let topratedURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let upcomingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let NowURL = "https://api.themoviedb.org/3/movie/now_playing?api_key=eba8b9a7199efdcb0ca1f96879b83c44";
let categoryLinks= document.getElementById('category')
category = "";
getMovies(API_URL);
function getMovies(url) {
    fetch(url).then(res => res.json()).then(data =>{
        showMovies(data.results);
    })
    
}
function showMovies(data) {

    main.innerHTML='';

    data.forEach(movie => {
        let {title, poster_path, vote_average, overview, release_date} = movie;
        let movieList = document.createElement('div');
        movieList.classList.add('movie');
        movieList.innerHTML = `
        <div class="row">
        <div class="col-md-3 col-lg-4 my-3 shadow ">
        <div class="movie shadow rounded">
        <div>
        <img src="${IMG_URL+poster_path}" alt="${title}" class="img-fluid rounded">
        </div>
        <div class="overview d-flex justify-content-center align-items-center">
        <div>
            <h4>${title}</h4>
            <p>${overview}</p>
            <p>${vote_average}</p>
            <p>${release_date}</p>
            </div>
        </div>
        </div>
        </div>`
        main.appendChild(movieList);
    })
}
search.addEventListener('keyup' , (e) => {
    e.preventDefault();
    let searchTerm = search.value;
    if(searchTerm){
        getMovies(searchURL+'&query='+searchTerm)
    }
    else{
        getMovies(API_URL);
    }
})
let userName = document.getElementById("name"),
    userEmail = document.getElementById("email"),
    userPhone = document.getElementById("phone"),
    userAge = document.getElementById("age"),
    userPassword = document.getElementById("password"),
    userRePassword = document.getElementById("rePassword"),
    userNameAlert = document.getElementById("namealert"),
    userEmailAlert = document.getElementById("emailalert"),
    userPhoneAlert = document.getElementById("phonealert"),
    userAgeAlert = document.getElementById("agealert"),
    userpasswordAlert = document.getElementById("passwordalert"),
    userRepasswordAlert = document.getElementById("repasswordalert");
function userNameValid() {
    return 1 == /^[a-zA-Z0-9]+$/.test(userName.value) ? ((userNameAlert.style.display = "none"), !0) : ((userNameAlert.style.display = "block"), !1);
}
function userEmailValid() {
    return 1 == /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(userEmail.value) ? ((userEmailAlert.style.display = "none"), !0) : ((userEmailAlert.style.display = "block"), !1);
}
function userPhoneValid() {
    return 1 == /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(userPhone.value) ? ((userPhoneAlert.style.display = "none"), !0) : ((userPhoneAlert.style.display = "block"), !1);
}
function userAgeValid() {
    return 1 == /^[1-9][0-9]?$|^100$/.test(userAge.value) ? ((userAgeAlert.style.display = "none"), !0) : ((userAgeAlert.style.display = "block"), console.log("dkldkdlkdlk"), !1);
}
function userPasswordValid() {
    return 1 == /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userPassword.value) ? ((userpasswordAlert.style.display = "none"), !0) : ((userpasswordAlert.style.display = "block"), !1);
}
function userRePasswordValid() {
    return userPassword.value == userRePassword.value ? ((userRepasswordAlert.style.display = "none"), !0) : ((userRepasswordAlert.style.display = "block"), !1);
}
(userAgeAlert.style.display = "none"),
    userName.addEventListener("keyup", userNameValid),
    userEmail.addEventListener("keyup", userEmailValid),
    userPhone.addEventListener("keyup", userPhoneValid),
    userAge.addEventListener("keyup", userAgeValid),
    userPassword.addEventListener("keyup", userPasswordValid),
    userRePassword.addEventListener("keyup", userRePasswordValid),
    document.getElementById("contact").addEventListener("click", function () {
        userNameValid() && userEmailValid() && userPhoneValid() && userAgeValid() && userPasswordValid() && userRePasswordValid() ? (document.getElementById("submitBtn").disabled = !1) : (document.getElementById("submitBtn").disabled = !0);
    });
    function openNav() {
        if ($("#mySidenav").width() == "250") {
            closeNav();
        } else {
            $("#mySidenav").width("250px");
            $("#stripHeaderNav").css("left", "240px");
        }
    }
    
    function closeNav() {
        $("#mySidenav").width("0px");
        $("#stripHeaderNav").css("left", "0px");
    }
  