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
        this.animals.forEach((animal) => {
            const randomNumber = Math.floor(Math.random() * activities.length)
            const randomActivity = activities[randomNumber]
            animal[randomActivity]()
            animal.reportEnergy()
        })
    }
}