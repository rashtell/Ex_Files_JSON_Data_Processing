document.addEventListener("DOMContentLoaded", function(event) {
  function displayProducts() {
    // create document fragment and template for each product
    var fragment = document.createDocumentFragment();
    var product;
    var section = document.querySelector(".product-list");
    var item = document.createElement("li");
    var image = document.createElement("img");
    var text = document.createElement("h2");
    item.className = "product-item";
    image.className = "product-image";
    text.className = "product-name";
    item.appendChild(image);
    item.appendChild(text);

    // create a document node for each product and add it to the document fragment
    productData.products.forEach(function(el) {
      product = item.cloneNode(true);
      var currentImage = product.querySelector(".product-image");
      currentImage.src = "images/products/" + el.image;
      currentImage.alt = el.alt;
      product.querySelector(".product-name").innerHTML = el.name;
      fragment.appendChild(product);
    });

    // insert the document fragment at the appropriate place in the document
    section.appendChild(fragment);
  }

  function displayPeople() {
    // convert XML formatted string to a DOM node
    var peopleDataNode = (new DOMParser()).parseFromString(peopleXml, "text/xml"); 
    // convert DOM node to JSON
    var peopleDataJson = xml2json(peopleDataNode,"");
    // convert JSON to an object
    var parsedJson = JSON.parse(peopleDataJson);

    // create a document fragment as a template for the name cards
    var fragment = document.createDocumentFragment();
    var person;
    var section = document.querySelector(".people-cards");
    var item = document.createElement("div");
    var image = document.createElement("img");
    var cardInfo = document.createElement("div");
    var cardName = document.createElement("h3");
    var cardTitle = document.createElement("h4");
    var cardText = document.createElement("p");
    item.className = "person-card";
    cardInfo.className = "card-info";
    cardName.className = "card-name";
    cardTitle.className = "card-title";
    cardText.className = "card-text";
    cardInfo.appendChild(cardName);
    cardInfo.appendChild(cardTitle);
    item.appendChild(image);
    item.appendChild(cardInfo);
    item.appendChild(cardText);

    // create a document node for each product and add it to the document fragment
//    personData.cards.forEach(function(el) {
    parsedJson.people.div.forEach(function(el) {
      person = item.cloneNode(true);
      var currentImage = person.querySelector("img");
//      currentImage.src = "images/employees/" + el.img.src;
      currentImage.src = el.img["@src"];
//      currentImage.alt = el.img.alt;
      currentImage.alt = el.img["@alt"];
//      person.querySelector(".card-name").innerHTML = el.cardInfo.cardName;
      person.querySelector(".card-name").innerHTML = el.div.h3["#text"];
//      person.querySelector(".card-title").innerHTML = el.cardInfo.cardTitle;
      person.querySelector(".card-title").innerHTML = el.div.h4["#text"];
//      person.querySelector(".card-text").innerHTML = el.cardText;
      person.querySelector(".card-text").innerHTML = el.p["#text"];
      fragment.appendChild(person);
    });

    // insert the document fragment at the appropriate place in the document
    section.appendChild(fragment);
  }

  displayProducts();
  displayPeople();

  // use tv4 validator to validate product data against product schema

  // log only the first error
/*
  var result = tv4.validate(data, schema);
  if (result === true) {
    console.log("Valid data");
  } else {
    console.log(tv4.error);
  }
*/

  // log all errors
  var productResult = tv4.validateMultiple(productData, productSchema);
  if (productResult.valid === true) {
    console.log("Valid product data");
  } else {
    console.log(productResult);
  }

  // use tv4 validator to validate person data against person schema
  // log all errors 
  var peopleResult = tv4.validateMultiple(personData, personSchema);
  if (peopleResult.valid === true) {
    console.log("Valid people data");
  } else {
    console.log(peopleResult);
  }

});