// Get the filter input and list elements
const filterInput = document.getElementById('filterInput');
const list = document.getElementById('list');

// Add event listener for filter input
filterInput.addEventListener('input', filterList);

// Function to filter the list based on the filter input
function filterList() {
  const filterValue = filterInput.value.toLowerCase();
  const items = list.getElementsByTagName('li');
  
  Array.from(items).forEach(item => {
    const text = item.textContent.toLowerCase();
    if (text.includes(filterValue)) {
      item.style.display = 'block'; // Show the item
    } else {
      item.style.display = 'none'; // Hide the item
    }
  });
}
// Get the filter buttons and list elements
const filterButtons = document.querySelectorAll('.filter-button');
const listItems = document.querySelectorAll('#list li');

// Add event listener for each filter button
filterButtons.forEach(button => {
  button.addEventListener('click', applyFilter);
});

// Function to apply the filter
function applyFilter() {
  // Get the filter value from the data attribute
  const filterValue = this.dataset.filter;

  // Show or hide items based on the filter value
  listItems.forEach(item => {
    if (filterValue === 'all') {
      item.classList.remove('hide'); // Show all items
    } else if (item.classList.contains(filterValue)) {
      item.classList.remove('hide'); // Show matching items
    } else {
      item.classList.add('hide'); // Hide non-matching items
    }
  });

  // Remove active class from all buttons and add it to the clicked button
  filterButtons.forEach(button => {
    button.classList.remove('active');
  });
  this.classList.add('active');
};
