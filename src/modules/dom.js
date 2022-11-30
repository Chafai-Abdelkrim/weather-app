const searchForm = document.querySelector('#search');
const unitsToggle = document.querySelector('#unit-toggle');

unitsToggle.className = localStorage.getItem('units') || 'metric';

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

const createElement = (tag, attributes, ...children) => {
    const element = document.createElement(tag);
    Object.keys(attributes).forEach((attr) => {
        element.setAttribute(attr, attributes[attr]);
    });
    children.forEach((child) => {
        if (child) {
            if (typeof child === 'string') {
                element.appendChild(document.createTextNode(child));
            } else {
                element.appendChild(child);
            }
        }
    });
    return element;
};
