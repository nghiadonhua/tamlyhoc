
//Lấy dữ liệu mua hàng 
$(document).ready(function(){
    var amount = JSON.parse('['+sessionStorage.getItem('orders')+']').length-1;
    $('.cart-amount').text(amount);
    $('.sp .add').click(function(){
        var product = $(this).parents('.sp');
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
        var currentproduct = window.sessionStorage.getItem('orders');
        var neworder = currentproduct+','+JSON.stringify(order);
        window.sessionStorage.setItem('orders',neworder);
        var current = parseInt($('.cart-amount').text());
        current +=1;
        $('.cart-amount').text(current);
    });
});
//Tải dữ liệu vào giỏ hàng
$(window).on('load', function(){
    var amount = JSON.parse('['+sessionStorage.getItem('orders')+']').length-1;
    $('.cart-amount').text(amount);
    var order = sessionStorage.getItem('orders');
    order = '['+ order+']';
    var data =JSON.parse(order);
    var content ='';
    var n = [];
    var x = [];
    x[0] = data[0];
    x[1] = data[1];
    z =1;
    for(var i=1; i<data.length; i++){
        if(ch(data[i],x)){
            n[cha(data[i],x)] = num(data[i],data)
        }
        else{
            z++;
            x[z] = data[i];
            n[z] = num(x[z],data); 
        }
    }
    for(var i = 1; i < x.length; i++){
        var cartItem =`
        <div class="cart-item">			
        <img class = "img-sp" src="${x[i].imglink}" />
        <div class="cart-product">
            <label class="item-name">${x[i].name}</label>
            <label class="item-size">Size: L</label>
            <label class="item-delete">Xóa</label>
            <label class="item-later">Để mua sau</label>
        </div>
        <div class="cart-price">
            <label class="item-price">${x[i].new}</label>
            <label class="item-old-price"><s>${x[i].old}</s></label>
            <label class="item-discount">-30%</label>
        </div>
        <div class="cart-quality">
            <input class="btn sub" type="button" value="-" />
            <input class="btn quality" type="text" value="${n[i]}" />
            <input class="btn plus" type="button" value="+" />
        </div>				
    </div>`
    content += cartItem;
    }
    $('#content-left').html(content);
    //Xóa
    $(' .item-delete').click(function(){
        var product = $(this).closest('.cart-item');
        //Lấy chỉ số sản phẩm cần xoá
        var stt = product.find('.iteam-name').text();
        //list.splice(start, n) xoá phần từ được chọn trong list
        data.splice(stt-1,1);
        //cập nhật lại sessionStorage "order"
        window.sessionStorage.setItem("orders",JSON.stringify(data));
        //Xoá trên giao diện table
        
        $(product).remove();
    
        $('.cart-amount').text(parseInt($('.cart-amount').text()) - 1);
        $('.cart-number').text(`(có ${data.length-1} sản phẩm)`);   
        console.log('.cart-number')  
        UpdatePrice();
    })
});
//Thay đổi số lượng
$(window).on("load" ,function(){
    UpdatePrice()
    $(".plus").click(function(){
        var quality = $(this).parents(".cart-quality");
        var num = IncreaseAmount($(quality).find(".quality").val());
        console.log(num);
        $(quality).find(".quality").val(num);
        UpdatePrice();
    });
    $(".sub").click(function(){
        var quality = $(this).parents(".cart-quality");
        var num = SubAmount($(quality).find(".quality").val());
        $(quality).find(".quality").val(num);
        UpdatePrice();
    });
    
});
//#region Tăng giảm, tổng
function IncreaseAmount(a)
{
   return (Number(a)+1);
}
function SubAmount(a)
{
    var x =a;
    if(x==1)
        return 0;
    else if(x==0)
        return 0;
    else
        return Number(x)-1;
}
function a(totalPrice){   
    var str = "";
    var j = 0
    for(var i = totalPrice.length-1;i>=0;i--)
    {
        j++;
        if(j%3==0)
        {
            if(j == totalPrice.length)
                str = totalPrice[i]+ str
            else 
                str ='.'+totalPrice[i] + str;
        }
        else
            str = totalPrice[i]+str;
    }
    str+=' đ';
    return str;
}
//#endregion
//Cập nhật tổng tiền
function UpdatePrice()
{
        var data = $(".item-price");
        var x = $(".quality");
        var totalPrice =0;
        for(var i=0; i<data.length; i++)
        {
            var price = $(data[i]).text();
            var num = $(x[i]).val();
            price = price.replace('.','');
            totalPrice += (parseInt(price)*parseInt(num));
        }
        $('.total-price').text(a(totalPrice.toString()));
        $('.tmp-price').text(a(totalPrice.toString()));
}
function ch(a, data){
    for(var i=1; i<data.length; i++)
    {
        if(a.name ==data[i].name)
            return true;
    }
    return false;
}
function cha(a, data){
    for(var i=1; i<data.length; i++)
    {
        if(a.name ==data[i].name)
            return i;
    }
    return 0;
}
function num(a, data){
    d =0;
    for(var i=1; i<data.length; i++)
    {
        if(a.name ==data[i].name)
            d++;
    }
    return d;
}
/*$(window).on("load",function(){

$(".item-delete").click(function(){
    var p = $(this).parents(".cart-item");
    var d =p.find('.item-name').text();
    $(p).empty();
    UpdatePrice();
    var items = $(".cart-item");
    var x =[];
    var z = 0;
    var n = [];
    console.log(items);
    for(var i=0; i<items.length; i++){
        if($(items[i]).find(".item-name").text() == d){
            continue;
        }
        else{
            var imglink = items.find('.img-sp').attr('src');
            var productName = items.find('.item-name').text();
            var newprice = items.find('.nitem-price').text();
            var oldprice = items.find('.item-old-price').text();
            var order = {
                'imglink':imglink,
                'name':productName,
                'new':newprice,
                'old':oldprice
            }   
            x[z] = order;
            n[z] =items.find("quality").text();
            z++;
        }
    }
    console.log(x);
    $( "#content-left" ).empty();
    for(var i = 0; i < x.length; i++){
    var cartItem =`
    <div class="cart-item">			
    <img class = "img-sp" src="${x[i].imglink}" />
    <div class="cart-product">
        <label class="item-name">${x[i].name}</label>
        <label class="item-size">Size: L</label>
        <label class="item-delete">Xóa</label>
        <label class="item-later">Để mua sau</label>
    </div>
    <div class="cart-price">
        <label class="item-price">${x[i].new}</label>
        <label class="item-old-price"><s>${x[i].old}</s></label>
        <label class="item-discount">-30%</label>
    </div>
    <div class="cart-quality">
        <input class="btn sub" type="button" value="-" />
        <input class="btn quality" type="text" value="${n[i]}" />
        <input class="btn plus" type="button" value="+" />
    </div>				
    </div>`
    content += cartItem;
    }
    $('#content-left').html(content);
});

});*/