import { LocationType } from '@gamepark/game-template/material/LocationType'
import { MaterialType } from '@gamepark/game-template/material/MaterialType'
import { PlayerId } from '@gamepark/game-template/PlayerId'
import { ItemLocator } from '@gamepark/react-game'
import { PlayerHandLocator } from './PlayerHandLocator'
import { GameDeckLocator } from './GameDeckLocator'
import { RowLocator } from './RowLocator'
import { TableLocator } from './TableLocator'

export const Locators: Partial<Record<LocationType, ItemLocator<PlayerId, MaterialType, LocationType>>> = {
    [LocationType.Hand]: new PlayerHandLocator(),
    [LocationType.Deck]: new GameDeckLocator(),
    [LocationType.Row]: new RowLocator(),
    [LocationType.Table]: new TableLocator()
}
