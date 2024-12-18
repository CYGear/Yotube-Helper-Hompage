// JavaScript for interactive functionality
document.getElementById('magic-button').addEventListener('click', () => {
    const message = document.getElementById('magic-message');
    message.textContent = 'You clicked the magic button!';
    message.style.color = 'green';
    message.style.fontWeight = 'bold';
});
