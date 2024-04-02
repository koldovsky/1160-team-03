const buttons = document.querySelectorAll('button');

function count() {
  let counter = 0;
  return function() {
    counter += 1;
    if (counter === 10) {
      alert('Вже 10');
    }
    if (counter === 20) {
      alert('Давай до 50?');
    }
    if (counter === 50) {
      alert('Все, не продовжуй');
    }
    if (counter === 55) {
      alert('Я знав що не послухаєш, затицяй до 100!');
    }
    if (counter === 100) {
      alert('От це тобі дійсно немає чим зайнятись! Ок, ти виграв, тепер підпишись на новини і отримаєш їх як подарунок! ...або ні, в якості наголоди, можеш продовжувати клацати.');
    }
    return counter;
  };
}

buttons.forEach(button => {
  const counter = count();
  button.addEventListener('click', function() {
    this.textContent = counter();
  });
});
