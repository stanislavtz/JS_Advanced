function solve() {
    const sections = document.querySelectorAll('section');
    const [add, open, inProgress, complete] = sections;

    const inputs = add.querySelectorAll('div input');

    const addBtn = document.querySelector('#add');
    addBtn.addEventListener('click', addArticle);

    function addArticle(e) {
        e.preventDefault();

        let [task, date] = inputs;
        let description = document.querySelector('#description');

        if (!(task.value && description.value && date.value)) {
            return;
        }

        const article = el('article');

        const h3 = el('h3', task.value);
        const p1 = el('p', `Description: ${description.value}`);
        const p2 = el('p', `Due Date: ${date.value}`);
        const div = el('div', '', { className: "flex" });

        const startBtn = el('button', 'Start', { className: "green" });
        startBtn.addEventListener('click', startTask);

        const deleteBtn = el('button', 'Delete', { className: "red" });
        deleteBtn.addEventListener('click', deleteTask);

        [startBtn, deleteBtn].forEach(btn => {
            div.appendChild(btn);
        });

        article.appendChild(h3);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(div);

        open.lastElementChild.appendChild(article);

        task.value = '';
        description.value = '';
        date.value = '';
    }

    function deleteTask(e) {
        e.target.parentNode.parentNode.remove();
    }

    function startTask(e) {
        const delBtn = this;
        delBtn.className = "red";
        delBtn.textContent = "Delete";
        delBtn.addEventListener('click', deleteTask);

        const finishBtn = this.nextElementSibling;
        finishBtn.className = "orange";
        finishBtn.textContent = "Finish";
        finishBtn.addEventListener('click', completeTask);

        const article = e.target.parentNode.parentNode;
        inProgress.lastElementChild.appendChild(article);
    }

    function completeTask(e) {
        const article = e.target.parentNode.parentNode;
        this.parentNode.remove();

        complete.lastElementChild.appendChild(article);
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