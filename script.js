let counter = 1;
      const totalSlides = 3;

      setInterval(() => {
        document.getElementById("slide1-" + counter).checked = true;
        counter++;
        if (counter > totalSlides) {
          counter = 1;
        }
      }, 3000); // Change every 3 seconds

      let secondCounter = 1;
      const secondTotalSlides = 5;

      setInterval(() => {
        document.getElementById("slide2-" + secondCounter).checked = true;
        secondCounter++;
        if (secondCounter > secondTotalSlides) {
          secondCounter = 1;
        }
      }, 2000); // Change every 2 seconds


      let mobileCounter = 1;
      const mobileTotalSlides = 3;

      setInterval(() => {
        document.getElementById("slidem-" + mobileCounter).checked = true;
        mobileCounter++;
        if (mobileCounter > mobileTotalSlides) {
          mobileCounter = 1;
        }
      }, 2000); // Change every 2 seconds
     
      // function product() {
//   let products = document.getElementById("products");

//   const productHover = document.createElement("div"); //create the element
//   productHover.classList.add("product-hover"); //give it a className for styling

//   {
//     const singleProduct = document.createElement("div");
//     singleProduct.classList.add("single-product-hover"); // add a class for styling
//     // Title
//     const title = document.createElement("h3");
//     title.textContent = "Power";
//     const image = document.createElement("img");
//     image.src = "images/powerbank.webp"

//     const ul = document.createElement("ul");
//     ul.classList.add("hover-lists");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     const li4 = document.createElement("li");
//     const li5 = document.createElement("li");
//     const li6 = document.createElement("li");

//     const anchorTag1 = document.createElement("a");
//     const anchorTag2 = document.createElement("a");
//     const anchorTag3 = document.createElement("a");
//     const anchorTag4 = document.createElement("a");
//     const anchorTag5 = document.createElement("a");
//     const anchorTag6 = document.createElement("a");

//     //  ul.appendChild(anchorTag)
//     anchorTag1.appendChild(li1);
//     anchorTag2.appendChild(li2);
//     anchorTag3.appendChild(li3);
//     anchorTag4.appendChild(li4);
//     anchorTag5.appendChild(li5);
//     anchorTag6.appendChild(li6);

//     anchorTag1.href = "#";
//     anchorTag2.href = "#";
//     anchorTag3.href = "#";
//     anchorTag4.href = "#";
//     anchorTag5.href = "#";
//     anchorTag6.href = "#";

//     li1.textContent = "Power Banks";
//     li2.textContent = "iPhone Accessories";
//     li3.textContent = "Power Station";
//     li4.textContent = "Wall Chargers";
//     li5.textContent = "Car Chargers";
//     li6.textContent = "Cables";

//     ul.appendChild(anchorTag1);
//     ul.appendChild(anchorTag2);
//     ul.appendChild(anchorTag3);
//     ul.appendChild(anchorTag4);
//     ul.appendChild(anchorTag5);
//     ul.appendChild(anchorTag6);

//     singleProduct.appendChild(title);
//     singleProduct.appendChild(image)
//     singleProduct.appendChild(ul);
//     productHover.appendChild(singleProduct);
//   }

//   {
//     const singleProduct = document.createElement("div");
//     singleProduct.classList.add("single-product-hover"); // add a class for styling
//     // Title
//     const title = document.createElement("h3");
//     title.textContent = "Audio";
//     const image = document.createElement("img");
//     image.src = "images/buds.webp"

//     const ul = document.createElement("ul");
//     ul.classList.add("hover-lists");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     const li4 = document.createElement("li");
//     const li5 = document.createElement("li");
//     const li6 = document.createElement("li");

//     const anchorTag1 = document.createElement("a");
//     const anchorTag2 = document.createElement("a");
//     const anchorTag3 = document.createElement("a");
//     const anchorTag4 = document.createElement("a");
//     const anchorTag5 = document.createElement("a");
//     const anchorTag6 = document.createElement("a");

//     anchorTag1.appendChild(li1);
//     anchorTag2.appendChild(li2);
//     anchorTag3.appendChild(li3);
//     anchorTag4.appendChild(li4);
//     anchorTag5.appendChild(li5);
//     anchorTag6.appendChild(li6);

//     anchorTag1.href = "#";
//     anchorTag2.href = "#";
//     anchorTag3.href = "#";
//     anchorTag4.href = "#";
//     anchorTag5.href = "#";
//     anchorTag6.href = "#";

