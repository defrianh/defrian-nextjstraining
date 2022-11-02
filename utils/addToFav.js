const addToFav = (e) => {
    let favorites = JSON.parse(localStorage.getItem('favorites')) || []
    let id = e.target.id
    let index = favorites.indexOf(id)
    console.log(id)
    if (!id) return;

    if (index == -1) {
        favorites.push(id)
        e.currentTarget.innerHTML = 'Add To Fav'
        console.log('added')
    } else {
        favorites.splice(index, 1);
        e.currentTarget.innerHTML = 'Remove Fav'
        console.log('removeds')
    }

    localStorage.setItem('favorites', JSON.stringify(favorites));
}

export default addToFav;