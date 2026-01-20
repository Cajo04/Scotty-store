const phone = "263788114185";

const defaultProducts = [
  {
    name: "WhatsApp Bot",
    desc: "Auto reply, group control, media downloader",
    price: "$2",
    image: "images/whatsapp.png"
  },
  {
    name: "Telegram Bot",
    desc: "Admin tools, auto posting bot",
    price: "$1",
    image: "images/telegram.png"
  }
];

const products = JSON.parse(localStorage.getItem("products")) || defaultProducts;
const list = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.image}">
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="price">${p.price}</div>
    <button onclick="order('${p.name} - ${p.price}')">
      Buy on WhatsApp
    </button>
  `;
  list.appendChild(card);
});

function order(product) {
  const msg = `Hello ScottySaaS, I want to buy: ${product}`;
  window.open(
    `https://wa.me/${phone}?text=${encodeURIComponent(msg)}`,
    "_blank"
  );
}