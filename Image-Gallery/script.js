const images = [
  { src: 'https://images.unsplash.com/photo-1506452305024-9d3f02d1c9b5?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Green pine forest canopy' },
  { src: 'https://images.unsplash.com/photo-1487621167305-5d248087c724?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Silhouette of trees in fog' },
  { src: 'https://images.unsplash.com/photo-1544039161-b0c20826c6f6?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Trees lining a quiet pathway' },
  { src: 'https://images.unsplash.com/photo-1502252430442-aac78f397426?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Aerial view of misty pines' },
  { src: 'https://images.unsplash.com/photo-1418065460487-3e41a6c84dc5?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Palm trees wrapped in fog' },
  { src: 'https://images.unsplash.com/photo-1476362555312-ab9e108a0b7e?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Silhouette of pine trees' },
  { src: 'https://images.unsplash.com/photo-1486707471592-8e7eb7e36f78?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Gray forest blanketed in fog' },
  { src: 'https://images.unsplash.com/photo-1524959725226-f4deb958e979?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Pine trees veiled in mist' },
  { src: 'https://images.unsplash.com/photo-1535025075092-5a1cf795130b?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Trees wrapped in soft fog' },
  { src: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Sunrays breaking through forest' },
  { src: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Tall pine trees in daylight' },
  { src: 'https://images.unsplash.com/photo-1444724334165-e7050f2229a1?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Forest covered in morning fog' },
  { src: 'https://images.unsplash.com/photo-1521567602683-a6760a3a2cc3?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Bird\'s-eye view of foggy trees' },
  { src: 'https://images.unsplash.com/photo-1465326117523-6450112b60b2?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Fog settling over the treetops' },
  { src: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?w=600&h=600&fit=crop&q=80&auto=format', category: 'nature', caption: 'Aerial view of smoky forest' },
  { src: 'https://images.unsplash.com/photo-1574848296471-28f79a036f79?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Modern high-rise building' },
  { src: 'https://images.unsplash.com/photo-1519662978799-2f05096d3636?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'High-angle architectural view' },
  { src: 'https://images.unsplash.com/photo-1615406020658-6c4b805f1f30?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Sunlit concrete building' },
  { src: 'https://images.unsplash.com/photo-1614595737683-1740e41bfaac?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'White concrete building facade' },
  { src: 'https://images.unsplash.com/photo-1543071293-d91175a68672?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Contemporary house design' },
  { src: 'https://images.unsplash.com/photo-1521713362244-1b5e5d150b29?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Worm\'s-eye view of a tower' },
  { src: 'https://images.unsplash.com/photo-1554793000-245d3a3c2a51?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Bold brown building structure' },
  { src: 'https://images.unsplash.com/photo-1559458049-9d62fceeb52b?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Low-angle building perspective' },
  { src: 'https://images.unsplash.com/photo-1614595737476-42487331b8a1?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Concrete building under blue sky' },
  { src: 'https://images.unsplash.com/photo-1619442483119-7d84bd743f69?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Low-angle concrete architecture' },
  { src: 'https://images.unsplash.com/photo-1578803203370-8b000b589edd?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Minimalist white concrete facade' },
  { src: 'https://images.unsplash.com/photo-1461695008884-244cb4543d74?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Mirrored glass building' },
  { src: 'https://images.unsplash.com/photo-1518436127045-3367819540bf?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Textured concrete structure' },
  { src: 'https://images.unsplash.com/photo-1546349851-64285be8e9fa?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Geometric striped facade' },
  { src: 'https://images.unsplash.com/photo-1531591022136-eb8b0da1e6d0?w=600&h=600&fit=crop&q=80&auto=format', category: 'architecture', caption: 'Abstract architectural lines' },
  { src: 'https://images.unsplash.com/photo-1578894381163-e72c17f2d45f?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Ready to explore - camera and passport' },
  { src: 'https://images.unsplash.com/photo-1614088459293-5669fadc3448?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Lakeside house among green trees' },
  { src: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Whitewashed houses on a hillside' },
  { src: 'https://images.unsplash.com/photo-1554366347-897a5113f6ab?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'A day at the beach' },
  { src: 'https://images.unsplash.com/photo-1682685797208-c741d58c2eff?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Golden hour inside a cave' },
  { src: 'https://images.unsplash.com/photo-1525849306000-cc26ceb5c1d7?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Aerial view of turquoise waters' },
  { src: 'https://images.unsplash.com/photo-1682685797857-97de838c192e?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Standing at a cave entrance' },
  { src: 'https://images.unsplash.com/photo-1529260830199-42c24126f198?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Historic dome by the bridge' },
  { src: 'https://images.unsplash.com/photo-1606922183036-62e19495eaab?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Walking along the shoreline' },
  { src: 'https://images.unsplash.com/photo-1524726240783-939bfdd633e2?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Wanderer by the waterfalls' },
  { src: 'https://images.unsplash.com/photo-1702116282947-bff5a947ac27?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Cathedral clock tower at night' },
  { src: 'https://images.unsplash.com/photo-1553355202-f869c36581ca?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Aerial view of the city' },
  { src: 'https://images.unsplash.com/photo-1682686580036-b5e25932ce9a?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Desert dunes at sunset' },
  { src: 'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Wildlife roaming the desert' },
  { src: 'https://images.unsplash.com/photo-1584467541268-b040f83be3fd?w=600&h=600&fit=crop&q=80&auto=format', category: 'travel', caption: 'Coastal village on the cliffs' },
  { src: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Fox resting in the snow' },
  { src: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Deer standing in a green field' },
  { src: 'https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Sea turtle swimming underwater' },
  { src: 'https://images.unsplash.com/photo-1564166174574-a9666f590437?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Wolf with an open mouth' },
  { src: 'https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Orange fox in the wild' },
  { src: 'https://images.unsplash.com/photo-1504006833117-8886a355efbf?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Squirrel against a dark backdrop' },
  { src: 'https://images.unsplash.com/photo-1544985361-b420d7a77043?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Tiger in its natural habitat' },
  { src: 'https://images.unsplash.com/photo-1516934024742-b461fba47600?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Fox caught in golden light' },
  { src: 'https://images.unsplash.com/photo-1544979590-37e9b47eb705?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Leopard resting quietly' },
  { src: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Colorful macaw close-up' },
  { src: 'https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Elephant walking at daytime' },
  { src: 'https://images.unsplash.com/photo-1549854233-ca0baec6fa74?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Giraffe grazing on green grass' },
  { src: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Leopard perched on a rock' },
  { src: 'https://images.unsplash.com/photo-1519664824562-b4bc73f9795a?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Deer under a cloudy sky' },
  { src: 'https://images.unsplash.com/photo-1476922027627-aa7293e3aaa8?w=600&h=600&fit=crop&q=80&auto=format', category: 'animals', caption: 'Deer resting in the grass' },
];

const gallery = document.getElementById('gallery');
const filterBar = document.getElementById('filters');
const lightbox = document.getElementById('lightbox');
const lbImage = document.getElementById('lbImage');
const lbCaption = document.getElementById('lbCaption');
const lbClose = document.getElementById('lbClose');
const lbPrev = document.getElementById('lbPrev');
const lbNext = document.getElementById('lbNext');

let currentFilter = 'all';
let currentIndex = 0;

function getVisibleImages() {
  return currentFilter === 'all'
    ? images
    : images.filter(img => img.category === currentFilter);
}

function renderGallery() {
  gallery.innerHTML = '';
  const visible = getVisibleImages();

  visible.forEach((img, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.style.animationDelay = (index * 0.05) + 's';

    card.innerHTML = `
      <img src="${img.src}" alt="${img.caption}" loading="lazy">
      <div class="overlay"><span>${img.caption}</span></div>
    `;

    card.addEventListener('click', () => openLightbox(index));
    gallery.appendChild(card);
  });
}

function openLightbox(index) {
  currentIndex = index;
  const visible = getVisibleImages();
  const item = visible[currentIndex];
  lbImage.src = item.src;
  lbImage.alt = item.caption;
  lbCaption.textContent = item.caption;
  lightbox.classList.add('open');
}

function closeLightbox() {
  lightbox.classList.remove('open');
}

function showNext() {
  const visible = getVisibleImages();
  currentIndex = (currentIndex + 1) % visible.length;
  openLightbox(currentIndex);
}

function showPrev() {
  const visible = getVisibleImages();
  currentIndex = (currentIndex - 1 + visible.length) % visible.length;
  openLightbox(currentIndex);
}

filterBar.addEventListener('click', (e) => {
  const btn = e.target.closest('.filter-btn');
  if (!btn) return;

  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  currentFilter = btn.dataset.filter;
  renderGallery();
});

lbClose.addEventListener('click', closeLightbox);
lbNext.addEventListener('click', showNext);
lbPrev.addEventListener('click', showPrev);

lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', (e) => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  else if (e.key === 'ArrowRight') showNext();
  else if (e.key === 'ArrowLeft') showPrev();
});

renderGallery();
