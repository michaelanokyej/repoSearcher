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

function gitApiCall(searchTerm){
    fetch('https://api.github.com/users/' + searchTerm + '/repos')
    .then(response => response.json())
    .then(responseJson => display(responseJson));
    // display(responseJson);
}

function display(responseJson){
    for(let i =0; i < responseJson.length; i++){
        // console.log(responseJson[i].name);
        $('body').append(`<ul>
            <li>Name: ${responseJson[i].name}</li>
            <li>URL:  ${responseJson[i].html_url}</li>
        </ul>`
        )
    };
}

function callOnSubmit() {
  $('form').submit(function(e) {
    e.preventDefault();
    const searchTerm = $('input').val();
    gitApiCall(searchTerm);
    // display(responseJson);
    console.log(searchTerm);
  });
//   display(responseJson);
}

$(callOnSubmit);