setInterval(() => {

   //var days=["sunday","Monday","Tuesday","wednesday","Thursday","Friday","Saturday"];
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    //var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    //document.getElementById("month").innerHTML = months[d.getMonth()];
    
    let period = "AM";
    if(htime== 0)
    {
        htime = 12;
    }
    else if(htime >=12)
    {
        htime = htime-12;
        period ="PM";
    }
    htime = htime < 10? "0" + htime : htime;
    mtime = mtime < 10 ? "0" + mtime : mtime;
    stime = stime < 10 ? "0" + stime : stime;
  
    let time = `${htime}:${mtime}:${stime}:${period}`;
    document.getElementById("clock").innerText = time;

    
}, 1000);
