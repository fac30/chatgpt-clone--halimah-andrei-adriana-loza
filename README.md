# chatgpt-clone--halimah-andrei-adriana-loza
FAC30 Unschool Project

We created a front-end clone of ChatGPT. Users can type in a question, enter an API key and receive an answer to their question.

## Here are the user stories we had to fulfill:

1. **Capture Form Data and Display on Page**: As a front-end developer, I want to start by writing a JavaScript function that captures the text from the textarea and displays it in a designated section on my web page when I press the submit button, using an **`onclick`** event handler and DOM manipulation methods like **`document.getElementById`** and **`textContent`**.
2. **API Key Entry**: As a front-end developer, I want to create a secure input field for entering my API key and storing it in a local variable, which I understand will only be for the learning process and not for a production environment.
3. **Store API Key Temporarily**: As a front-end developer, I want to temporarily store my entered API key in a JavaScript variable upon form submission and then remove the input field from the UI for subsequent chats.
4.  **Send API Requests**: As a front-end developer, I want to write a JavaScript function that sends the captured text to the OpenAI API, using the **`https://api.openai.com/v1/chat/completions`** endpoint with the API key in the header, and to get a response, using **`fetch()`** and **`.then()`** (and probably not using `async`/`await`, unless you are confident using it).
5. **Handle API Responses**: As a front-end developer, I want to take the response from the OpenAI API and display it in the designated section, using methods like **`JSON.parse()`** and `**JSON.stringify**` and updating the DOM to display the response.
6. **Enhance User Interaction**: As a front-end developer, I want to add CSS to make the interaction with my bot more visually appealing.