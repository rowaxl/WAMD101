const updateMessage = () => {
  console.log('here')
  const msg = 'Sign up to receive our newsletter for 10% off!';
  const element = document.getElementById('message');

  if (element) {
    element.textContent = msg;
  }
}

const button = document.getElementById('update');
button.addEventListener('click', updateMessage);