//     li1.textContent = "Wireless Stereo Earbuds";
//     li2.textContent = "Wireless Over-ear Headphones";
//     li3.textContent = "Wireless Neckband Headphones";
//     li4.textContent = "Open-Ear Headphones";
//     li5.textContent = "Wireless Speakers";
//     li6.textContent = "Wired Earphones";

//     ul.appendChild(anchorTag1);
//     ul.appendChild(anchorTag2);
//     ul.appendChild(anchorTag3);
//     ul.appendChild(anchorTag4);
//     ul.appendChild(anchorTag5);
//     ul.appendChild(anchorTag6);

//     singleProduct.appendChild(title);
//     singleProduct.appendChild(image)
//     singleProduct.appendChild(ul);
//     productHover.appendChild(singleProduct);
//   }
//   {
//     const singleProduct = document.createElement("div");
//     singleProduct.classList.add("single-product-hover"); // add a class for styling
//     // Title
//     const title = document.createElement("h3");
//     title.textContent = "Smart & Office";
//     const image = document.createElement("img");
//     image.src = "images/watch.webp"

//     const ul = document.createElement("ul");
//     ul.classList.add("hover-lists");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     const li4 = document.createElement("li");
//     const li5 = document.createElement("li");
//     const li6 = document.createElement("li");

//     const anchorTag1 = document.createElement("a");
//     const anchorTag2 = document.createElement("a");
//     const anchorTag3 = document.createElement("a");
//     const anchorTag4 = document.createElement("a");
//     const anchorTag5 = document.createElement("a");
//     const anchorTag6 = document.createElement("a");

//     anchorTag1.appendChild(li1);
//     anchorTag2.appendChild(li2);
//     anchorTag3.appendChild(li3);
//     anchorTag4.appendChild(li4);
//     anchorTag5.appendChild(li5);
//     anchorTag6.appendChild(li6);

//     anchorTag1.href = "#";
//     anchorTag2.href = "#";
//     anchorTag3.href = "#";
//     anchorTag4.href = "#";
//     anchorTag5.href = "#";
//     anchorTag6.href = "#";

//     li1.textContent = "Smart Watches";
//     li2.textContent = "Smart Control";
//     li3.textContent = "Mouse & Keyboards";
//     li4.textContent = "Camera Accessories";
//     li5.textContent = "Backpacks";
//     li6.textContent = "";

//     ul.appendChild(anchorTag1);
//     ul.appendChild(anchorTag2);
//     ul.appendChild(anchorTag3);
//     ul.appendChild(anchorTag4);
//     ul.appendChild(anchorTag5);
//     ul.appendChild(anchorTag6);

//     singleProduct.appendChild(title);
//     singleProduct.appendChild(image)
//     singleProduct.appendChild(ul);
//     productHover.appendChild(singleProduct);
//   }
//   {
//     const singleProduct = document.createElement("div");
//     singleProduct.classList.add("single-product-hover"); // add a class for styling
//     // Title
//     const title = document.createElement("h3");
//     title.textContent = "Personal Care";
//     const image = document.createElement("img");
//     image.src = "images/shaver.webp"

//     const ul = document.createElement("ul");
//     ul.classList.add("hover-lists");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     const li4 = document.createElement("li");
//     const li5 = document.createElement("li");
//     const li6 = document.createElement("li");

//     const anchorTag1 = document.createElement("a");
//     const anchorTag2 = document.createElement("a");
//     const anchorTag3 = document.createElement("a");
//     const anchorTag4 = document.createElement("a");
//     const anchorTag5 = document.createElement("a");
//     const anchorTag6 = document.createElement("a");

//     anchorTag1.appendChild(li1);
//     anchorTag2.appendChild(li2);
//     anchorTag3.appendChild(li3);
//     anchorTag4.appendChild(li4);
//     anchorTag5.appendChild(li5);
//     anchorTag6.appendChild(li6);

//     anchorTag1.href = "#";
//     anchorTag2.href = "#";
//     anchorTag3.href = "#";
//     anchorTag4.href = "#";
//     anchorTag5.href = "#";
//     anchorTag6.href = "";

//     li1.textContent = "Grooming Series";
//     li2.textContent = "Oral Care";
//     li3.textContent = "Mirrors";
//     li4.textContent = "Hair Dryers";
//     li5.textContent = "Hair Styling Tools";
//     li6.textContent = "";

//     ul.appendChild(anchorTag1);
//     ul.appendChild(anchorTag2);
//     ul.appendChild(anchorTag3);
//     ul.appendChild(anchorTag4);
//     ul.appendChild(anchorTag5);
//     ul.appendChild(anchorTag6);

