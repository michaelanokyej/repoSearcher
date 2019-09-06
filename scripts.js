/**
 * pseudocode
 * 
 * When the user puts in a valid github username and clicks the serach button
 * a name and link for each repo will be generated at the bottom of the page
 * after a new search is entered it will be cleared before showing new stuff
 * 
 * 
 */
let searchedTerm = '';
const searchString = 'https://api.github.com/users/'; // ${someUserHere}/repos






function callOnSubmit() {
  $('form').submit(function(e) {
    e.preventDefault();
    const searchTerm = $('input').val();
    console.log(searchTerm);
  });
}

$(callOnSubmit);