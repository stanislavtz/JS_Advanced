function solve() {
    // TODO ...
    const form = document.getElementById('container');
    const petsList = document.querySelector('#adoption > ul');
    const adoptedList = document.querySelector('#adopted > ul');

    let [name, age, kind, owner, addBtn] = Array.from(form.children);
    addBtn.addEventListener('click', addPet);

    function addPet(e) {
        e.preventDefault();
        if (!(name.value && Number(age.value) && kind.value && owner.value)) {
            return;
        }        
        
        const li = el('li');
        const p = el('p');
        const sOwner = el('span', `Owner: ${owner.value}`);
        const contactBtn = el('button', 'Contact with owner');
        contactBtn.addEventListener('click', makeContact);
        
        p.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;
        
        li.appendChild(p);
        li.appendChild(sOwner);
        li.appendChild(contactBtn);
        
        petsList.append(li);

        let newLiItem = Array.from(document.querySelector("#adoption > ul").children)[0];
        console.log(newLiItem);

        let insideLiElements = Array.from(newLiItem.children); // [p, span, btn]
        console.log(insideLiElements);

        let [p, span, btn] = insideLiElements;
        console.log([p, span, btn]);

        let [strongName, strongAge, strongKind] = Array.from(p.children); // [apn, span, span]

        console.log(strongName);
        console.log(strongAge);
        console.log(strongKind);

        console.log(insideLiElements.length);

        name.value = '';
        age.value = '';
        kind.value = '';
        owner.value = '';
    }

    function makeContact(e) {
        const parent = e.target.parentElement;
        e.target.remove();

        const takeBtn = el('button');
        takeBtn.textContent = 'Yes! I take it!';

        const div = el('div');
        const inputEl = el('input', '', { placeholder: 'Enter your names' });

        div.appendChild(inputEl);
        div.appendChild(takeBtn);

        parent.appendChild(div);

        takeBtn.addEventListener('click', (e) => {
            if (!inputEl.value) { return; }

            e.target.textContent = 'Checked';
            adoptedList.appendChild(e.target.parentElement.parentElement);

            const span = e.target.parentElement.parentElement.querySelector('span');
            span.textContent = `New Owner: ${inputEl.value}`;

            const checkBtn = el('button', 'Checked');
            e.target.parentElement.parentElement.appendChild(checkBtn);
            e.target.parentElement.remove();

            checkBtn.addEventListener('click', (ev) => {
                ev.target.parentElement.remove();
            });
        });
    }

    function el(type, content, attributes) {
        let result = document.createElement(type);

        if (content) {
            result.textContent = content;
        }

        if (attributes) {
            Object.assign(result, attributes);
        }

        return result;
    }
}