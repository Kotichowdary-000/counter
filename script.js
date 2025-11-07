const counters = document.getElementById('counter');
const increment = document.getElementById('inc');
const decrement = document.getElementById('dec');
const reset = document.getElementById('reset');

let count = 0;

function updateUI() {
  counters.textContent = count;

  if (count > 0) {
    counters.style.backgroundColor = 'rgb(18, 160, 18)';
  } else if (count < 0) {
    counters.style.backgroundColor = 'rgb(200, 30, 30)';
  } else {
    counters.style.backgroundColor = '#1f6feb';
  }
}

updateUI();

increment.addEventListener('click', () => {
  count++;
  updateUI();
});

decrement.addEventListener('click', () => {
  count--;
  updateUI();
});

reset.addEventListener('click', () => {
  count = 0;
  updateUI();
});
