const API_KEY = 'AIzaSyDhb6__L4fpD5lkYLHIJ3kT2ZCwzKCNx_A';

const searchInput = document.querySelector('.search-inpu');
const searchBtn = document.querySelector('button');
const resultsDiv = document.getElementById('results');
const bookDetailsDiv = document.getElementById('book-details');
async function getbookdata(search) {
  const res = await fetch (
    `https://www.googleapis.com/books/v1/volumes?q=${search}&key=${API_KEY}`
  );
  const data = await res.json();
  console.log(data);
}

function searchBooks() {
  const searchInput = document.querySelector('.search-inpu').value;
  getbookdata(searchInput);
}
getbookdata();

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchbtn = searchInput.value;

  if (searchbtn === '') {
    alert('entre your books name');
    return;
  }

  const searchUrl = `${API_KEY}${searchbtn}`;

  fetch(searchUrl)
    .then(response => response.text())
    .then(data => {
      console.log(data);
searchBtn.addEventListener('click', searchBooks);
     
