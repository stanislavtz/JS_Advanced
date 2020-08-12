function el(type, content, className) {
    let result = document.createElement(type);

    if (content) {
        result.textContent = content;
    }

    if (className) {
        result.className = className;
    }

    return result;
}