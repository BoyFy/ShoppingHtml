function valdateForm(){
	 var username = document.getElementById("username");
     var password = document.getElementById("password");
     var repassword = document.getElementById("repassword");
     var name = document.getElementById("name");
     var tel = document.getElementById("tel");
	 var namer= /^[\u4E00-\u9FA5\uf900-\ufa2d·s]{2,20}$/;
     var phoneR = /(^1[3|4|5|7|8]\d{9}$)|(^09\d{8}$)/;
     if (username.value =="") {
        alert("用户名不能为空");
        return false;
      }
	 if (password.value =="") {
        alert("密码不能为空");
        return false;
      }
	  if (password.value.length<8) {
        alert("密码应该大于8位");
        return false;
      }
	 if(password.value!=repassword.value){
		 alert("两次密码不一样");
		 return false;
	 }
	 if (!namer.test(name.value)) {
        alert("请输入正确的汉字姓名");
        return false;
     }
     if (!phoneR.test(tel.value)) {
        alert("请输入正确的手机号码");
        return false;
     }   
}