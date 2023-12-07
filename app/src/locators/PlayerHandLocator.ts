import { HandLocator, ItemContext, getRelativePlayerIndex } from "@gamepark/react-game";
import { Location, MaterialItem } from "@gamepark/rules-api";

export class PlayerHandLocator extends HandLocator {

  getCoordinates(location: Location, context: ItemContext) {
    const players = context.rules.players.length
    const angle = -90 + getRelativePlayerIndex(context, location.player) * 360 / players
    const radiusX = players === 5 ? 45 : players === 4 ? 45 : 30
    const radiusY = players === 5 ? 25 : players === 4 ? 25 : 25
    const x = Math.cos(angle * Math.PI / 180) * radiusX
    const y = -Math.sin(angle * Math.PI / 180) * radiusY
    return { x, y, z: 10 }
  }

  getBaseAngle(item: MaterialItem<number, number>, context: ItemContext<number, number, number>): number {
    const players = context.rules.players.length
    return  getRelativePlayerIndex(context, item.location.player) * -360 / players
  }

  getMaxAngle(item: MaterialItem<number, number>, context: ItemContext<number, number, number>): number {
    const players = context.rules.players.length
    const relativePlayerIndex = getRelativePlayerIndex(context, item.location.player)
    switch (players) {
      case 3:
        if (relativePlayerIndex === 1 || relativePlayerIndex === 2) {
          return 25
        }
        return 40
      case 4:
        if (relativePlayerIndex === 1 || relativePlayerIndex === 2 || relativePlayerIndex === 3) {
          return 20
        }
        return 30
    }
    if (relativePlayerIndex === 1 || relativePlayerIndex === 2 || relativePlayerIndex === 3 || relativePlayerIndex === 4) {
      return 15
    }
    return 30
  }
}