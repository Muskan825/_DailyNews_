$(document).ready(function(){
    var preloaderFadeOutTime = 5000;
    function hide(){
        var preloader = $(".loader");
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hide();
});

const link="https://saurav.tech/NewsAPI/top-headlines/category/general/in.json";
function getAPIdata(URL){
    fetch(URL).
    then((res)=>{return res.json ();})
    .then((data)=>displaydata(data.articles))
    .catch((err)=>console.error("Error "+err));
}  
function displaydata(dataarr){
    for(let i of dataarr){
        // console.log(i);
        var imgURL=i.urlToImage;
        var title=i.title;
        title=title.substr(0,80)+"...";
        var content=i.content;
        var fullUrl=i.url;
        var urlName = i.source.name;
        // var time = i.publishedAt;
        
        var card=document.createElement("div");
        card.id="card";
        
        var img=document.createElement("div");
        img.id="img";
        img.classList.add("card-img-top");  
        img.style.backgroundImage = "url("+imgURL+")";
        card.appendChild(img);        

        
        var content=document.createElement("div");
        content.id="content";
        var txt=document.createElement("h1");
        txt.id="title";
        txt.innerHTML=title;
        card.appendChild(txt);
        
        
        var link=document.createElement("a");
        link.href=fullUrl;
        link.id="link"
        link.innerHTML=`<a href=${fullUrl}>Read Full</a>`
        card.appendChild(link);
        // console.log(link.innerText);
        

        // var timeinfo=document.createElement("span");
        // timeinfo.id="time"
        // timeinfo.innerHTML=time;
        // card.appendChild(timeinfo);
        
        document.getElementById("bodyTag").appendChild(card);
    }
    if(dataarr[0]){
        var main = document.getElementById("card");
        main.classList.add("mainNews");
    }
    
}
getAPIdata(link);

document.getElementById("btn").onclick = verify;

function verify(){
    var inp = document.getElementById("email").value;
    if(inp==""){
        alert("Enter Your Email Address");
    }
    else{
        alert("Thank you for joining our family!!!");
        localStorage.setItem("key",inp);
        document.getElementById("email").value="";
    }
}

