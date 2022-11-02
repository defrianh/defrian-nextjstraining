import addToFav from "utils/addToFav"
import isFavorite from "utils/isFavorite"

const Favorite = (props) => {
    let isFav = isFavorite(props.id)
    return (
        <div className={props.className}>
            <button
                className={`btn-fav ${isFav ? 'favorite' : ''}`}
                id={props.id}
                onClick={(e) => addToFav(e)}
            >
                {isFav ? 'Remove Fav' : 'Add To Fav'}
            </button>
        </div>
    )
}
export default Favorite;