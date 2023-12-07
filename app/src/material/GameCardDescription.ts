import { CardDescription, ItemContext, getRelativePlayerIndex } from "@gamepark/react-game";
import Card1 from '../images/1.jpg'
import Card2 from '../images/2.jpg'
import Card3 from '../images/3.jpg'
import Card4 from '../images/4.jpg'
import Card5 from '../images/5.jpg'
import Card6 from '../images/6.jpg'
import Card7 from '../images/7.jpg'
import Card8 from '../images/8.jpg'
import Card9 from '../images/9.jpg'
import Card10 from '../images/10.jpg'
import Card11 from '../images/11.jpg'
import Card12 from '../images/12.jpg'
import Card13 from '../images/13.jpg'
import Card14 from '../images/14.jpg'
import Card15 from '../images/15.jpg'
import Card16 from '../images/16.jpg'
import Card17 from '../images/17.jpg'
import Card18 from '../images/18.jpg'
import Card19 from '../images/19.jpg'
import Card20 from '../images/20.jpg'
import Card21 from '../images/21.jpg'
import Card22 from '../images/22.jpg'
import Card23 from '../images/23.jpg'
import Card24 from '../images/24.jpg'
import Card25 from '../images/25.jpg'
import Card26 from '../images/26.jpg'
import Card27 from '../images/27.jpg'
import Card28 from '../images/28.jpg'
import Card29 from '../images/29.jpg'
import Card30 from '../images/30.jpg'
import Card31 from '../images/31.jpg'
import Card32 from '../images/32.jpg'
import Card33 from '../images/33.jpg'
import Card34 from '../images/34.jpg'
import Card35 from '../images/35.jpg'
import Card36 from '../images/36.jpg'
import Card37 from '../images/37.jpg'
import Card38 from '../images/38.jpg'
import Card39 from '../images/39.jpg'
import Card40 from '../images/40.jpg'
import Card41 from '../images/41.jpg'
import Card42 from '../images/42.jpg'
import Card43 from '../images/43.jpg'
import Card44 from '../images/44.jpg'
import Card45 from '../images/45.jpg'
import Card46 from '../images/46.jpg'
import Card47 from '../images/47.jpg'
import Card48 from '../images/48.jpg'
import Card49 from '../images/49.jpg'
import Card50 from '../images/50.jpg'
import Card51 from '../images/51.jpg'
import Card52 from '../images/52.jpg'
import Card53 from '../images/53.jpg'
import Card54 from '../images/54.jpg'
import Card55 from '../images/55.jpg'
import Card56 from '../images/56.jpg'
import Card57 from '../images/57.jpg'
import Card58 from '../images/58.jpg'
import Card59 from '../images/59.jpg'
import Card60 from '../images/60.jpg'
import Card61 from '../images/61.jpg'
import Card62 from '../images/62.jpg'
import Card63 from '../images/63.jpg'
import Card64 from '../images/64.jpg'
import Card65 from '../images/65.jpg'
import Card66 from '../images/66.jpg'
import Card67 from '../images/67.jpg'
import Card68 from '../images/68.jpg'
import Card69 from '../images/69.jpg'
import Card70 from '../images/70.jpg'
import Card71 from '../images/71.jpg'
import Card72 from '../images/72.jpg'
import Card73 from '../images/73.jpg'
import Card74 from '../images/74.jpg'
import Card75 from '../images/75.jpg'
import Card76 from '../images/76.jpg'
import Card77 from '../images/77.jpg'
import Card78 from '../images/78.jpg'
import Card79 from '../images/79.jpg'
import Card80 from '../images/80.jpg'
import Card81 from '../images/81.jpg'
import Card82 from '../images/82.jpg'
import Card83 from '../images/83.jpg'
import Card84 from '../images/84.jpg'
import Card85 from '../images/85.jpg'
import Card86 from '../images/86.jpg'
import Card87 from '../images/87.jpg'
import Card88 from '../images/88.jpg'
import Card89 from '../images/89.jpg'
import Card90 from '../images/90.jpg'
import Card91 from '../images/91.jpg'
import Card92 from '../images/92.jpg'
import Card93 from '../images/93.jpg'
import Card94 from '../images/94.jpg'
import Card95 from '../images/95.jpg'
import Card96 from '../images/96.jpg'
import Card97 from '../images/97.jpg'
import Card98 from '../images/98.jpg'
import Card99 from '../images/99.jpg'
import Card100 from '../images/100.jpg'
import Card101 from '../images/101.jpg'
import Card102 from '../images/102.jpg'
import Card103 from '../images/103.jpg'
import Card104 from '../images/104.jpg'
import Back from '../images/back.jpg'
import { MaterialItem } from "@gamepark/rules-api";
import { LocationType } from "@gamepark/game-template/material/LocationType";


export class GameCardDescription extends CardDescription {
    
    height = 8.8
    width = 5.6

    backImage = Back
    images = {
        1: Card1,
        2: Card2,
        3: Card3,
        4: Card4,
        5: Card5,
        6: Card6,
        7: Card7,
        8: Card8,
        9: Card9,
        10: Card10,
        11: Card11,
        12: Card12,
        13: Card13,
        14: Card14,
        15: Card15,
        16: Card16,
        17: Card17,
        18: Card18,
        19: Card19,
        20: Card20,
        21: Card21,
        22: Card22,
        23: Card23,
        24: Card24,
        25: Card25,
        26: Card26,
        27: Card27,
        28: Card28,
        29: Card29,
        30: Card30,
        31: Card31,
        32: Card32,
        33: Card33,
        34: Card34,
        35: Card35,
        36: Card36,
        37: Card37,
        38: Card38,
        39: Card39,
        40: Card40,
        41: Card41,
        42: Card42,
        43: Card43,
        44: Card44,
        45: Card45,
        46: Card46,
        47: Card47,
        48: Card48,
        49: Card49,
        50: Card50,
        51: Card51,
        52: Card52,
        53: Card53,
        54: Card54,
        55: Card55,
        56: Card56,
        57: Card57,
        58: Card58,
        59: Card59,
        60: Card60,
        61: Card61,
        62: Card62,
        63: Card63,
        64: Card64,
        65: Card65,
        66: Card66,
        67: Card67,
        68: Card68,
        69: Card69,
        70: Card70,
        71: Card71,
        72: Card72,
        73: Card73,
        74: Card74,
        75: Card75,
        76: Card76,
        77: Card77,
        78: Card78,
        79: Card79,
        80: Card80,
        81: Card81,
        82: Card82,
        83: Card83,
        84: Card84,
        85: Card85,
        86: Card86,
        87: Card87,
        88: Card88,
        89: Card89,
        90: Card90,
        91: Card91,
        92: Card92,
        93: Card93,
        94: Card94,
        95: Card95,
        96: Card96,
        97: Card97,
        98: Card98,
        99: Card99,
        100: Card100,
        101: Card101,
        102: Card102,
        103: Card103,
        104: Card104    
    }

    getRotateZ(item: MaterialItem, context: ItemContext): number {
      if (item.location.type === LocationType.Table) {
        const players = context.rules.players.length
        return  getRelativePlayerIndex(context, item.location.player) * -360 / players
      }

      return super.getRotateZ(item, context)
      
    }

    rules = () => null

}

export const gameCardDescription = new GameCardDescription() 
