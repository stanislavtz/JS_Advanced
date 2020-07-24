class VeterinaryClinic {
    // TODO: implement this class...
    constructor(clinicName, capacity) {
        this.clinicName = clinicName;
        this.capacity = capacity;
        this.clients = [];
        this.currentWorkload = [];
        this.totalProfit = 0;
    }

    newCustomer(ownerName, petName, kind, procedures) {
        let totalPetsInClinic = this.clients.reduce((acc, client) => {
            acc += client.pets.length;
            return acc;
        }, 0);

        if (totalPetsInClinic >= this.capacity) {
            throw new Error("Sorry, we are not able to accept more patients!");
        }

        let customer = this.clients.find(c => c.ownerName === ownerName);
        if (!customer) {
            customer = {
                ownerName,
                pets: []
            }
        }

        let pet = customer.pets.find(p => p.petName === petName);
        if (!pet) {
            pet = {
                petName,
                kind,
                proc: procedures
            }

            customer.pets.push(pet);
        } else {
            const fullSetOfProcs = function () {
                if (JSON.stringify(procedures.sort((a, b) => a.localeCompare(b))) === JSON.stringify(pet.proc.sort((a, b) => a.localeCompare(b)))) {
                    return true;
                }

                for (const p of procedures) {
                    if (pet.proc.includes(p)) {
                        procedures = procedures.filter(pr => pr !== p);
                    }
                }

                pet.proc.push(procedures);
                return false;
            }

            if (fullSetOfProcs) {
                throw new Error(`This pet is already registered under ${ownerName} name! ${petName} is on our lists, waiting for ${pet.proc.join(', ')}.`)
            }
        }


        pet.proc.push(...procedures);
        pet.proc = Array.from(new Set(pet.proc));
        this.currentWorkload.push(...pet.proc);
        this.clients.push(customer);

        return `Welcome ${petName}!`;
    }

    onLeaving(ownerName, petName) {
        let customer = this.clients.find(c => c.ownerName === ownerName);
        if (!customer) {
            throw new Error("Sorry, there is no such client!");
        }

        let pet = customer.pets.find(p => p.petName === petName);
        if (!pet || pet.procedures.length === 0) {
            throw new Error(`Sorry, there are no procedures for ${petName}!`)
        }
    }
}

let clinic = new VeterinaryClinic('SoftCare', 10);
console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B', '2C32B', '12CDB']));
// console.log(clinic.newCustomer('Jim Jones', 'Tom', 'Cat', ['A154B']));
console.log(clinic.newCustomer('Anna Morgan', 'Max', 'Dog', ['SK456', 'DFG45', 'KS456']));
console.log(clinic.newCustomer('Jim Jones', 'Tiny', 'Cat', ['A154B']));
// console.log(clinic.onLeaving('Jim Jones', 'Tiny'));
// console.log(clinic.toString());
// clinic.newCustomer('Jim Jones', 'Sara', 'Dog', ['A154B']); 
// console.log(clinic.toString());
