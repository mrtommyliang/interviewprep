// think of classes as something that you want to make a "copy" of 

// instantiation
class Player {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  introduce() {
    console.log(`Hi I am ${this.name}, and I am a ${this.type}`)
  }
}
// constructor function will create the name and type properties on a player object

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }
  play() {
    console.log(`I am a ${this.type}`);
  }
}

const wizard1 = new Wizard('Merlin', 'Healer')
const wizard2 = new Wizard('Dumbledore', 'Head Master')

wizard1.introduce()
wizard2.introduce()
wizard1.play()
wizard2.play()