const form = document.getElementById('apiForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const chatInput = formData.get('chat-input');
    const chatOutput = document.getElementById('chat-output');

    chatOutput.textContent = chatInput;
})