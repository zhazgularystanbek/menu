const imageUrl = document.querySelector(".image-url");
const foodName = document.querySelector(".food-name");
const price = document.querySelector(".input-price");
const btn = document.querySelector(".create-btn");
// const card = document.querySelector(".card");
let id = 0;
btn.addEventListener("click", () => {
  addData();
});
function addData() {
  // ++id++;
  let obj = {
    id: ++id,
    name: foodName.value,
    price: price.value,
    url: imageUrl.value,
    // date: new Date(),
  };
  imageUrl.value = "";
  price.value = "";
  foodName.value = "";
  let data = JSON.parse(localStorage.getItem("product")) || [];
  data.push(obj);
  localStorage.setItem("product", JSON.stringify(data));
}
