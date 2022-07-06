const requestURL = 'json2/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const company_reports = jsonObject['company_reports'];
    company_reports.forEach(displayProphets);
  });


  function displayProphets(reports) {
    // Create elements to add to the document
        let card = document.createElement('section');
        card.classList.add('company_reports');
        let infoDiv = document.createElement('div');
        infoDiv.classList.add('info');
        let h2 = document.createElement('h2');
        let name = document.createElement('p');
        let location = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let imageContainer = document.createElement('a')
        imageContainer.classList.add('image-container');
        let image = document.createElement('img');
        image.classList.add('reports-img');
        
        h2.textContent = `${reports.name} ${reports.lastname}`;
        name.textContent = `Date of Birth: ${reports.name}`
        location.textContent = `Place of Birth: ${reports.location}`
        phone.textContent = `Place of Birth: ${reports.phone}`
        website.textContent = `Place of Birth: ${reports.website}`
        imageContainer.setAttribute('href', reports.imageurl);
        image.setAttribute('src', reports.imageurl);
        image.setAttribute('alt', `${reports.name} ${reports.lastname} - ${reports.order}`);

        infoDiv.appendChild(h2);
        infoDiv.appendChild(name);
        infoDiv.appendChild(location);
        imageContainer.appendChild(image);
        
        card.appendChild(infoDiv);
        card.appendChild(imageContainer);

        document.querySelector('div.cards').appendChild(card);
  }