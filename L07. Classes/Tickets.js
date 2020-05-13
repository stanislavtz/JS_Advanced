function createTickets(input, criteria) {
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    const tickets = input.reduce((acc, ele) => {
        const [dest, price, stat] = ele.split('|');
        const ticket = new Ticket(dest, +price, stat);
        acc.push(ticket);
        return acc;
    }, []);

    switch (criteria) {
        case 'destination':
            return tickets.sort((a, b) => (a.destination).localeCompare(b.destination));
        case 'price':
            return tickets.sort((a, b) => a.price - b.price);
        case 'status':
            return tickets.sort((a, b) => (a.status).localeCompare(b.status));
    }
}

console.log(createTickets(
    [
        'Philadelphia|94.20|available',
        'New York City|95.99|available',
        'New York City|95.99|sold',
        'Boston|126.20|departed'

    ],
    'price'
));