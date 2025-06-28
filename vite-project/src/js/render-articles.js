import NewsApiService from '../js/news-service.js';
// import articleTemplate from '../templates/articles.hbs';

const refs = {
    searchForm: document.querySelector(".js-search-form"),
    articlesContainer: document.querySelector(".js-articles-container"),
    loadMoreBtn: document.querySelector('[data-action="load-more"]')
}

const newApiService = new NewsApiService()
console.log(newApiService)



refs.searchForm.addEventListener("submit", onSearch);
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(event) {
    event.preventDefault();
    newApiService.query = event.currentTarget.elements.query.value;
    newApiService.fetchArticles().then(articles => {
        // clearArticlesContainer();
        // appendArticleMarkUp(articles);
        console.log(articles)
    })
}

function appendArticleMarkUp(articles) {
    refs.articlesContainer.insertAdjacentHTML("beforeend", articleTemplate(articles))

}

function onLoadMore() {
    newApiService.fetchArticles().then(articles => {
        console.log(articles)
    });
}

// function clearArticlesContainer() {
//     refs.articlesContainer.innerHTML = '';
// }