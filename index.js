const form = document.getElementById('apiForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const chatInput = formData.get('chat-input');
    const chatOutput = document.getElementById('chat-output');

    chatOutput.textContent = chatInput;

    // const apiUrl = `https://api.openai.com/v1/chat/completions/`

    const apiKey = process.env.APIKEY
  

    fetch(`https://api.openai.com/v1/chat/completions/`, {
        method: 'POST',
        body: JSON.stringify(chatInput),
        headers: {
            'Content-Type' : 'application/json',
            'authorization': `Bearer ${apiKey}`,
        }
    })
        .then((response) => {
            console.log(response)
            if(!response.ok) throw new Error(response.status)
            return response.json();
        })
})