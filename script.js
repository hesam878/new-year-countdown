const days = $('#days');
const hours = $('#hours');
const minutes = $('#minutes');
const seconds = $('#seconds');
const countdown = $('#countdown');
const year = $('#year');
const loading = $('#loading');
const showYear = $('#show_year');
const btnTime = $('#btn_time');



btnTime.text('شمسی');
    btnTime.click(function (){
if ($(this).text()=='شمسی'){
        loading.css('display','black');
        $(this).text('میلادی');
}
else{
        loading.css('display','black');
        $(this).text('شمسی');
}
 });


const currentYear = new Date().getFullYear();

const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


function mohasebeYear(){
    if (btnTime.text()=='شمسی'){
    const timeAlan= new Date();
    const baqi=newYearTime - timeAlan;

    const d=Math.floor(baqi/1000/60/60/24);
    const h=Math.floor(baqi/1000/60/60)%24;
    const m=Math.floor(baqi/1000/60)%60;
    const s=Math.floor(baqi/1000)%60;

    days.text(d);
    hours.text(h<10 ? '0' + h:h);
    minutes.text(m<10 ? '0' + m:m);
    seconds.text(s<10 ? '0' + s:s);

    showYear.text(currentYear + 1);

    }else{
    const timeAlan= new Date();
    const newYearTime = new Date(`March 21 ${currentYear + 1} 21:46:00`);
    const baqi=newYearTime - timeAlan;
    console.log(baqi);
    const d=Math.floor(baqi/1000/60/60/24)-1;
    const h=Math.floor((baqi/1000/60/60)%24);
    const m=Math.floor((baqi/1000/60)%60);
    const s=Math.floor(baqi/1000)%60;

    days.text(d);
    hours.text(h<10 ? '0' + h:h);
    minutes.text(m<10 ? '0' + m:m);
    seconds.text(s<10 ? '0' + s:s);

    showYear.text(currentYear - 620);

    }
}

        setTimeout (() => {
    loading.css('display', 'none');
    countdown.css('display', 'flex');
    btnTime.css('display','block')
},1000);

setInterval(mohasebeYear,1000);
