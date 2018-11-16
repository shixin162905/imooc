let result;
function login(){
	var formElement = document.getElementById("form");
	var formData = new FormData(formElement);
	var request = new XMLHttpRequest();
	request.open("POST", "http://tech.sky31.top/login.php");
	request.onreadystatechange=function()
	  {
	    if (request.readyState==4 && request.status==200)
	    {
	      xmlDoc=request.responseText;
	      result = JSON.parse(xmlDoc);
	      if(result["code"]==0)
	      {
	      	alert("msg:"+result["msg"]
	      	+"\n"+"name:"+result["data"]["name"]+"\nsex:"+result["data"]["sex"]
	      	+"\nage:"+result["data"]["age"]+"\nphone:"+result['data']["other"]["phone"]
	      	+"\naddress:"+result['data']["other"]["address"]);
	      }
	      else if(request["code"]==1)
	      {
	      	alert("缺失参数");
	      }
	      else if(request["code"]==2)
	      {
	      	alert("账号密码格式错误");
	      }
	      else if(request["code"]==3)
	      {
	      	alert("账号密码错误");
	      }
	      else(request["code"]==4)
	      {
	      	alert("错误!");
	      }
	    }
	  }
	request.send(formData);
}
var body;
function show(){
	body=document.getElementById('body').style.opacity="0.7";
    var tmp1=document.getElementById('tmp1').style.display="block";
    var tmp2=document.getElementById('tmp2').style.display="none";
}
function show2(){
	body=document.getElementById('body').style.opacity="0.7";
	var tmp2=document.getElementById('tmp2').style.display="block";
	var tmp1=document.getElementById('tmp1').style.display="none";
}

