const form = document.getElementById('apiForm');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const chatInput = formData.get('chat-input');
    const chatOutput = document.getElementById('chat-output');

    const outputParagraph = document.createElement('p');


    chatOutput.textContent = chatInput;

    const apiKey = formData.get('password');
    form.reset(); // Clears form data so new entries can be made


    fetch(`https://api.openai.com/v1/chat/completions`, {
        method: 'POST',
        body: JSON.stringify({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: chatInput }],
            temperature: 0.7
        }),
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

        .then((response) => {
            outputParagraph.textContent = JSON.stringify(response.choices[0]?.message?.content);
            chatOutput.appendChild(outputParagraph);


             // Split the message content into an array of lines
             const lines = messageContent.split('\n');

             // Clear existing content in the outputParagraph
             outputParagraph.innerHTML = '';

             // Iterate through the lines and append them to the outputParagraph with <br> tags
             lines.forEach((line, index) => {
             outputParagraph.innerHTML += line;
        
             // Add <br> tag after each line except the last one
              if (index < lines.length - 1) {
            outputParagraph.innerHTML += '<br>';
        }
        });
})

})
