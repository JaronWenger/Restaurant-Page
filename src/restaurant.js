// restaurant.js

const createRestaurantHomePage = () => {
    const content = document.querySelector("#content");
    const pageContent = document.createElement('div');
    pageContent.classList.add("page-content");



    // create and append headline element
    const headline = document.createElement("h1");
    headline.textContent = "Welcome to our restaurant!";
    pageContent.appendChild(headline);

    //Create and append copy element
    const copy = document.createElement("p");
    copy.textContent = "We serve the best food in town.  Come and taste it for yourself!"
    pageContent.appendChild(copy);
    content.appendChild(pageContent);
}

export default createRestaurantHomePage;