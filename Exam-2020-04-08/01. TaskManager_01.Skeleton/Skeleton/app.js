function solve() {
    const sections = document.querySelectorAll('section');
    const addSection = sections[0];
    const openSection = sections[1];
    const inProgressSection = sections[2];
    const completeSection = sections[3];

    const addBtn = addSection.querySelector('#add');
    addBtn.addEventListener('click', addTask);

    function addTask(e) {
        e.preventDefault();

        const task = addSection.querySelector('#task');
        const description = addSection.querySelector('#description');
        const dueDate = addSection.querySelector('#date');

        if (task.value === '' || description.value === '' || dueDate.value === '') {
            task.value = '';
            description.value = '';
            dueDate.value = '';
            return;
        }

        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');

        const div = document.createElement('div');
        div.className = 'flex';
        const startBtn = document.createElement('button');
        startBtn.className = 'green';
        const delBtn = document.createElement('button');
        delBtn.className = 'red';

        h3.textContent = task.value;
        p1.textContent = `Description: ${description.value}`;
        p2.textContent = `Due Date: ${dueDate.value}`;
        startBtn.textContent = 'Start';
        delBtn.textContent = 'Delete';

        div.appendChild(startBtn);
        div.appendChild(delBtn);

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);

        openSection.querySelectorAll('div')[1].appendChild(article);

        startBtn.addEventListener('click', startTask);
        delBtn.addEventListener('click', delTask);

        task.value = '';
        description.value = '';
        dueDate.value = '';
    }

    function delTask(e) {
        e.target.parentNode.parentNode.remove();
    }

    function startTask(e) {
        inProgressSection.querySelectorAll('div')[1].appendChild(e.target.parentNode.parentNode);
        
        const finishBtn = document.createElement('button');
        finishBtn.className = 'orange';
        finishBtn.textContent = 'Finish';
        finishBtn.addEventListener('click', completeTask);
        
        e.target.parentNode.appendChild(finishBtn);
        e.target.remove();
    }

    function completeTask(e) {
        completeSection.querySelectorAll('div')[1].appendChild(e.target.parentNode.parentNode);
        e.target.parentNode.remove();
    }
}