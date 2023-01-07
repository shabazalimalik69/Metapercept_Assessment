const getData = ()=>{
    fetch("http://localhost:3000/data")
    .then((res)=>res.json())
    .then((res)=>{
        //console.log(res);
        displayData(res)
    })
}
getData();

function displayData(data){
let container = document.getElementById("Container");
container.innerHTML = "";

data.map((el)=>{
    let div = document.createElement("div");
    let image = document.createElement("image");
    image.setAttribute("src",el.ImageUrl);
    image.setAttribute("class","Image");
    let h4 = document.createElement("h4");
    h4.innerText = el.Name;
    let p = document.createElement("p");
    p.innerText = el.ShortDesc;
    button =  document.createElement("button");
    button.innerText = "View"
    div.append(image,h4,p,button);
    container.append(div);
})
}