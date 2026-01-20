const ADMIN_PASSWORD = "scotty123";

if (localStorage.getItem("adminAuth") === "true") {
  showAdmin();
}

function login() {
  const pass = document.getElementById("password").value;
  if (pass === ADMIN_PASSWORD) {
    localStorage.setItem("adminAuth", "true");
    showAdmin();
  } else {
    alert("Wrong password!");
  }
}

function showAdmin() {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("adminPanel").style.display = "grid";
}

function logout() {
  localStorage.removeItem("adminAuth");
  location.reload();
}

function addProduct() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  products.push({
    name: name.value,
    desc: desc.value,
    price: price.value,
    image: image.value
  });

  localStorage.setItem("products", JSON.stringify(products));
  alert("Product added successfully!");
}