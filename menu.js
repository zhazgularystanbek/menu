const card = document.querySelector(".card");

function getData() {
  let newData = JSON.parse(localStorage.getItem("product")) || [];
  newData.forEach((element) => {
    let a = document.createElement("div");
    card.append(a);
    a.setAttribute("class", "card-item");
    a.innerHTML = `
        <img src="${element.url}" alt="" />
        <h2 class="card-title">${element.name}</h2>
        <div class="price-block">
        <h3 class="price">${element.price}$</h3>
        <button class="price-btn" id=${element.id}>to order</button>
        </div>
    `;
    function orderProduct() {
      let date = new Date();
      let ob = {
        id: element.id,
        name: element.name,
        url: element.url,
        h: date.getHours(),
        m: date.getMinutes(),
      };
      let data = JSON.parse(localStorage.getItem("order")) || [];
      data.push(ob);
      localStorage.setItem("order", JSON.stringify(data));
      // let orderList = document.createElement("div");
      // order.append(orderList);
      // let time = new Date();
      // orderList.setAttribute("class", "order-list");
      // orderList.innerHTML = `
      //   <img src="${element.url}" alt="" class="order-img">
      //   <div class="order-txt">
      //       <p class="order-title">${element.name}</p>
      //       <p class="order-time">${time.getHours}:${time.getMinutes}</p>
      //   </div>
      //   <div class="order-info">
      //       <button class="del-order">delete order</button>
      //       <div class="count">
      //           <p class="minus count-bg">-</p>
      //           <p class="quantity">${num}<span class="x"> x</span></p>
      //           <p class="plus count-bg">+</p>
      //       </div>
      //   </div>
      // `;
    }
    document.querySelector(".price-btn").addEventListener("click", () => {
      orderProduct();
    });
  });
}
getData();
