



 
  document.getElementById('btn').addEventListener('click',function RandomColor(){
    var red = Math.floor(Math.random()*256);
    var green = Math.floor(Math.random()*256);
    var blue = Math.floor(Math.random()*256);

    var HexColor = '#'+ Color(red) + Color(green) + Color(blue);
    console.log(HexColor);
    document.getElementById('color-text').innerHTML = HexColor;
    document.getElementById('circle').style.background = HexColor;
    document.getElementById('color-text').style.color=HexColor;
    return HexColor;
   
});
function Color(color){
    var Hex = color.toString(16);
    return Hex.length === 1 ? '0'+Hex : Hex;
    
}