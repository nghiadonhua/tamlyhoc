function IncreaseAmount(a)
{
    var x =document.getElementById(a).value;
    document.getElementById(a).value=Number(x)+1;
}
function SubAmount(a)
{
    var x =document.getElementById(a).value;
    if(x==1)
    {
        document.getElementById(a).value=0;
    }
    else if(x==0)
    {
        document.getElementById(a).value=0;
    }
    else
    {
        document.getElementById(a).value=Number(x)-1;
    }
}
function Update()
{
    
}
function UpdatePrice()
{
    var data = $(".item-price");
    var totalPrice =0;
    for(var i=0; i<data.length; i++)
    {
        var price = $(data[i]).text();
        price = price.replace('.','');
        totalPrice += parseInt(price);
        console.log(totalPrice);
    }
    $('.total-price').text(a(totalPrice.toString()));
    $('.tmp-price').text(a(totalPrice.toString()));
    console.log(a(totalPrice.toString())); 
}
function a(totalPrice)
{   
    var str = "";
    for(var i = 0;i<totalPrice.length;i++)
    {
        if(i %3==0 && i!=0)
            str +=('.'+totalPrice[i]);
        else
            str = str+totalPrice[i];
    }
    str+='đ';
    return str;
}