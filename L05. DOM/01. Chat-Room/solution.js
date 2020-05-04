function solve() {
   const button = document.querySelector('#send');
   const inputArea = document.querySelector('#chat_input');
   const messagesArea = document.querySelector('#chat_messages');

   button.addEventListener('click', sendMessage);

   function sendMessage() {
      const div = document.createElement('div');
      div.setAttribute('class', 'message my-message');
      div.textContent = inputArea.value;
      messagesArea.appendChild(div);
      inputArea.value = '';
   }
}