let products = async function human() {
  let productFetch = await fetch("http://localhost:3001/phones");
  let productGet = await productFetch.json();

  function productInformation(mobileInfo) {
    let cardFather = document.querySelector(".all-card");
    mobileInfo.forEach((information) => {
      let createDiv = document.createElement("div");
      createDiv.innerHTML = `
             <div class="card">
                <img src="${information.image}" alt="">
                <div class="product-items">
                    <p class="product-name">${information.title}</p>
                    <p class="product-info">${information.information}</p>
                    <p class="product-price">${information.price}</p>
                </div>
            </div>
            `;

      cardFather.append(createDiv);
    });
  }

  productInformation(productGet);
};
products();

let submitBtn = document.querySelector(".create-product");

submitBtn.addEventListener("click", () => {
  let imageInput = document.getElementById("product-image").value;
  let productNameInput = document.getElementById("product-name").value;
  let productInfoInput = document.getElementById("product-information").value;
  let productPriceInput = document.getElementById("product-price").value;

  if (
    !imageInput &&
    !productNameInput &&
    !productInfoInput &&
    !productPriceInput
  ) {
    alert("Mahsulotni saytga joylash uchun formni toldiring");
    return;
  } else {
    alert("Mahsulotingiz muvaffiqiyatli saytga joylandi");
  }

  try {
    let postHumans = async function posthuman() {
      fetch("http://localhost:3001/phones", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image: imageInput,
          title: productNameInput,
          information: productInfoInput,
          price: productPriceInput,
        }),
      });
    };

    postHumans();
  } catch (error) {
    alert("Mahsulotingizni saytga joylashda shu muammoga duch keldik" + error);
  }
});
