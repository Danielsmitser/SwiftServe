document.addEventListener('DOMContentLoaded', () => {
    const tableButtonsContainer = document.getElementById('table-buttons');

    for (let i = 1; i <= 20; i++) {
        const button = document.createElement('button');
        button.textContent = `Table ${i}`;
        button.addEventListener('click', () => {
            window.location.href = `table.html?number=${i}`;
        });
        tableButtonsContainer.appendChild(button);
    }
});