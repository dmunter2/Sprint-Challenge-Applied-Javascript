// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.




axios.get(`https://lambda-times-backend.herokuapp.com/articles`)
    .then(data => {
        const cardsContainer = document.querySelector('.cards-container');

        data.data.articles.javascript.forEach((i) => {
            cardsContainer.appendChild(createCard(i))
        })
        data.data.articles.bootstrap.forEach((i) => {
            cardsContainer.appendChild(createCard(i))
        })
        data.data.articles.technology.forEach((i) => {
            cardsContainer.appendChild(createCard(i))
        })
        data.data.articles.jquery.forEach((i) => {
            cardsContainer.appendChild(createCard(i))
        })
        data.data.articles.node.forEach((i) => {
            cardsContainer.appendChild(createCard(i))
        })


    })
    .catch(err => {
        console.log('Error: ', err);
    })


function createCard(info) {
    const cardContainer = document.createElement('div');
    const headlineContainer = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgContainer = document.createElement('div');
    const firstImg = document.createElement('img');
    const firstSpan = document.createElement('span');


    cardContainer.classList.add('card');
    headlineContainer.classList.add('headline');
    authorDiv.classList.add('author');
    imgContainer.classList.add('img-container');

    cardContainer.appendChild(headlineContainer);
    cardContainer.appendChild(authorDiv);
    authorDiv.appendChild(imgContainer);
    authorDiv.appendChild(firstSpan)
    imgContainer.appendChild(firstImg);

    headlineContainer.textContent = info.headline
    firstSpan.textContent = info.authoName;
    firstImg.src = info.authorPhoto;



    return cardContainer;
}