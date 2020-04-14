function createTickets(input = [], str){
    class Ticket {
        constructor(destination, price, status){
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = [];
    input.forEach(element => {
        const args = element.split('|');
        const ticket = new Ticket(args[0], +args[1], args[2]);
        tickets.push(ticket);
    });

    switch (str) {
        case 'destination':
            tickets.sort((a, b) => (a.destination).localeCompare(b.destination));
            break;
        case 'price':
            tickets.sort((a, b) => a.price - b.price);
            break;
        case 'status':
            tickets.sort((a, b) => (a.status).localeCompare(b.status));
            break;
    }
    
    return tickets;
}