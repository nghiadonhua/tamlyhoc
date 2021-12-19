var i=1;
function Next(){
 if(i<2)
{   
    i+=1;
}
else
{
    i=1;
}
document.getElementById('slide').setAttribute('src','img/slider_'+i+'.png')
}
function Back(){
if(i>1)
{
    i-=1;
}
else
{
    i=2;
}
document.getElementById('slide').setAttribute('src','img/slider_'+i+'.png')
}
function AutoPlay()
{
setInterval(Next,3000);
}