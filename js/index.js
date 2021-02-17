function CountBox() {
		dateNow = new Date();
		amount = ((23 - dateNow.getHours())*60*60 + (59 - dateNow.getMinutes())*60 + (60 - dateNow.getSeconds()))*1000;
		delete dateNow;
		if (amount < 0) {
			out = "<div class='countbox-num'><div class='countbox-hours'><span></span>00</div><div class='countbox-hours-text'></div></div>" +
			"<div class='countbox-num'><div class='countbox-mins'><span></span>00</div><div class='countbox-mins-text'></div></div>" +
			"<div class='countbox-num'><div class='countbox-secs'><span></span>00</div><div class='countbox-secs-text'></div></div>";
			var list = document.getElementsByClassName("countbox");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 10000)
		} else {
			days = 0;
			days1 = 0;
			days2 = 0;
			hours = 0;
			hours1 = 0;
			hours2 = 0;
			mins = 0;
			mins1 = 0;
			mins2 = 0;
			secs = 0;
			secs1 = 0;
			secs2 = 0;
			out = "";
			amount = Math.floor(amount / 1e3);
			days = Math.floor(amount / 86400);
			days1 = (days >= 10) ? days.toString().charAt(0) : '0';
			days2 = (days >= 10) ? days.toString().charAt(1) : days.toString().charAt(0);
			amount = amount % 86400;
			hours = Math.floor(amount / 3600);
			hours1 = (hours >= 10) ? hours.toString().charAt(0) : '0';
			hours2 = (hours >= 10) ? hours.toString().charAt(1) : hours.toString().charAt(0);
			amount = amount % 3600;
			mins = Math.floor(amount / 60);
			mins1 = (mins >= 10) ? mins.toString().charAt(0) : '0';
			mins2 = (mins >= 10) ? mins.toString().charAt(1) : mins.toString().charAt(0);
			amount = amount % 60;
			secs = Math.floor(amount);
			secs1 = (secs >= 10) ? secs.toString().charAt(0) : '0';
			secs2 = (secs >= 10) ? secs.toString().charAt(1) : secs.toString().charAt(0);
			out = "<div class='countbox-num'><div class='countbox-hours'><span></span>" + hours1 + hours2 + "</div><div class='countbox-hours-text'>Óra</div></div>" +
			"<div class='countbox-num'><div class='countbox-mins'><span></span>" + mins1 + mins2 +"</div><div class='countbox-mins-text'>Perc</div></div>" + "<div class='countbox-num'><div class='countbox-secs'><span></span>" + secs1 + secs2 + "</div><div class='countbox-secs-text'>Másodperc</div></div>";
			var list = document.getElementsByClassName("countbox");
			for (var i = 0; i < list.length; i++) {
				list[i].innerHTML = out;
			}
			setTimeout("CountBox()", 1e3)
		}
	}
	window.onload = function () {
		CountBox()
	}
$(document).ready(function(){
    $('a[href^="#"]').click(function (){
        var elementClick = $(this).attr("href");
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated), body:not(:animated)").animate({scrollTop: destination}, 800);
        return false;
    })   
});
var i, c, y, v, s, n;
v = document.getElementsByClassName("youtube");
if (v.length > 0) {
    s = document.createElement("style");
    s.type = "text/css";
    s.innerHTML = '.youtube{background-color:#000;max-width:100%;height:inherit;overflow:hidden;position:relative;cursor:hand;cursor:pointer}.youtube .thumb{bottom:0;display:block;left:0;margin:auto;max-width:100%;position:absolute;right:0;top:0;width:100%;height:auto}.youtube .play{filter:alpha(opacity=80);opacity:.8;height:77px;left:50%;margin-left:-38px;margin-top:-38px;position:absolute;top:50%;width:77px;background:url("//static.best-gooods.ru/img/youtube-play-icon.png") no-repeat}';
    document.body.appendChild(s)
}
for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "https://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function() {
        var a = document.createElement("iframe");
        a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1&rel=0&showinfo=0");
        a.setAttribute("allowfullscreen", "");
        a.style.width = this.style.width;
        a.style.height = this.style.height;
        this.parentNode.replaceChild(a, this)
    }
};