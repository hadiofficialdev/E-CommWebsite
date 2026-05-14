import './style.css';

const footerHTML=`<footer class="section_footer">
      <div class="footer_container container">
        <div class="content_1">
          <img src="/images/logoFooterfinal-removebg-preview.png" class="footerlogo" alt="logo">
          <p> Welcome to Zentoro, your ultimate destination for
            cutting-edge gadgets!</p>
            <img src="https://i.postimg.cc/Nj9dgJ98/cards.png" alt="cards" />
        </div>
        <div class="content_2">
          <h4>Products</h4>
          <a href="#">Computers</a>
          <a href="#">Laptops</a>
          <a href="#">Accessories</a>
          <a href="#">Sales & Discounts</a>
        </div>
        <div class="content_3">
          <h4>Support</h4>
          <a href="./contact.html">Contact Us</a>
          <a href="" target="_blank">Payment Method</a>
          <a href="" targte="_blank">Delivery</a>
          <a href="" target="_blank">Return and Exchange</a>
        </div>
        <div class="content_4">
          <h4>Newsletter</h4>
          <p>Be the first to know about new arrivals, sales & promos!</p>
          <div class="f_email">
            <input type="email" placeholder="Enter Email....">
            <i class="bx bx-envelope"></i>
          </div>
          <hr>
        </div>
      </div>
      <div class="f_design">
        <div class="f_design_border">
        </div>
      </div>
    </footer>`;

    const footerElem=document.querySelector(".section_footer");
    footerElem.insertAdjacentHTML("afterbegin",footerHTML);