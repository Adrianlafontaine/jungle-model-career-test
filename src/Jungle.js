export default class Jungle {
    constructor(animals) {
        this.animals = animals
    }
    
    soundOff() {
        this.animals.forEach(animal => {
            animal.makeSound()
            animal.reportEnergy()
        })
    }

    randomFrenzy() {
        const activities = ['eat', 'sleep', 'makeSound'] 
        const food = [ 'meat', 'fish', 'bugs', 'grain']
        this.animals.forEach((animal) => {
            const randomNumber = Math.floor(Math.random() * activities.length)
            const randomActivity = activities[randomNumber]
            const randomFood = food[Math.floor(Math.random() * food.length)]

            if(randomActivity === 'eat') {
                animal[randomActivity](randomFood)
            } else {
                animal[randomActivity]()
            }
            animal.reportEnergy()
        })
    }
}