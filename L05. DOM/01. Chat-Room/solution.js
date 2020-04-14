function solve() {
   let sendButton = document.getElementById('send');
   let myMessage = document.getElementById('chat_input');
   let messageBox = document.getElementById('chat_messages');

   sendButton.addEventListener('click', () => {
      let newElement = document.createElement('div');
      newElement.innerHTML = myMessage.value;
      newElement.classList.add('message', 'my-message');

      messageBox.appendChild(newElement);
      myMessage.value = '';
   })
}