document.getElementById('sendButton').addEventListener('click', () => {
    const message = document.getElementById('messageInput').value;
  
    fetch('/api/message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message }),
    })
    .then(response => response.json())
    .then(data => {
      document.getElementById('response').innerText = data.response;
    })
    .catch(error => console.error('Error:', error));
  });
  