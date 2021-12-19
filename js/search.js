
//Tìm kiếm
$(document).ready(function(){
    $("#btn-search").on("click", function() {
      $("#search-re").empty();
      var value = $("#txt-search").val().toLowerCase();
      var data = []; 
      var products = $(".sp");
      var content ="<h2>Sản phẩm muốn tìm</h2>";
      var s = 0; 
      console.log(products);
      for(var i =0; i<products.length;i++) {
        $(this).filter(function() {
            var product = $(products[i]);
            if($(product).find(".name-sp").text().toLowerCase().indexOf(value) > -1){
                var imglink = product.find('.img-sp').attr('src');
                var productName = product.find('.name-sp').text();
                var newprice = product.find('.new-price').text();
                var oldprice = product.find('.old-price').text();
                var order = {
                'imglink':imglink,
                'name':productName,
                'new':newprice,
                'old':oldprice
            }
                $(data[s] = order);
                s++;
            }
        }); 
        }
        if(data.length>0)
        {
        for(let i = 0; i < data.length; i++){
            var cartItem =`
            <div class="sp col-3 col-m4 col-s12">
            <a href="Kit.html">
                <img class="img-sp" src="${data[i].imglink}">
                <span class = "name-sp">${data[i].name}</span>
                <span class = "old-price"><s>${data[i].old}</s>đ</span>
                <span class = "new-price">${data[i].new}</span>
            </a>
            <input class = "add" type="button" value = "Thêm giỏ hàng">
            <input class ="buy" type="button" value = "Mua Ngay">
        </div>`
        content += cartItem;
        }
    }
    else {
        content +="<h3>Không tìm thấy sản phẩm nào";
    }
        $("#search-re").html(content);
        //document.getElementById("#search-re").style.transition = "0.3s";
        document.getElementById("products").style.display = "none";
        
    });
  });
$(document).ready(function(){
    $("#btn-sort").on("change", function(){
    $("#search-re").empty();
    var a = $("#btn-sort option:selected").val();
    var s = 0; 
    var data = []; 
    var products = $(".sp")
    var content ="";
    var s = 0; 
    for(var i =0; i<products.length;i++) {
        $(this).filter(function() {
        {
            var product = $(products[i]);;
            var imglink = product.find('.img-sp').attr('src');
            var productName = product.find('.name-sp').text();
            var newprice = product.find('.new-price').text();
            var oldprice = product.find('.old-price').text();
            var order = {
            'imglink':imglink,
            'name':productName,
            'new':newprice,
            'old':oldprice
            }
            $(data[s] = order);
            s++;
        }
        });
    } 
    //var product = data[0];
    data.sort(function(a,b){
        return a.price - b.price;
    });
    if(a =="1")
    {
        for(var i =0; i<data.length;i++)
        {
            var cartItem =`
            <div class="sp col-3 col-m4 col-s12">
                <a href="Kit.html">
                    <img class="img-sp" src="${data[i].imglink}">
                    <span class = "name-sp">${data[i].name}</span>
                    <span class = "old-price"><s>${data[i].old}</s>đ</span>
                    <span class = "new-price">${data[i].new}</span>
                </a>
                <input class = "add" type="button" value = "Thêm giỏ hàng">
                <input class ="buy" type="button" value = "Mua Ngay">
            </div>`
        content += cartItem;
        }
    }
    else if(a ==2){
        for(var i =data.length-1; i>=0; i--)
        {
            var cartItem =`
            <div class="sp col-3 col-m4 col-s12">
            <a href="Kit.html">
                <img class="img-sp" src="${data[i].imglink}">
                <span class = "name-sp">${data[i].name}</span>
                <span class = "old-price"><s>${data[i].old}</s>đ</span>
                <span class = "new-price">${data[i].new}</span>
            </a>
            <input class = "add" type="button" value = "Thêm giỏ hàng">
            <input class ="buy" type="button" value = "Mua Ngay">
        </div>`
        content += cartItem;
        }
    }
    $("#search-re").html(content);
    document.getElementById("products").style.display = "none";
});
});
