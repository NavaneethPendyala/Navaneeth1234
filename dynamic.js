function loadjson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200")
    {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadjson("data.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
   skillset(data.skills);
})

var left=document.querySelector(".leftchild");
function details(det){

  var image=document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

  var name=document.createElement("h3");
  name.textContent=det.name;
  left.appendChild(name);

  var mail=document.createElement("a");
  mail.href="mailto:navaneethpendyala1234@gmail.com";
  mail.textContent=det.email;
  left.appendChild(mail);

  var number=document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);

  var add=document.createElement("h2");
  add.textContent="ADDRESS";
  left.appendChild(add);

  var hr =document.createElement("hr");
  left.appendChild(hr);

  var add1=document.createElement("p");
  add1.textContent= det.Address;
  left.appendChild(add1);
}
var right =document.querySelector(".rightchild");
function careerinfo(infodata){
  var car=document.createElement("h3");
  car.textContent="CAREER OBJECT";
  right.appendChild(car);
}
function educationdetails (edu){
  var d =document.createElement("h1");
  d.textcontent="EDUCATIONAL QUALIFICATIONS";
  left.appendChild(d);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var table1=document.createElement("table");
  table1.border="1";
  var tr1="<tr><th>INSTITUTE</th><th>DEGREE</th><th>PASSOUT</th></tr>";
  var tr2="";
  for(var i=0;i<edu.length;i++){
    tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td><td>";
  }
  table1.innerHTML=tr1+tr2;
  right.appendChild(table1);
}
function skillset(sk){
  var s1=document.createElement("h3");
  s1.textContent="TECHNICAL SKILLS";
  right.appendChild(s1);

  var hr=document.createElement("hr");
  right.appendChild(hr);

  var ul=document.createElement("ul");
  for(var i=0;i<sk.length;i++){
    var li=document.createElement("li");
    li.textContent=sk[i].title+":"+sk[i].content;
    ul.appendChild(li);
  }
  right.appendChild(ul);
}
