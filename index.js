const form = document.getElementById('apiForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const chatInput = formData.get('chat-input');
    const chatOutput = document.getElementById('chat-output');

    chatOutput.textContent = chatInput;

    const apiKey = formData.get('password');
    console.log(apiKey);
    form.reset(); // Clears form data so new entries can be made

    fetch(`https://api.openai.com/v1/chat/completions`, {
        method: 'POST',
        body: JSON.stringify(chatInput),
        headers: {
            'Content-Type' : 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }
    })
        .then((response) => {
            console.log(response)
            if(!response.ok) throw new Error(response.status)
            return response.json();
        })
})