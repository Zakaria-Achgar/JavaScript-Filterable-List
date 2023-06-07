// Get input element
let filterInput = document.getElementById('filterInput');

// Add event listener
filterInput.addEventListener('keyup', filterNames);

function filterNames(){
    // Get value of input
    let filterValue = document.getElementById('filterInput').value.toUpperCase();
    
    // Get collection items
    let collectionItems = document.querySelectorAll('.collection-item');

    // Loop through collection items
    for(let i = 0; i < collectionItems.length; i++){
        let a = collectionItems[i].getElementsByTagName('a')[0];
        // If matched
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            collectionItems[i].style.display = '';
        } else {
            collectionItems[i].style.display = 'none';
        }
    }     
}
