export enum Tribes {
    BEAR = 'BEAR',
    BULL = 'BULL',
    CROCODILE = 'CROCODILE',
    DOG = 'DOG',
    EAGLE = 'EAGLE',
    ELEPHANT = 'ELEPHANT',
    FOX = 'FOX',
    GOAT = 'GOAT',
    HYENA = 'HYENA',
    LEOPARD = 'LEOPARD',
    LION = 'LION',
    RABBIT = 'RABBIT',
    RHINO = 'RHINO',
    ROOSTER = 'ROOSTER',
    SHARK = 'SHARK',
    TIGER = 'TIGER',
    WHALE = 'WHALE',
    WHITE_TIGER = 'WHITE_TIGER',
    WOLF = 'WOLF',
  }
  
  export type Warrior = {
    id: string
    name: string
    tribe: Tribes
    warriorname: string
  }
  
  export type Skill = {
    warrior: Warrior
    strength: number
    magic: number
    wisdom: number
    dexterity: number
    faith: number
    agility: number
  }
  
  export enum ResultColor {
    WIN = '#29B2A5',
    DRAW = '#FFD300',
    LOSE = '#B4151C',
  }
  