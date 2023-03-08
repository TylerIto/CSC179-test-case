const searchHeader = document.querySelector('#search-header');
const dateRangeInput = document.querySelector('#date-range-input');
const nameInput = document.querySelector('#name-input');
const statusInput = document.querySelector('#status-input');

function handleSearch(event) {
  event.preventDefault(); // disallows default value searching
  const dateRange = dateRangeInput.value;
  const name = nameInput.value;
  const status = statusInput.value;

  // TODO: Perform the search with the specified parameters
  // You can use the variables "dateRange", "name", and "status" to perform the search
  console.log(`Performing search with parameters:
    Date range: ${dateRange}
    Name: ${name}
    Status: ${status}
  `);
}

// Add an event listener to the form to handle the search when it is submitted
searchHeader.addEventListener('submit', handleSearch);