 function gettime() {
            var today = new Date();
            var year = today.getFullYear();
            var month = today.getMonth() + 1;
            var date = today.getDate();
            var hour = today.getHours();
            var minute = today.getMinutes();
            var second = today.getSeconds();
            var day;
            switch (today.getDay()) {
                case 0:
                    day = "日";
                    break;
                case 1:
                    day = "一";
                    break;
                case 2:
                    day = "二";
                    break;
                case 3:
                    day = "三";
                    break;
                case 4:
                    day = "四";
                    break;
                case 5:
                    day = "五";
                    break;
                case 6:
                    day = "六";
                    break;
            }       
            document.getElementById("time").innerHTML = year + "年" + month + "月" + date + "日" + hour + "点" + minute + "分" + second + "秒（星期" + day + "）,欢迎您的到访！";
        }
        setInterval(gettime,1000);