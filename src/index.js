import Jungle from './Jungle.js'
import Monkey from './Monkey.js'
import Tiger from './Tiger.js' 
import Snake from './Snake.js'

const jungle = new Jungle([
    new Monkey(20),
    new Snake(5),
    new Tiger(13),
    new Monkey(5),
    new Tiger(24)
])

jungle.soundOff()
jungle.randomFrenzy()