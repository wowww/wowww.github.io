window.addEventListener('load', e => { 
  const spark = document.getElementById('spark');
  const coin = document.getElementById('coin');
  const hideCoin = document.getElementById('hide-coin');

  spark.classList.add('spark-show');
  coin.classList.add('coin-view');
  hideCoin.classList.add('coin-show');
})

window.addEventListener('scroll', e => {
  const value = window.scrollY;

  let coin01 = document.getElementById("coin01");
  let coin02 = document.getElementById("coin02");
  let coin03 = document.getElementById("coin03");
  let coin04 = document.getElementById("coin04");
  let coin05 = document.getElementById("coin05");
  let coin06 = document.getElementById("coin06");

  coin01.style.top = value * -0.01 + '%';
  coin02.style.top = value * -0.015 + '%';
  coin03.style.top = value * -0.03 + '%';
  coin04.style.top = value * -0.015 + '%';
  coin05.style.top = value * -0.01 + '%';
  coin06.style.top = value * -0.03 + '%';
})


const shadow = document.querySelector('.bg');
const popupBtn = document.querySelector('.popup-button');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.close');

popupBtn.addEventListener('click', e => {
  modal.classList.add('bg');
  modal.classList.remove('hidden');
})

closeBtn.addEventListener('click', e => {
  modal.classList.remove('bg');
  modal.classList.add('hidden');
})

