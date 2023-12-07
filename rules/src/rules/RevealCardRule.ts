import { MaterialRulesPart, isMoveItemType, ItemMove } from "@gamepark/rules-api";
import { MaterialType } from "../material/MaterialType";
import { LocationType } from "../material/LocationType";

export class RevealCardRule extends MaterialRulesPart {
    onRuleStart() {
        return this.hiddenCards.rotateItems(false)
    }

    afterItemMove(move: ItemMove) {
        if (!isMoveItemType(MaterialType.Card)(move)) return []
        if (this.hiddenCards.length) return []

        // TODO: Chercher dans les cartes révélées la carte de plus faible valeur 
        // 
        // return [this.rules().startPlayerTurn(RuleId.Resolve, card.location.player)]
        return []
    }

    get hiddenCards() {
        return this.tableCards.rotation(true)
    }

    get tableCards() {
        return this
            .material(MaterialType.Card)
            .location(LocationType.Table)
    }
}