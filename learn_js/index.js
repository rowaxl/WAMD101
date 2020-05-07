const title = document.getElementById('title');

title.innerHTML = "Hello World!";

let count = 0;
const counter = document.getElementById('counter');
const add_button = document.getElementById('add');
const sub_button = document.getElementById('sub');
const reset_button = document.getElementById('reset');

counter.innerHTML = count;

add_button.addEventListener('click', () => {
  count++;
  counter.innerHTML = count;
})

sub_button.addEventListener('click', () => {
  count--;
  counter.innerHTML = count;
})

reset_button.addEventListener('click', () => {
  count = 0;
  counter.innerHTML = count;
})