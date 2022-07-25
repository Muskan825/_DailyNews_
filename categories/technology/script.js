const link="https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";
function getAPIdata(URL){
    fetch(URL)
    .then((res)=>{return res.json ();})
    .then((data)=>displaydata(data.articles))
    .catch((err)=>console.error("Error "+err));
}  

function displaydata(dataarr){
    for( i of dataarr){
        var imgURL=i.urlToImage;
        var title=i.title;
        var content=i.content;
        var fullUrl=i.url;
        var urlName=i.source.name;
        title=title.substr(0,50)+"....";
        
        console.log(title)
        
        var div=document.createElement("div");
        div.id="card";
        div.className="col-lg-3 col-md-6"
        
        var img=document.createElement("div");
        img.id="img";
        img.style.backgroundImage = "url("+imgURL+")";
        
        
        var content=document.createElement("div");
        content.id="content";
        var txt=document.createElement("h1");
        txt.id="title";
        txt.innerHTML=title;
        content.appendChild(txt);
        
        var link=document.createElement("a");
        link.href=fullUrl;
        link.id="link"
        link.innerHTML=urlName;
        content.appendChild(link);
        
        
        
        div.appendChild(img);
        div.appendChild(content);
        
        document.getElementById("bodyTag").appendChild(div);
        
    }
}
getAPIdata(link);