var MODEL = (function () {

var _homeContent = `
<section class="home">
<div class="h1Wrapper">
<h1>Valentine's Day 2023</h1>
</div>
<div class="imageHolder">
        <p>Home is where the heart is!</p>
    <img src="images/home.jpg" alt="">

</div>
</section>
`;
var _aboutContent = `
<section class="about">
<div class="h1Wrapper">
<h1>About us!</h1>
</div>
        <div class="row">
            <div class="left">
                <img src="images/about01.jpg" alt="">
            </div>
            <div class="right">
                <div class="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem molestiae quidem deserunt provident voluptates recusandae repudiandae ab pariatur saepe debitis minus accusamus iusto, voluptatum numquam iure assumenda nisi excepturi.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="left">
                <img src="images/about02.jpg" alt="">
            </div>
            <div class="right">
                <div class="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem molestiae quidem deserunt provident voluptates recusandae repudiandae ab pariatur saepe debitis minus accusamus iusto, voluptatum numquam iure assumenda nisi excepturi.</p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="left">
                <img src="images/about03.jpg" alt="">
            </div>
            <div class="right">
                <div class="text">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum dolorem molestiae quidem deserunt provident voluptates recusandae repudiandae ab pariatur saepe debitis minus accusamus iusto, voluptatum numquam iure assumenda nisi excepturi.</p>
                </div>
            </div>
        </div>

    </section>`;
var _productsContent = `
<section class="products">

        <div class="h1Wrapper">
            <h1>Products</h1>
        </div>

        <div class="row">
                <div class="left">
                    <div class="imageHolder">
                        <img src="images/products.jpg" alt="">
                    </div>
                    <div class="textHolder">
                        <p>Plan #1</p>
                    </div>
                </div>
                <div class="right">
                    <div class="btn">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <div class="imageHolder">
                        <img src="images/products.jpg" alt="">
                    </div>
                    <div class="textHolder">
                        <p>Plan #2</p>
                    </div>
                </div>
                <div class="right">
                    <div class="btn">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="left">
                    <div class="imageHolder">
                        <img src="images/products.jpg" alt="">
                    </div>
                    <div class="textHolder">
                        <p>Plan #3</p>
                    </div>
                </div>
                <div class="right">
                    <div class="btn">
                        <button>View Details</button>
                    </div>
                </div>
            </div>
    </section>`;
var _contactContent = `

<section class="contact">
<div class="h1Wrapper"><h1>How can we help?</h1></div>

<form action="" method="POST">
    <input type="text" name="Name" placeholder="Full Name" required>
    <input type="email" name="Email" placeholder="Email" required>
    <select name="Continent">
        <option value="">North America</option>
        <option value="">South America</option>
        <option value="">Europe</option>
        <option value="">Australia</option>
        <option value="">Asia</option>
        <option value="">Antartica</option>
        <option value="">Africa</option>
    </select>
    <textarea name="Message" placeholder="Message" required></textarea>
    <button type="submit">Submit</button>
</form>

</section>`;

var _updateView = function (pageName) {
    console.log("Model " + pageName);
    var pageContent = "_" + pageName;

    $("#app").html(eval(pageContent));

};
    
return {
    updateView: _updateView,
};
})();