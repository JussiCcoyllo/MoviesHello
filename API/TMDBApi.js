const API_TOKEN = '7ca673fff2a5fb82abd38a9a0d559c4e'

export function getFilmsFromApiWithSearchedText(text, page) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text + '&page=' + page
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}
export function getImageFromApi(name) {
    return 'https://image.tmdb.org/t/p/w500/' + name
}