//     singleProduct.appendChild(title);
//     singleProduct.appendChild(image)
//     singleProduct.appendChild(ul);
//     productHover.appendChild(singleProduct);
//   }
//   {
//     const singleProduct = document.createElement("div");
//     singleProduct.classList.add("single-product-hover"); // add a class for styling
//     // Title
//     const title = document.createElement("h3");
//     title.textContent = "Home Appliances";
//     const image = document.createElement("img");
//     image.src = "images/clipper.webp"

//     const ul = document.createElement("ul");
//     ul.classList.add("hover-lists");
//     const li1 = document.createElement("li");
//     const li2 = document.createElement("li");
//     const li3 = document.createElement("li");
//     const li4 = document.createElement("li");
//     const li5 = document.createElement("li");
//     const li6 = document.createElement("li");
//     const li7 = document.createElement("li");
//     const li8 = document.createElement("li");
//     const li9 = document.createElement("li");

//     const anchorTag1 = document.createElement("a");
//     const anchorTag2 = document.createElement("a");
//     const anchorTag3 = document.createElement("a");
//     const anchorTag4 = document.createElement("a");
//     const anchorTag5 = document.createElement("a");
//     const anchorTag6 = document.createElement("a");
//     const anchorTag7 = document.createElement("a");
//     const anchorTag8 = document.createElement("a");
//     const anchorTag9 = document.createElement("a");

//     anchorTag1.appendChild(li1);
//     anchorTag2.appendChild(li2);
//     anchorTag3.appendChild(li3);
//     anchorTag4.appendChild(li4);
//     anchorTag5.appendChild(li5);
//     anchorTag6.appendChild(li6);
//     anchorTag7.appendChild(li7);
//     anchorTag8.appendChild(li8);
//     anchorTag9.appendChild(li9);

//     anchorTag1.href = "#";
//     anchorTag2.href = "#";
//     anchorTag3.href = "#";
//     anchorTag4.href = "#";
//     anchorTag5.href = "#";
//     anchorTag6.href = "#";
//     anchorTag7.href = "#";
//     anchorTag8.href = "#";
//     anchorTag9.href = "#";

//     li1.textContent = "Vacuums";
//     li2.textContent = "Kitchen Appliances";
//     li3.textContent = "Blenders & Grinders";
//     li4.textContent = "Fans";
//     li5.textContent = "Humidifiers";
//     li6.textContent = "Electric Kettles";
//     li7.textContent = "Lightings";
//     li8.textContent = "Baby Feeding";
//     li9.textContent = "Steamer & Irons";

//     ul.appendChild(anchorTag1);
//     ul.appendChild(anchorTag2);
//     ul.appendChild(anchorTag3);
//     ul.appendChild(anchorTag4);
//     ul.appendChild(anchorTag5);
//     ul.appendChild(anchorTag6);
//     ul.appendChild(anchorTag7);
//     ul.appendChild(anchorTag8);
//     ul.appendChild(anchorTag9);

//     singleProduct.appendChild(title);
//     singleProduct.appendChild(image)
//     singleProduct.appendChild(ul);
//     productHover.appendChild(singleProduct);

//     console.log(singleProduct.innerHTML);
//   }

//   document.body.appendChild(productHover);

//   products.addEventListener("mouseout", () => {
//       productHover.style.display = 'none'
//   })
// }


// delete





function support() {
  let support = document.getElementById("support");
  const hoverSupport = document.createElement("div");
  hoverSupport.classList.add("hover-support-box");

  // first link
  const link1 = document.createElement("a");
  const p1 = document.createElement("p");
  p1.textContent = "Track Order";
  const p2 = document.createElement("p");
  p2.classList.add("icon-side");

  link1.appendChild(p1);
  link1.appendChild(p2);

  const icon1 = document.createElement("span");
  icon1.classList.add("material-symbols-outlined");
  icon1.textContent = "delivery_truck_speed";

  const icon2 = document.createElement("span");
  icon2.classList.add("material-symbols-outlined");
  icon2.textContent = "arrow_right_alt";

  const icon3 = document.createElement("span");
  icon3.classList.add("material-symbols-outlined");
  icon3.textContent = "home";

  p2.appendChild(icon1);
  p2.appendChild(icon2);
  p2.appendChild(icon3);

  hoverSupport.appendChild(link1);
  document.body.appendChild(hoverSupport);

  console.log(hoverSupport);

  // second link
  const link2 = document.createElement("a");
  const link2_p = document.createElement("p");
  link2_p.textContent = "Visit Carlcare";
  const link2_p2 = document.createElement("p");

  link2.appendChild(link2_p);
  link2.appendChild(link2_p2);

  const link2_icon1 = document.createElement("span");
  link2_icon1.classList.add("material-symbols-outlined");
  link2_icon1.textContent = "digital_wellbeing";

  const link2_icon2 = document.createElement("span");
  link2_icon2.classList.add("material-symbols-outlined");
  link2_icon2.textContent = "";

  const link2_icon3 = document.createElement("span");
  link2_icon3.classList.add("material-symbols-outlined");
  link2_icon3.textContent = "";

  link2_p2.appendChild(link2_icon1);
  link2_p2.appendChild(link2_icon2);
  link2_p2.appendChild(link2_icon3);

  hoverSupport.appendChild(link2);

  support.addEventListener("mouseout", () => {
    hoverSupport.style.display = "none";
  });
}


