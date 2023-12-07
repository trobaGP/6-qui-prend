import { MaterialGameSetup } from '@gamepark/rules-api'
import { GameTemplateOptions } from './GameTemplateOptions'
import { GameTemplateRules } from './GameTemplateRules'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { RuleId } from './rules/RuleId'

/**
 * This class creates a new Game based on the game options
 */
export class GameTemplateSetup extends MaterialGameSetup<PlayerId, MaterialType, LocationType, GameTemplateOptions> {
  Rules = GameTemplateRules

  setupMaterial(_options: GameTemplateOptions) {
    this.setupCards()
    this.dealCards()
  }

  setupCards() {
    const items = []
    for (let i = 1; i < 105; i++) {
      items.push({ id: i, location: { type: LocationType.Deck }})
    }
    this.material(MaterialType.Card).createItems(items)
    this.material(MaterialType.Card).shuffle()
  }

  dealCards() {
    const deck = this.material(MaterialType.Card).deck()
    for (const player of this.game.players) {
      deck.deal({ type: LocationType.Hand, player: player }, 10)
    }

    for (let i = 0; i < 4; i++) {
      deck.deal({ type: LocationType.Row, id: i })
    }
  }

  start() {
    this.startSimultaneousRule(RuleId.ChooseCard)
  }
}