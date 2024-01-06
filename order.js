const priceBtn = document.querySelectorAll(".price-btn");
const order = document.querySelector(".order");
let num = 0;
function getOrder() {
  let newData = JSON.parse(localStorage.getItem("order")) || [];
  newData.forEach((element) => {
    let orderList = document.createElement("div");
    order.append(orderList);
    orderList.setAttribute("class", "order-list");
    orderList.innerHTML = `
      <img src="${element.url}" alt="" class="order-img">
      <div class="order-txt">
          <p class="order-title">${element.name}</p>
          <p class="order-time">${element.h}:${element.m}</p>
      </div>
      <div class="order-info" id="${element.id}">
          <button class="del-order">delete order</button>
          <div class="count">
              <p class="minus count-bg">-</p>
              <p class="quantity">${num}<span class="x"> x</span></p>
              <p class="plus count-bg">+</p>
          </div>
      </div>
     `;
    plus();
  });
}
getOrder();
document.querySelectorAll(".del-order").forEach((el) => {
  el.addEventListener("click", (e) => {
    el.parentElement.parentElement.remove();
  });
});

function plus() {
  const q = document.querySelector(".quantity");
  const plus = document.querySelector(".plus");
  plus.addEventListener("click", (e) => {
    num++;
    let a = e.target.closest("span");
  });
}
