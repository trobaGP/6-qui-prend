import { ItemLocator, ItemContext, getRelativePlayerIndex } from "@gamepark/react-game";
import { MaterialItem } from "@gamepark/rules-api";
export class TableLocator extends ItemLocator {

    getPosition(item: MaterialItem<number, number>, context: ItemContext) {
      const players = context.rules.players.length
      const angle = -90 + getRelativePlayerIndex(context, item.location.player) * 360 / players
      const radiusX = players === 5 ? 35 : players === 4 ? 35 : 20
      const radiusY = players === 5 ? 15 : players === 4 ? 15 : 15
      const x = Math.cos(angle * Math.PI / 180) * radiusX
      const y = -Math.sin(angle * Math.PI / 180) * radiusY
      const z = 10
      return { x, y, z }
    }
}