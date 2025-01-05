const user_input = document.querySelector("#user_input");
const add_btn = document.querySelector("#add_btn");
const order_list = document.querySelector("#order_list");
const buttons = document.querySelector("#buttons");

add_btn.addEventListener("click", () => {
  if (user_input.value.trim() !== "") {
    listcreate(user_input.value.trim());
    user_input.value = "";
  }
});

const listcreate = (list_item) => {
  let list = document.createElement("li");
  list.textContent = list_item;
  order_list.appendChild(list);

  const delete_btn = document.createElement("button");
  delete_btn.textContent = "remove";
  buttons.appendChild(delete_btn);
  delete_btn.addEventListener("click", () => {
    order_list.removeChild(list);
    buttons.removeChild(delete_btn);
  });
};
