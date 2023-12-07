import { LineLocator, ItemContext } from "@gamepark/react-game";
import { MaterialItem } from "@gamepark/rules-api"
import { gameCardDescription } from "../material/GameCardDescription";

export class RowLocator extends LineLocator {
    getCoordinates(item: MaterialItem, _context: ItemContext) {
        return {
            x: -15,
            y: -14 + (item.location.id * (gameCardDescription.height + 0.5)),
            z: 0
        }
    }
}