import { ItemMove, MaterialMove, SimultaneousRule, isMoveItemType } from "@gamepark/rules-api";
import { MaterialType } from "../material/MaterialType";
import { LocationType } from "../material/LocationType";
import { RuleId } from "./RuleId";

export class ChooseCardRule extends SimultaneousRule<number, MaterialType, LocationType> {
    getLegalMoves(playerId: number) {
        const cards = this.material(MaterialType.Card).location(LocationType.Hand).player(playerId)
        return cards.moveItems({ type: LocationType.Table, player: playerId, rotation: true })
    }

    afterItemMove(move: ItemMove): MaterialMove[] {
        if (!isMoveItemType(MaterialType.Card)(move)) return []

        return [this.rules().endPlayerTurn(move.location.player!)]
    }

    getMovesAfterPlayersDone(): MaterialMove<number, number, number>[] {
        return [this.rules().startRule(RuleId.Reveal)]
    }
    
}