// countdown

// helper function to add leading zero
function pad(num) {
  return num < 10 ? "0" + num : num;
}

let countDownDate = new Date("Aug 31, 2025 23:59:59").getTime();

let countdownFunction = setInterval(function() {
  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update spans with padded values
  document.getElementById("days").textContent = pad(days);
  document.getElementById("hours").textContent = pad(hours);
  document.getElementById("minutes").textContent = pad(minutes);
  document.getElementById("seconds").textContent = pad(seconds);

  if (distance < 0) {
    clearInterval(countdownFunction);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function menuOpen(){

  const main_header = document.querySelector('.main-header')
  const header_logo = document.querySelector('#header-logo')
  const header_nav = document.querySelector('.main-header nav')
  const mobile_menu = document.createElement('div')
  const mobile_menu_header = document.createElement('div')
  const empty_div = document.createElement('div')
  const menu_close_link = document.createElement('a')
  const menu_close_icon = document.createElement('span')

  mobile_menu.classList.add('mobile-menu')
  mobile_menu_header.classList.add('mobile-menu-header')
  empty_div.classList.add('empty-div')
  menu_close_icon.classList.add('material-symbols-outlined')
  menu_close_icon.textContent = 'close'

  mobile_menu_header.appendChild(menu_close_link)
  menu_close_link.appendChild(menu_close_icon)
  mobile_menu_header.appendChild(header_logo.cloneNode(true));
  // mobile_menu_header.appendChild(header_logo)
  mobile_menu.appendChild(mobile_menu_header)
  mobile_menu_header.appendChild(empty_div)
  // mobile_menu.appendChild(header_nav)
  mobile_menu.appendChild(header_nav.cloneNode(true));
  main_header.appendChild(mobile_menu)
  document.body.appendChild(mobile_menu)

   document.body.classList.add("menu-open")


   menu_close_link.addEventListener("click", () => {
    mobile_menu.style.display = 'none'
  });
}

// menuOpen()

// function mobileHover(){
//   const product = document.querySelector('#products')
//   const product_inner_products = document.querySelector('#inner-product')
//   product_inner_products.style.display = 'flex'
//   alert('hi')
  // console.log(product_inner_products)
  // product.addEventListener("mouseover", () => {
  //   product_inner_products.style.display = 'block'
  // })
// }
// mobileHover()
// menuOpen()

// function nav(){
//   const heading = document.querySelector('footer nav h3')
//   const ul = document.querySelector('.customer-services')
//   ul.style.display = 'block'
//   console.log(heading)
//   heading.addEventListener('click', () => {
//     ul.style.display = 'none'
//   })
// }
// nav()

// {const headers = document.querySelectorAll('footer-main-end nav h3')
// const contents = document.querySelectorAll('.accordion-content')
// headers.forEach((header, index) => {
//   header.addEventListener('click', () => {
//     contents.forEach((content, i) => {
//       if(i !== index){
//         content.style.display = 'none'
//       }
//     })
//     const content = contents[index]
//     if(content.style.display === 'block'){
//       content.style.display = 'none'
//     }else{
//       content.style.display = 'block'
//     }
//   })
// })}

const headers = document.querySelectorAll('.footer-main-end nav h3');
const contents = document.querySelectorAll('.accordion-content');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    // close all first
    contents.forEach((content, i) => {
      if (i !== index) {
        content.style.display = 'none';
      }
    });

    // toggle clicked one
    const content = contents[index];
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
});
// headers.forEach((header, index) => {
//   header.addEventListener('click', () => {
//     // close all first
//     contents.forEach((content, i) => {
//       if (i !== index) {
//         content.classList.remove('active');
//       }
//     });

//     // toggle clicked one
//     contents[index].classList.toggle('active');
//   });
// });





