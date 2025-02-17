const user_input = document.querySelector("#user_input");
const add_btn = document.querySelector("#add_btn");
const order_list = document.querySelector("#order_list");
const buttons = document.querySelector("#buttons");
const remove_btn = document.querySelector(".remove_all");
window.onload = () => {
  get_wishlist(); 
};

let isduplicate = false;
add_btn.addEventListener("click", () => {
  isduplicate = Array.from(order_list.children).some(
    (li) => li.firstChild.textContent === user_input.value.trim()
  );
  if (user_input.value !== "" && !isduplicate) {
    let list = document.createElement("li");
    list.innerText = user_input.value.trim();
    order_list.appendChild(list);
    user_input.value = "";

    let complete_btn = document.createElement("button");
    complete_btn.className = "complete_button";
    complete_btn.innerText = "complete";
    buttons.appendChild(complete_btn);

    complete_btn.addEventListener("click", () => {
      complete_btn.innerHTML="done"
      store_wishlist();
    });
    complete_btn.addEventListener("dblclick", () => {
      complete_btn.innerHTML="complete"
      store_wishlist();
    });

    let time = new Date();
    let day = time.getDate();
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthNames[time.getMonth()];
    let time_value = `${day}-${month}`; // Proper string formatting

    let time_button = document.createElement("button");

    time_button.innerText = time_value;
    buttons.appendChild(time_button);

    let remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    buttons.appendChild(remove_btn);

    remove_btn.addEventListener("click", () => {
      order_list.removeChild(list);
      buttons.removeChild(remove_btn);
      buttons.removeChild(complete_btn);
      buttons.removeChild(remove_btn);
      buttons.removeChild(time_button);
      store_wishlist();
    });

    store_wishlist();
  } else if (isduplicate) {
    alert("This is already done");
    user_input.value = "";
  }
});

// =========================list-store=====================
let store_wishlist = () => {
  let list = Array.from(order_list.children).map(
    (li) => li.firstChild.textContent
  );
  localStorage.setItem("wish_list", JSON.stringify(list));
};

// =========================list-store=====================
let get_wishlist = () => {
  let get_list = JSON.parse(localStorage.getItem("wish_list") || []);
  get_list.forEach((element) => {
    let list = document.createElement("li");
    list.innerText = element;

    order_list.appendChild(list);
    let complete_btn = document.createElement("button");
    complete_btn.innerText = "complete";
    buttons.appendChild(complete_btn);

    complete_btn.addEventListener("click", () => {
      complete_btn.innerText="done"
      store_wishlist();
    });
    complete_btn.addEventListener("dblclick", () => {
      complete_btn.innerText="Complete"
      store_wishlist();
    });
    let time = new Date();
    let day = time.getDate();
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let month = monthNames[time.getMonth()];
    let time_value = `${day}-${month}`; // Proper string formatting

    let time_button = document.createElement("button");

    time_button.innerText = time_value;
    buttons.appendChild(time_button);

    let remove_btn = document.createElement("button");
    remove_btn.innerText = "remove";
    buttons.appendChild(remove_btn);

    remove_btn.addEventListener("click", () => {
      order_list.removeChild(list);
      buttons.removeChild(remove_btn);
      buttons.removeChild(complete_btn);
      buttons.removeChild(time_button);
      store_wishlist();
    });
  });
};
