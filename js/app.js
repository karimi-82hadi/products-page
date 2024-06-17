const searchInput = document.getElementById("search-input");
const priceInput = document.getElementById("price-input");
const filtersBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product");

const searchHandler = () => {
  priceInput.value = "";
  const searchInputValue = searchInput.value.toLowerCase().trim();
  products.forEach((product) => {
    const productName = product
      .querySelector(".product-name")
      .textContent.toLowerCase();
    if (productName.includes(searchInputValue)) {
      product.classList.remove("d-none");
    } else {
      product.classList.add("d-none");
    }
  });
};

const priceHandler = () => {
  searchInput.value = "";
  const priceInputValue = +priceInput.value;
  products.forEach((product) => {
    const productPrice = +product
      .querySelector(".product-price")
      .textContent.split(" ")[1];
    if (!priceInputValue) {
      product.classList.remove("d-none");
    } else {
      priceInputValue >= productPrice
        ? product.classList.remove("d-none")
        : product.classList.add("d-none");
    }
  });
};

const filterHanler = (filterBtn) => {
  searchInput.value = "";
  priceInput.value = "";
  const btnCategory = filterBtn.target.dataset.filter;
  products.forEach((product) => {
    const productCategory = product.dataset.category;
    if (btnCategory === "all") {
      product.classList.remove("d-none");
    } else {
      btnCategory === productCategory
        ? product.classList.remove("d-none")
        : product.classList.add("d-none");
    }
  });
  changeClass(btnCategory);
};

const changeClass = (category) => {
  filtersBtns.forEach((filterBtn) => {
    const btnCategory = filterBtn.dataset.filter;
    btnCategory === category
      ? filterBtn.classList.add("active")
      : filterBtn.classList.remove("active");
  });
};

searchInput.addEventListener("keyup", searchHandler);
priceInput.addEventListener("keyup", priceHandler);
filtersBtns.forEach((filterBtn) => {
  filterBtn.addEventListener("click", filterHanler);
  filterBtn.setAttribute("data-filter", filterBtn.textContent.toLowerCase());
});
