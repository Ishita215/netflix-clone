
const data = {
  popular: [
    { title: "The Royals", img: "royals.jpg"},
    { title: "The Diplomat", img: "the diplomat.jpeg"},
    { title: "Chavva", img: "chavva.jpeg"},
    { title: "Good bad ugly", img: "good bad.jpeg"},
    { title: "The Court", img: "cour.jpeg"},
    { title: "Jewl", img: "jwel.jpeg"},
    { title: "Deva", img: "deva.jpeg"},
    { title: "Pushpa 2", img: "pushpa.jpeg"},
    { title: "Odela 2", img: "odela 2.jpeg"},
    { title: "Dragon", img: "dragon.jpeg"}
  ]
};

function renderRow(containerId, items) {
  const row = document.getElementById(containerId);
  items.forEach(item => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${item.img}" alt="${item.title}" />
    `;
    row.appendChild(card);
  });
}
document.addEventListener("DOMContentLoaded", () => {
  renderRow("popular-row", data.popular);
  renderRow("trending-row", data.trending);
});

const reasons = [
  {
    title: 'Enjoy on your TV',
    description: 'Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.',
    icon: 'icons/tv.svg'
  },
  {
    title: 'Download your shows to watch offline',
    description: 'Save your favourites easily and always have something to watch.',
    icon: 'icons/download.svg'
  },
  {
    title: 'Watch everywhere',
    description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop and TV.',
    icon: 'icons/watch.svg'
  },
  {
    title: 'Create profiles for kids',
    description: 'Send kids on adventures with their favourite characters in a space made just for them — free with your membership.',
    icon: 'icons/kids.svg'
  }
];

function renderJoinCards(containerSelector, cardsData) {
  const container = document.querySelector(containerSelector);
  if (!container) {
    console.error('Container not found:', containerSelector);
    return;
  }

  const heading = document.createElement('h2');
  heading.textContent = 'More reasons to join';
  heading.classList.add('join-heading');
  container.appendChild(heading);

  const cardsWrapper = document.createElement('div');
  cardsWrapper.classList.add('join-cards');
  container.appendChild(cardsWrapper);

  cardsData.forEach(item => {
    const card = document.createElement('div');
    card.classList.add('join-card');

    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    card.appendChild(h3);

    const p = document.createElement('p');
    p.textContent = item.description;
    card.appendChild(p);

    const img = document.createElement('img');
    img.src = item.icon;
    img.alt = '';
    img.classList.add('join-card-icon');
    card.appendChild(img);

    cardsWrapper.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderJoinCards('#reasons-container', reasons);
});

document.querySelectorAll('.row').forEach(row => {
  const container = row.querySelector('.row-cards');
  const prevBtn   = row.querySelector('.nav.prev');
  const nextBtn   = row.querySelector('.nav.next');

  const scrollAmount = container.clientWidth;

  nextBtn.addEventListener('click', () => {
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  prevBtn.addEventListener('click', () => {
    container.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });
});
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    if (isOpen) {
      item.scrollIntoView({ block: 'start', behavior: 'smooth' });
    }
  });
});

