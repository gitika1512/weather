window.onload=function(){

var display=document.getElementById("display");
var btn=document.getElementById('btn');
btn.addEventListener("click",function(){
    var ourRequest= new XMLHttpRequest();
    var req=document.getElementById("city").value+','+document.getElementById("country").value;
ourRequest.open('GET','http://api.openweathermap.org/data/2.5/weather?q='+req+'&APPID=63c93cdf337be8a9971c60719009e0b4');
ourRequest.onload =function() {
	var data = JSON.parse(ourRequest.responseText);
	renderHTML(data);
};
ourRequest.send(); 
});

  function renderHTML(data)
  {
    var print="";
    console.log(data);
    if(data.message!=null)
    {
    	print+='<h1> Error !'+data.message+'</h1>';
    	display.insertAdjacentHTML('beforeend',print);
    }
    else{
    print+='<h1> Weather forcast of '+data.name+'</h1>';
    
    if((data.main.temp-273.15)>30)
    {
    	print+='<b><p id="tempH"> Temperatue is : '+(data.main.temp-273.15)+' C</p></b>';
    	print+='<b><p id="tempH"> Maximum Temperatue is : '+(data.main.temp_max-273.15)+' C</p></b>'
        print+='<b><p id="tempH"> Minimum Temperatue is : '+(data.main.temp_min-273.15)+' C</p></b>'
    }
    else
    {
    	print+='<b><p id="tempL"> Temperatue is : '+(data.main.temp-273.15)+' C</p></b>';
    	print+='<b><p id="tempL"> Maximum Temperatue is : '+(data.main.temp_max-273.15)+' C</p></b>'
        print+='<b><p id="tempL"> Minimum Temperatue is : '+(data.main.temp_min-273.15)+' C</p></b>'
    }
    


     print+='<p> weather is '+data.weather[0].main +' ( '+ data.weather[0].description+' ) </p> ';

     print+='<p> Humidity is : '+data.main.humidity+'%</p>';
      print+='<p> Pressure : '+data.main.pressure+' mb</p>';

      print+='<p> Latitude : '+data.coord.lat+'</p>';
      print+='<p> Longitude : '+data.coord.lon+'</p>';

      print+='<p> Visiblity : '+(data.visibility)/1000+' Km</p>';
       print+='<p> Wind : '+data.wind.speed+' Km/h </p>';

        print+='<p> Sun Rises: '+data.sys.sunrise+'</p>';
         display.insertAdjacentHTML('beforeend',print);
     }
  };
 
 var reload=document.getElementById("reload");
 reload.addEventListener("click",function(){
  window.location.reload();
 });
};
