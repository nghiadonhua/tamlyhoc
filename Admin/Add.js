function loadform()
{
    document.getElementById("form").style.display = "flex";
}
function exitform()
{
    document.getElementById("form").style.display = "none";
}
function loadform2()
{
    document.getElementById("form2").style.display = "flex";
}
function exitform2()
{
    document.getElementById("form2").style.display = "none";
}
$(document).ready(function(){
    var items = $(".item");
    var data = [];
    for(var i=0;i<items.length; i ++)
    {
        var a2 =  $(items[i]).find(".a2").text();
        var a3 =  $(items[i]).find(".a3").text();
        var a4 =  $(items[i]).find(".a4").text();
        var a5 =  $(items[i]).find(".a5").text();
        var a6 =  $(items[i]).find(".a6").text();
        var a7 =  $(items[i]).find(".a7").text();
        var item = { 
            'a2': a2, 'a3': a3, 'a4': a4,
            'a5': a5, 'a6': a6, 'a7': a7
        }
        $(data[i] = item);
    }
    $(".btn-sub").on("click", function(){
        var item =$(".info");
        var a2 =  item.find(".a2").val();
        var a3 =  item.find(".a3").val();
        var a4 =  item.find(".a4").val();
        var a5 =  item.find(".a5").val();
        var a6 =  item.find(".a6").val();
        var a7 =  item.find(".a7").val();
        var item = { 
            'a2': a2, 'a3': a3, 'a4': a4,
            'a5': a5, 'a6': a6, 'a7': a7
        }
        if(check(data,item))
        {
            alert("Đã tồn tại dòng dản phẩm");
        }
        else if(item.a2 =="" && item.a3 =="" && item.a4 =="" && item.a5 =="")
        {
            alert("Không được để trống thông tin!")
        }
        else
        {
            var l = data.length;
            //data[l] =item;
            var content =  `  
            <thead>
                <tr>
                <th class ='stt'>STT</th>
                <th class ='id'>Mã dòng</th>
                <th class ='name'>Thông tin dòng</th>
                <th class ='type'>Mô tả</th>
                <th class ='id-type'>Mã loại</th>
                <th class ='type'>Hãng SX</th>
                <th class ='type'>Năm SX</th>
                <th class ='sua'>Sửa</th>
                <th class ='del'>Xóa</th>
                </tr>
            </thead>`;
            content += `<tbody>`
            for(var i = 0; i <data.length; i++)
            {
                content += `                
                <tr class ="item">
                    <td class ="a1" scope="row">${i+1}</td>
                    <td class ="a2">${data[i].a2}</td>
                    <td class ="a3">${data[i].a3}</td>
                    <td class ="a4">${data[i].a4}</td>
                    <td class ="a5">${data[i].a5}</td>
                    <td class ="a6">${data[i].a6}</td>
                    <td class ="a7">${data[i].a7}</td>
                    <td><i class="fa fa-wrench" style="font-size:28px"></i></td>
                    <td><i class="material-icons" style="font-size:28px">delete</i></td>                
                </tr>`
            }
            content += `</tbody>`
            $(".table").html(content);
            exitform();
        }
    })
    $(".edit").on("click", function(){
        var ic = $(this).parents(".item");
        loadform2();
        var item =$(".info2");
        var a2 =  item.find(".a2").val(ic.find(".a2").text());
        var a3 =  item.find(".a3").val(ic.find(".a3").text());
        var a4 =  item.find(".a4").val(ic.find(".a4").text());
        var a5 =  item.find(".a5").val(ic.find(".a5").text());
        var a6 =  item.find(".a6").val(ic.find(".a6").text());
        var a7 =  item.find(".a7").val(ic.find(".a7").text());
        $(".btn-edit").on("click", function (){
            ic.find(".a2").text(a2.val());
            ic.find(".a3").text(a3.val());
            ic.find(".a4").text(a4.val());
            ic.find(".a5").text(a5.val());
            ic.find(".a6").text(a6.val());
            ic.find(".a7").text(a7.val());
            exitform2();
        })
        
    })
    $(".del").on("click", function(){
        var ic = $(this).parents(".item");
        var id = ic.find(".a2").text();
        for(var i = 0; i < data.length; i++)
        {
            if(data[i].a2 == id)
            {
                data.pop(data[i]);
                alert("ssss");
            }
        }
        console.log(data);
        var l = data.length;
        var content =  `  
        <thead>
            <tr>
            <th class ='stt'>STT</th>
            <th class ='id'>Mã dòng</th>
            <th class ='name'>Thông tin dòng</th>
            <th class ='type'>Mô tả</th>
            <th class ='id-type'>Mã loại</th>
            <th class ='type'>Hãng SX</th>
            <th class ='type'>Năm SX</th>
            <th class ='sua'>Sửa</th>
            <th class ='del'>Xóa</th>
            </tr>
        </thead>`;
        content += `<tbody>`
        for(var i = 0; i <data.length; i++)
        {
            content += `                
            <tr class ="item">
                <td class ="a1" scope="row">${i+1}</td>
                <td class ="a2">${data[i].a2}</td>
                <td class ="a3">${data[i].a3}</td>
                <td class ="a4">${data[i].a4}</td>
                <td class ="a5">${data[i].a5}</td>
                <td class ="a6">${data[i].a6}</td>
                <td class ="a7">${data[i].a7}</td>
                <td><i class="fa fa-wrench" style="font-size:28px"></i></td>
                <td><i class="material-icons" style="font-size:28px">delete</i></td>                
            </tr>`
        }
        content += `</tbody>`
        $(".table").html(content);
    })
})
function check(data,item)
{
    for(var i = 0; i < data.length; i++)
    {
        if(data[i].a2 == item.a2 && data[i].a3 == item.a3 && data[i].a4 == item.a4)
            return true;
    }
    return false;
}