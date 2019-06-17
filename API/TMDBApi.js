const API_TOKEN = '7ca673fff2a5fb82abd38a9a0d559c4e'

export function getFilmsFromApiWithSearchedText(text) {
    const url = 'https://api.themoviedb.org/3/search/movie?api_key=' + API_TOKEN + '&language=fr&query=' + text
    return fetch(url)
        .then((response) => response.json())
        .catch((error) => console.error(error))
}