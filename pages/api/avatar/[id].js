import { data } from "../../../data"

export default function handler(request, response) {
    const { id } = request.query;
    const character = data.find((char) => char._id.toString() === id);

    if (!character) {
        return response.status(400).json("Character Not Found");
    }
    return response.status(200).json(character)
}