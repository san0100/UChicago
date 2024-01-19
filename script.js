const conversationElement = document.getElementById('conversation');
const messagesContainer = document.querySelector('.conversation');

const messages = [
    { text: "Hello, esteemed Dean of Admissions! ✨ I am thrilled to inform you that I have discovered an exceptional student, just as you requested. I couldn't contain my excitement when I came across this promising applicant. They truly warrant your immediate attention.", speaker: "phoenix" },

    { text: "Ah, my esteemed colleague! 🌟 Your discovery intrigues me. Tell me more about this magical find among our realm of applicants .", speaker: "dean" },

    { text: "His name is Mr. Sanil Dulal, a shining star in the parallel universe. His skills gleam like the stars in a magical night sky, and his unique qualities are an enchantment waiting to unfold – a wizard in the making.", speaker: "phoenix" },

    { text: "Mr. Sanil, you say? Describe the hues of magic that adorn his potential. What makes him the chosen one?", speaker: "dean" },

    { text: "This applicant is truly exceptional—a brilliant wizard and an extraordinary individual. They've caught my discerning eye, and UChicago is their top choice school.", speaker: "phoenix" },

    { text: "But Phoenix, this is not enough to be the chosen one. I asked you to find that amazing applicant who truly belongs to UChicago. Upon seeing his file, he really does not have good academics. Phoenix, my friend, I think you made a mistake this time. What made you choose this applicant?", speaker: "dean" },

    { text: "(smiles) Dear Dean, I have not made any mistake. Even when I came to his application file, I thought the same, and I was about to skip. But it would have been unfair to do that. I wanted to give every applicant equal opportunity, and I am glad I did not skip the file.", speaker: "phoenix" },

    { text: "This applicant, a diligent and resilient individual, didn't let challenging times deter him. Despite not boasting the highest grades, he worked tirelessly, teaching himself magic, programming, and cybersecurity. His unwavering commitment to learning shines through, turning adversity into an opportunity for self-improvement.", speaker: "phoenix" },

    { text: "I understand this, but Phoenix, can he survive the rigorous academic curriculum at this institution?", speaker: "dean" },

    { text: "Rest assured, esteemed Dean. While his grades may not tell the full tale, the magic within Mr. Sanil is resilient and adaptable. Fear not, esteemed Dean! This remarkable wizard not only taught themselves programming but delved into extensive topics like cybersecurity. They've embarked on independent projects, conducted research, and displayed a myriad of talents.", speaker: "phoenix" },

    { text: "Their magical prowess extends far beyond the classroom. Coming from a background with limited resources, everything seemingly against him, Mr. Sanil's determination prevailed. He taught himself valuable skills and continues to be an avid learner, showcasing a resilience that speaks volumes. You need not worry about their ability to navigate our rigorous academic realm.", speaker: "phoenix" },

   

    { text: "Phoenix, what other qualities make him the chosen one? Are there hidden gems in his file that I may have overlooked?", speaker: "dean" },

    { text: "Certainly, esteemed Dean. Beyond academic brilliance, Mr. Sanil possesses a kind and compassionate spirit, a true friend to fellow seekers of knowledge. His file reveals an extraordinary ability to infuse warmth and support into the magical journeys of those around him. These qualities, often overlooked on paper, make him not just a chosen one academically but also a beacon of positivity and camaraderie in our enchanted community.", speaker: "phoenix"},

    { text: "Dean, at UChicago, we unearth dreams from forgotten pages, turning ordinary narratives into bestselling tales. This unique essence drew Mr. Sanil to choose UChicago as his first choice, amidst over 5000 magical schools.", speaker: "phoenix" },

    { text: "You are right, Phoenix. Let me discuss this with the Headmaster (President), and I will let you know what he thinks.", speaker: "dean" },

    { text: "Dear Phoenix, well done! The Headmaster is also genuinely impressed with this applicant, and we truly feel he is the chosen one for the class of 2028. He belongs to this community, and we are committed to helping him achieve great things. I will instruct the admission team to go through his file now and accept him for the class of 2028. Good work, Phoenix!", speaker: "dean" },


    { text: "Dear Dean, thank you for your kind words!, in granting Mr. Sanil this opportunity, we believe in the transformative power of one chance. Indeed, he deserves this chance to weave his own magical tale within the enchanted halls of UChicago. Thank you for recognizing his potential and affording him the opportunity to shine in the class of 2028.", speaker: "phoenix" },

    { text: "Phoenix, your dedication to discovering and advocating for exceptional talent is truly commendable. As we welcome Mr. Sanil to the class of 2028, we embrace the belief in the magic of unique opportunities. Together, let's embark on a journey of limitless possibilities.", speaker: "dean" },   
];

const htmlLinkMessage = {
    text: 'Also, Before you disappear into the mundane, check out this short clip of magic <a href="ending.html" id="ending.html">here</a>. Only takes a moment!',
    speaker: 'magic'
};


messages.push(htmlLinkMessage);

let index = 0;

function displayMessage() {
    if (index < messages.length) {
        const message = messages[index];

        if (message.speaker === "phoenix" || message.speaker === "dean") {
            showMessageWithTyping(message);
        } else {
            showMessage(message);
        }
    }
}

function showMessage(message) {
    const messageContainer = createMessageElement(message);
    messagesContainer.appendChild(messageContainer);

    animateMessages();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        index++;
        displayMessage();
    }, 12000);
}

function showMessageWithTyping(message) {
    const messageContainer = createMessageElement(message);
    messagesContainer.appendChild(messageContainer);

    animateMessages();

    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        simulateTyping(() => {
            setTimeout(() => {
                index++;
                displayMessage();
            }, 2000);
        });
    }, 2000);
}

function animateMessages() {
    const messageContainers = document.querySelectorAll('.message-container');
    messageContainers.forEach((container, index) => {
        container.style.transition = 'transform 0.5s';
        container.style.transform = `translateY(0)`;
    });
}

function simulateTyping(callback) {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = 'typing...';

    messagesContainer.appendChild(typingIndicator);

    setTimeout(() => {
        typingIndicator.remove();
        callback();
    }, 10000);
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const avatar = document.createElement('div');
    avatar.classList.add('avatar', message.speaker === 'phoenix' ? 'sent' : 'received');
    avatar.id = message.speaker + '-avatar';

    const textContainer = document.createElement('div');
    textContainer.classList.add('message-text');

    const nameElement = document.createElement('div');
    nameElement.classList.add('message-name');
    nameElement.textContent = message.speaker === 'phoenix' ? 'Phoenix' : 'Dean';

    const messageTextElement = document.createElement('div');
    messageTextElement.innerHTML = message.text; // Use innerHTML to render HTML tags

    const timestampElement = document.createElement('div');
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    timestampElement.classList.add('message-timestamp');
    timestampElement.textContent = timestamp;

    textContainer.appendChild(nameElement);
    textContainer.appendChild(messageTextElement);
    textContainer.appendChild(timestampElement);

    messageElement.appendChild(avatar);
    messageElement.appendChild(textContainer);

    return messageElement;
}

function redirectToHtmlFile() {
    window.location.href = 'ending.html';
}


if (index === messages.length - 1 && messages[index].speaker === 'system') {
    const redirectLink = document.getElementById('redirectLink');
    if (redirectLink) {
        redirectLink.addEventListener('click', redirectToHtmlFile);
    }
}

displayMessage();
