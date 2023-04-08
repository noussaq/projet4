const API_KEY = 'AIzaSyDhb6__L4fpD5lkYLHIJ3kT2ZCwzKCNx_A';


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
const searchForm = document.querySelector('form');
const searchInput = document.querySelector('input[type="text"]');
const resultsContainer = document.querySelector('#results');

searchForm.addEventListener('submit', event => {
  event.preventDefault();

  const searchTerm = searchInput.value;

  if (searchTerm === '') {
    alert('Please enter a search term');
    return;
  }

  const searchUrl = `${SEARCH_URL}${searchTerm}`;

  fetch(searchUrl)
    .then(response => response.text())
    .then(data => {
      console.log(data);
      // parse the XML data and convert to JSON
      const parser = new DOMParser();
     