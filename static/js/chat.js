document.getElementById("chat-form").addEventListener("submit", function(event) {
    event.preventDefault();
    let userInput = document.getElementById("user-input").value;

    if (userInput.trim() === "") {
        return;
    }

    // Add user message to the chatbox
    let chatbox = document.getElementById("chatbox");
    let userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.innerText = userInput;
    chatbox.appendChild(userMessage);

    // Clear the input field
    document.getElementById("user-input").value = "";

    // Placeholder for sending message to the backend (API integration later)
    let botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.innerText = "Processing...";
    chatbox.appendChild(botMessage);

    // Scroll to the latest message
    chatbox.scrollTop = chatbox.scrollHeight;

    // Later, here you will integrate with model logic to get the response
});
