const searchInput = document.querySelector('.search'),
  btns = document.querySelector('.btns'),
  mainContent = document.querySelector('.main-content');

let res = null;

async function getMovies() {

  const response = await fetch(`http://www.omdbapi.com/?apikey=77d01f6c&s=${searchInput.value}`);
  const movies = await response.json();

  console.log(searchInput.value);
  console.log(movies.Search);

  for (let i = 0; i < movies.Search.length; i++) {

    const card = document.createElement('div');
    card.classList.add('card');

    console.log(card);
    console.log(movies.Search[i]);

    card.innerHTML = `
   <img src=${movies.Search[i].Poster}/>
   <h4>${movies.Search[i].Title}</h4>
   <span>${movies.Search[i].Year} - ${movies.Search[i].Type}</span>
   ` ;

    mainContent.appendChild(card);

  }




}



btns.addEventListener('click', getMovies);

