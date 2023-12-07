import { PositiveSequenceStrategy, hideItemId, hideItemIdToOthers, SecretMaterialRules, HidingStrategy, MaterialItem } from '@gamepark/rules-api'
import { LocationType } from './material/LocationType'
import { MaterialType } from './material/MaterialType'
import { PlayerId } from './PlayerId'
import { RuleId } from './rules/RuleId'
import { ChooseCardRule } from './rules/ChooseCardRule'
import { RevealCardRule } from './rules/RevealCardRule'
import { ResolveRule } from './rules/ResolveRule'


export const hideIdWhenNotRotated: HidingStrategy = (
  item: MaterialItem, player?: PlayerId
) => {
  if (item.location.player === player) return []
  return !item.location.rotation ? [] : ['id']
}

/**
 * This class implements the rules of the board game.
 * It must follow Game Park "Rules" API so that the Game Park server can enforce the rules.
 */
export class GameTemplateRules extends SecretMaterialRules<PlayerId, MaterialType, LocationType> {
  rules = {
    [RuleId.ChooseCard]: ChooseCardRule,
    [RuleId.Reveal]: RevealCardRule,
    [RuleId.Resolve]: ResolveRule
  }

  locationsStrategies = { 
    [MaterialType.Card]: {
      [LocationType.Hand]: new PositiveSequenceStrategy(),
      [LocationType.Deck]: new PositiveSequenceStrategy(),
    }
  }
  
  hidingStrategies = {
    [MaterialType.Card]: {
      [LocationType.Deck]: hideItemId,
      [LocationType.Hand]: hideItemIdToOthers,
      [LocationType.Table]: hideIdWhenNotRotated
    }
  }
}