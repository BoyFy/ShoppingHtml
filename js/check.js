function valdateForm()
{
	if(checkName(document.getElementById("username").value)==1) return false;
	if(checkPassword(document.getElementById("password").value)==1) return false;
	return true;
}
function checkName(s)
{
	var ok=s.length;
	if(ok==0){
		alert("账号不能为空，请重新输入!");
	    return 1;
	}
}
function checkPassword(n)
{
	var ok=n.length;
	if(ok==0){
		alert("密码不能为空，请重新输入!");
		return 1;
	}
	if(ok>0&&ok<8){
		alert("密码需要大于8位，请重新输入！");
	    return 1;
	}
}
