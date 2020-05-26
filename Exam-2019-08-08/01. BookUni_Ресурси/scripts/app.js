function solve() {
    const form = document.querySelector('form button');
    const inputs = document.querySelectorAll('form input');
    const books = document.querySelectorAll('section .bookShelf');

    const oldBooks = books[0];
    const newBooks = books[1];

    let currentIncome = 0;

    form.addEventListener('click', function (e) {
        e.preventDefault();

        const book = {
            title: inputs[0].value ? inputs[0].value : null,
            year: Number(inputs[1].value) > 0 ? Number(inputs[1].value) : null,
            price: Number(inputs[2].value) > 0 ? Number(inputs[2].value) : null,
        };

        if (book.title && book.year && book.price) {
            const div = document.createElement('div');
            div.className = 'book';

            const p = document.createElement('p');
            p.textContent = `${book.title} [${book.year}]`;

            const buyButton = document.createElement('button');

            if (book.year >= 2000) {
                const moveBtn = document.createElement('button');

                buyButton.textContent = `Buy it only for ${book.price.toFixed(2)} BGN`;
                moveBtn.textContent = `Move to old section`;

                div.appendChild(p);
                div.appendChild(buyButton);
                div.appendChild(moveBtn);

                newBooks.appendChild(div);
            }
            else {
                buyButton.textContent = `Buy it only for ${(book.price * 0.85).toFixed(2)} BGN`;

                div.appendChild(p);
                div.appendChild(buyButton);

                oldBooks.appendChild(div);
            }
        }
    });

    const outputs = document.querySelector('#outputs');

    outputs.addEventListener('click', function (e) {
        const price = +e.target.parentElement.querySelector('button').textContent.split(' ')[4];

        if (e.target.textContent.includes('Buy')) {
            currentIncome += price;
            document.querySelectorAll('h1')[1].textContent = `Total Store Profit: ${currentIncome.toFixed(2)} BGN`;
            e.target.parentElement.textContent = '';
        }

        if (e.target.textContent.includes('Move')) {
            e.target.parentElement.querySelector('button').textContent = `Buy it only for ${(price * 0.85).toFixed(2)} BGN`;

            const element = e.target.parentElement;
            element.removeChild(element.querySelectorAll('button')[1]);
            oldBooks.appendChild(element);
        }
    });
}