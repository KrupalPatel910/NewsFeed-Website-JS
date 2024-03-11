// API fetching                 

// async function apicall(){
//     const  response = await fetch('https://dummyjson.com/products')
//     const result= await response.json();
//     console.log(result.products);

// }

// apicall();

console.log('This is project 3');

// Initialize the news api parameters
let apiKey = 'eaa5fa9c8a2547aabd8ad910db06e917';

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion')

// Create an ajax get reque
const xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=eaa5fa9c8a2547aabd8ad910db06e917`, true);
xhr.getResponseHeader("Content-Type");

// What to do when response is ready
xhr.onload = function () {
    if (this.status == 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let newsHtml = "";
        articles.forEach(function (element, index) {
            
            let news = `
                    <div class="accordion-item">
                         <h6 class="accordion-header" id="heading${index}">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="true" aria-controls="#collapse${index}">
                            <strong> Breaking News ${index +1} : </strong>  ${element["title"]} </strong>  
                            </button>
                            
                        </h6>

                        <div id="collapse${index}" class="accordion-collapse collapse" aria-labelledby="heading${index}" data-bs-parent="#newsAccordion">
                               <div class="accordion-body">
                                    ${element["content"]} <a href="${element["url"]}" target="_blank">Read More</a>
                                </div>
                         </div>
                    </div>`
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }


    else {
        alert('Something went wrong!');
    }
};

xhr.send();

