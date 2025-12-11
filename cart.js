function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
  showCuteMessage(`${name} をカートに追加したよ ✩`);
}

function showCuteMessage(text) {
  const msg = document.createElement("div");
  msg.className = "cute-popup";
  msg.textContent = text;
  document.body.appendChild(msg);

  setTimeout(() => {
    msg.classList.add("hide");
  }, 1500);

  setTimeout(() => {
    msg.remove();
  }, 2000);
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();

  createFlyingStar(); // ← 星を飛ばす
  showCuteMessage(`${name} をカートに追加したよ ✩`);
}

function createFlyingStar() {
  const star = document.createElement("div");
  star.className = "flying-star";
  star.textContent = "✩";

  // ランダムな位置から飛ばす
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * window.innerHeight + "px";

  document.body.appendChild(star);

  // アニメーション終了後に削除
  setTimeout(() => {
    star.remove();
  }, 1500);
}
