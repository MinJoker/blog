/* duration */

/* modified from:
 *
 * https://hexo.fluid-dev.com/posts/fluid-footer-custom/
 * 
 */

!(function() {

  var start = new Date("2024/02/13 15:04:11");

  function update() {
    var now = new Date();
    now.setTime(now.getTime()+250);
    days = (now - start) / 1000 / 60 / 60 / 24;
    dnum = Math.floor(days);
    hours = (now - start) / 1000 / 60 / 60 - (24 * dnum);
    hnum = Math.floor(hours);
    if(String(hnum).length === 1 ){
      hnum = "0" + hnum;
    }
    minutes = (now - start) / 1000 /60 - (24 * 60 * dnum) - (60 * hnum);
    mnum = Math.floor(minutes);
    if(String(mnum).length === 1 ){
      mnum = "0" + mnum;
    }
    seconds = (now - start) / 1000 - (24 * 60 * 60 * dnum) - (60 * 60 * hnum) - (60 * mnum);
    snum = Math.round(seconds);
    if(String(snum).length === 1 ){
      snum = "0" + snum;
    }
    document.getElementById("times").innerHTML = "本站已经运行&thinsp;" + dnum + "&thinsp;天&thinsp;" + hnum + "&thinsp;小时&thinsp;" + mnum + "&thinsp;分&thinsp;" + snum + "&thinsp;秒";
  }

  update();
  setInterval(update, 1000);
})();