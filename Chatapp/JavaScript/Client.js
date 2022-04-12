const socket = io('http://localhost:8000');  
 const form = document.getElementById("sending-system");
 const messageInput = document.getElementById("input");
 const messagecontainer =  document.querySelector(".container");

var audio = new Audio('Sound/Ting.mp3');

 const append = (message,position)=>{
   const messageElement = document.createElement('div');
   messageElement.innerText = message;
   messageElement.classList.add(position);
   messagecontainer.append(messageElement);
   audio.play();
 }
 const Name = prompt("Enter your name to join");
 socket.emit('new-user-joined',Name);

 socket.on('user-joined',Name =>{
 append(`${Name} joined the chat`,'messageleft');
 });
 
form.addEventListener('submit',(e)=>
{
      e.preventDefault(); 
      const message = messageInput.value;
      append(message,'messageright');
      socket.emit('send',message); 
      messageInput.value = '';
 });
 socket.on('Receive',data =>{
    append(data.message,'messageleft')
 });

 