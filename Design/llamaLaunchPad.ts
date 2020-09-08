//Llama launch pad. 
//llama shipments with the martians
//Llamas thrive in mars. 
//Light atmospher helps them prance efficiently
//rockets launched everyday that has the Llamas
//each rocket has certain capacity
// design a service that allows me to make sure you get llamas in the rocket 
  //  - each llama has a backpack
// coordinates the rocket launch
 //   - a rocket full it will send a message saying the rocket is ready to launch
// 5 rockets; infinite number of llamas
// everyday 
class LlamaLaunchPad {
    private passangerList;
    private capacity;
    private rocket;
    constructor(passangerList: Llama[], capacity: number, listOfRocket: Rocket[]) {
        this.passangerList = passangerList;
        this.capacity = capacity;
        this.rocket = listOfRocket;
    }

    checkTinyBackPack(llama: Llama) {
        if(llama.hasTinyBackpack) return true;
        else {
            llama.hasTinyBackpack = true;
        }
        return true;
    }


    boardLlama(rocket: Rocket) {
        for(let i = 0; i < this.capacity; i++) {
            if(this.checkTinyBackPack(this.passangerList[i])) {
                rocket.passengers.push(this.passangerList[i]);
            } 
        }
        rocket.ready = true;
    }

    displayMessage(rocket: Rocket) {
        if(rocket.ready) return "Ready to launch"
        else return "Not ready to launch"
    }

    execute() {
        for(let i = 0; i < this.rocket.length; i++) {
            this.boardLlama(this.rocket[i]);
            this.displayMessage(this.rocket[i]);
        }
    }
}

class Llama {
    public id: string;
    public hasTinyBackpack: boolean;
    constructor(id: string, hasTinyBackpack: boolean) {
        this.id = id;
        this.hasTinyBackpack = hasTinyBackpack;
    }
}

class Rocket {
    public id: string;
    public ready: boolean;
    public passengers: Llama[];
}