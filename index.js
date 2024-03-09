// API fetching                 

// async function apicall(){
//     const  response = await fetch('https://dummyjson.com/products')
//     const result= await response.json();
//     console.log(result.products);

// }

// apicall();

console.log('This is project 3');

// Initialize the news api parameters
source = 'bbc-news';
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
        // console.log(articles);

        let newsHtml = "";
        articles.forEach(function (element) {
            // console.log(articles[news]);
            let news = `
                    <div class="accordion-item">
                         <h2 class="accordion-header" id="headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            ${element["title"]}
                            </button>
                        </h2>

                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
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

