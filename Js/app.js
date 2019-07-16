var request = new XMLHttpRequest()
var place,description,temp,iconn ;
let input ;
var btn ;
btn = document.getElementById("btn");
let url ;

 btn.addEventListener("click",get_weather);

// // Open a new connection, using the GET request on the URL endpoint


// 
//     request.open('GET',`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5dfa781872e3b3032c1a42b44f92b306`,true);
    

//     request.onreadystatechange = function() {

//         console.log("sdd");

//         request.send();
//            // Typical action to be performed when the document is ready:
           
                      
        
 
// }
// }
// Send request

function get_weather() {



    let n,d,t,i ;
    n=document.getElementById("name");
    d=document.getElementById("desc");
    t=document.getElementById("temp");
    
    input = document.getElementById("city_name").value;
//https://openweathermap.org/img/wn/09d@2x.png

    if(input == ""){
        alert("Please enter a valid City Name !");
    }

            request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var data = JSON.parse(this.response);
           place = data["name"];
           desc = data["weather"][0].description ;
            temp = data["main"].temp ;
           temp =  Math.floor(temp - 273.15);
           iconn = data["weather"][0].icon ;
           var iconurl = "https://openweathermap.org/img/wn/" + iconn+ "@2x.png";
           console.log(iconurl);
           document.getElementById("icon").src = iconurl ;
           n.style.visibility = "visible" ;
           d.style.visibility = "visible" ;
           t.style.visibility = "visible" ;
           document.getElementById("icon").style.visibility = "visible" ;
           n.innerHTML = "Place : " + place ;
           t.innerHTML = "Temperature (in C) : " + temp + "&#8451;" ; 
           d.innerHTML = "Description : " + desc;
           console.log(place);
           console.log(temp);
           console.log(desc); 
           
        

    }
};

url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=5dfa781872e3b3032c1a42b44f92b306` ;
request.open("GET",url, true);
request.send();

}


