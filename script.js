const dailyButton=document.querySelector('.daily');
const weeklyButton=document.querySelector('.weekly');
const monthlyButton=document.querySelector('.monthly');
const gridEl=document.querySelectorAll('.grid');
console.log(gridEl[0].children)


const getData=async () => {
const res=await fetch('data.json');
const data=await res.json();
return data;
}

const addDailyData = async ()=>{
    dailyButton.classList.add('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.remove('active');
    const data=await getData();
   [ ...gridEl[0].children].forEach((item,index)=>{
       if(item.querySelector('.total-hours')){
       
    item.querySelector('.total-hours').innerHTML=`${data[index-1].timeframes.daily.current}${data[index-1].timeframes.daily.current <=1 ? 'hr' : 'hrs'}`;
    item.querySelector('.previous-time').innerHTML=`previous day- ${data[index-1].timeframes.daily.previous}${data[index-1].timeframes.daily.previous ===1 ? 'hr' : 'hrs'}`;

       }
    })
}
const addWeeklyData = async ()=>{
    dailyButton.classList.remove('active');
    weeklyButton.classList.add('active');
    monthlyButton.classList.remove('active');
    const data=await getData();
   [ ...gridEl[0].children].forEach((item,index)=>{
       if(item.querySelector('.total-hours')){
       
    item.querySelector('.total-hours').innerHTML=`${data[index-1].timeframes.weekly.current}${data[index-1].timeframes.weekly.current <=1 ? 'hr' : 'hrs'}`;
    item.querySelector('.previous-time').innerHTML=`last week- ${data[index-1].timeframes.weekly.previous}${data[index-1].timeframes.weekly.previous ===1 ? 'hr' : 'hrs'}`;

       }
    })
}
const addMonthlyData = async ()=>{
    dailyButton.classList.remove('active');
    weeklyButton.classList.remove('active');
    monthlyButton.classList.add('active');
    const data=await getData();
   [ ...gridEl[0].children].forEach((item,index)=>{
       if(item.querySelector('.total-hours')){
       
    item.querySelector('.total-hours').innerHTML=`${data[index-1].timeframes.monthly.current}${data[index-1].timeframes.monthly.current <=1 ? 'hr' : 'hrs'}`;
    item.querySelector('.previous-time').innerHTML=`previous month- ${data[index-1].timeframes.monthly.previous}${data[index-1].timeframes.monthly.previous ===1 ? 'hr' : 'hrs'}`;

       }
    })
}

dailyButton.addEventListener('click',addDailyData);
weeklyButton.addEventListener('click',addWeeklyData);
monthlyButton.addEventListener('click',addMonthlyData);
addWeeklyData();