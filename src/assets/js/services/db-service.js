const getTrailers = () => {
    return fetch('http://localhost:4000/trailers')
        .then(response => response.json())
        .catch(error => console.error(error));
}

export const dbService = {
    getTrailers,
}