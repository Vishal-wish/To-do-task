const user_input = document.querySelector("#user_input");
const add_btn = document.querySelector("#add_btn");
const order_list = document.querySelector("#order_list");
const buttons = document.querySelector("#buttons");

window.onload=()=>{
  get_wishlist();
}

let isduplicate=false;
add_btn.addEventListener("click", () => {
  isduplicate=Array.from(order_list.children).some(
    (li)=>li.firstChild.textContent===user_input.value.trim()
  );
  if (user_input.value !== "" && !isduplicate) {
    let list = document.createElement("li");
    list.innerText = user_input.value.trim();
    order_list.appendChild(list);
    user_input.value = "";

    let complete_btn = document.createElement("button");
    complete_btn.innerText = "complete";
    buttons.appendChild(complete_btn);

    complete_btn.addEventListener("click", () => {
      list.style.textDecoration = "line-through";
      complete_btn.style.backgroundColor = "green";
    });
    complete_btn.addEventListener("dblclick", () => {
      list.style.textDecoration = "none";
      complete_btn.style.backgroundColor = "#F0F0F0";
    });

    let remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    buttons.appendChild(remove_btn);

    remove_btn.addEventListener("click", () => {
      order_list.removeChild(list);
      buttons.removeChild(remove_btn);
      buttons.removeChild(complete_btn);
    });
    store_wishlist();
  } else if (isduplicate) {
    alert("This is already done");
    user_input.value="";
  }
});

let store_wishlist = () => {
  let list = Array.from(order_list.children).map(
    (li)=>li.firstChild.textContent
  )
  localStorage.setItem("wish_list", JSON.stringify(list));
};

let get_wishlist = () => {
  let get_list = JSON.parse(localStorage.getItem("wish_list")||[]);
  get_list.forEach(element => {
    let list=document.createElement("li");
    list.innerText=element;

    order_list.appendChild(list);
    let complete_btn = document.createElement("button");
    complete_btn.innerText = "complete";
    buttons.appendChild(complete_btn);

    complete_btn.addEventListener("click", () => {
      list.style.textDecoration = "line-through";
      complete_btn.style.backgroundColor = "green";
    });
    complete_btn.addEventListener("dblclick", () => {
      list.style.textDecoration = "none";
      complete_btn.style.backgroundColor = "#F0F0F0";
    });

    let remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    buttons.appendChild(remove_btn);

    remove_btn.addEventListener("click", () => {
      order_list.removeChild(list);
      buttons.removeChild(remove_btn);
      buttons.removeChild(complete_btn);
    });
  });
};
