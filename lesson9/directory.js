const requestURL = 'json2/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const company_reports  = jsonObject;
    console.log(company_reports);
    company_reports.forEach(displayProphets);
  });
  

  function displayProphets(details){
    // Create elements to add to the document
    let card = document.createElement('section');
    let name = document.createElement('h2');
    name.textContent = details.name;
    let location = document.createElement('h4');
    location.textContent = details.location;
    let phone = document.createElement('h5');
    phone.textContent = details.phone;
    let website = document.createElement('h5');
    website.textContent = details.websiteLevel;



    // set class attribute to the container
    card.classList.add('cards');
  
  
  
    // Add/append the section(card) with the h2 element
    cards.appendChild(name);
    cards.appendChild(location);
    cards.appendChild(phone);
    cards.appendChild(website);
 
    
    



  }

