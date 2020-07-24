class VeterinaryClinic {
    // TODO: implement this class...
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.workflow = [];
        this.profit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        const customer = {
            ownerName,
            pets: []
        }

        const pet = {
            petName,
            kind,
            procedures            
        }

        Object.defineProperty(pet, 'totalProcedures', function() {return pet.procedures.length})

        if (customer.pets.map(p => p.petName).indexOf(petName) === -1) { // to change it with find - additionally
            customer.pets.push(pet);
        }

        let totalPetsInClinic = this.clients.reduce((acc, client) => {
            const allCLientPets = client.pets.length;
            acc += allCLientPets;
            return acc;
        }, 0);

        if (this.capacity < totalPetsInClinic) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        const currentClient = this.clients.find(c => c.ownerName === ownerName);
        if (currentClient) {
            const currentPet = currentClient.pets.find(p => p.petName === petName);
            console.log(currentPet)
            // throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${currentPet.procedures.join(', ')}.`)
        }
        
        this.clients.push(customer);
        this.workflow.push(...pet.procedures);

        return `Welcome ${petName}!`;
    }

}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B'])); 
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
// console.log(clinic.toString());
