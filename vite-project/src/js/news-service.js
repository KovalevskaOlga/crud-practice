const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '8f1f901d53ca4cba836785378f1d3c21';

const options = {
    headers: {
        Authorization: API_KEY,
    },
};

export default class NewsApiService {
    constructor() {
        this.searchQuery = '';
        this.page = 1
    }

    fetchArticles() {
        const url = `${BASE_URL}/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`

        return fetch(url, options)
        .then(response = response.json())
        .then(({articles}) => {
            incrementPage();
            return articles
        })
    }

    incrementPage() {
        this.page += 1;
    }

    reset() {
        this.page = 1
    }

    get query() {
        return this.searchQuery
    }

    set query(newQuery) {
        this.searchQuery = newQuery;
    }
}