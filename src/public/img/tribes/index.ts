import bear from './bear.jpg'
import bull from './bull.jpg'
import crocodile from './crocodile.jpg'
import dog from './dog.jpg'
import eagle from './eagle.jpg'
import elephant from './elephant.jpg'
import fox from './fox.jpg'
import goat from './goat.jpg'
import hyena from './hyena.jpg'
import leopard from './leopard.jpg'
import lion from './lion.jpg'
import rabbit from './rabbit.jpg'
import rhino from './rhino.jpg'
import rooster from './rooster.jpg'
import shark from './shark.jpg'
import tiger from './tiger.jpg'
import whale from './whale.jpg'
import whiteTiger from './white-tiger.jpg'
import wolf from './wolf.jpg'
import noImage from './no-image.jpg'

import { Tribes } from 'src/ts/types'

export const noTribe = noImage

export default [
  { id: Tribes.BEAR, name: 'Bear', img: bear, selected: true },
  { id: Tribes.BULL, name: 'Bull', img: bull, selected: false },
  { id: Tribes.CROCODILE, name: 'Crocodile', img: crocodile, selected: false },
  { id: Tribes.DOG, name: 'Dog', img: dog, selected: false },
  { id: Tribes.EAGLE, name: 'Eagle', img: eagle, selected: false },
  { id: Tribes.ELEPHANT, name: 'Elephant', img: elephant, selected: false },
  { id: Tribes.FOX, name: 'Fox', img: fox, selected: false },
  { id: Tribes.GOAT, name: 'Goat', img: goat, selected: false },
  { id: Tribes.HYENA, name: 'Hyena', img: hyena, selected: false },
  { id: Tribes.LEOPARD, name: 'Leopard', img: leopard, selected: false },
  { id: Tribes.LION, name: 'Lion', img: lion, selected: false },
  { id: Tribes.RABBIT, name: 'Rabbit', img: rabbit, selected: false },
  { id: Tribes.RHINO, name: 'Rhino', img: rhino, selected: false },
  { id: Tribes.ROOSTER, name: 'Rooster', img: rooster, selected: false },
  { id: Tribes.SHARK, name: 'Shark', img: shark, selected: false },
  { id: Tribes.TIGER, name: 'Tiger', img: tiger, selected: false },
  { id: Tribes.WHALE, name: 'Whale', img: whale, selected: false },
  {
    id: Tribes.WHITE_TIGER,
    name: 'White Tiger',
    img: whiteTiger,
    selected: false,
  },
  { id: Tribes.WOLF, name: 'Wolf', img: wolf, selected: false },
]
