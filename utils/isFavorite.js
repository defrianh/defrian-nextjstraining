const isFavorite = (id) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    return favorites.includes(id)
}
export default isFavorite