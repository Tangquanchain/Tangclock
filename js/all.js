;(function() {
    const seconds = document.querySelector('.second-arrow');
    const mins = document.querySelector('.min-arrow');
    const hour = document.querySelector('.hour-arrow');
    
    function setClock() {
      let nowData = new Date();//拿到完整的時間物件
//一個圓360度，分.秒一格有6度(360/60)
//一個時鐘有12個小時，時一格有30度(360/12)

//取得秒.分.時各個角度

      let secondsDeg = nowData.getSeconds() * 6+180; // 秒針1格6度(360/60)(起始位置在6點的位置，所以+180度)
 
      let minsDeg = nowData.getMinutes() * 6 + nowData.getSeconds() * (6/60); // 分針1格6度(360/60) + 秒針/10//這6度要分成60秒，讓分針於畫面中有移動的效果，移動的計算方式是依照目前秒數來計算

      let hourDeg = nowData.getHours() * 30+ nowData.getMinutes() * (30/60)+180; // 時針1格30度(360/12) + 這 30 度要分成 60 分鐘讓時針有中間的移動,而移動多少依照目前的分鐘，分針/2(起始位置在6點的位置，所以+180度)
                                                                                    //30度裡面分配60分鐘

      seconds.style.transform = `rotate(${secondsDeg}deg)`;
      mins.style.transform = `rotate(${minsDeg}deg)`;
      hour.style.transform = `rotate(${hourDeg}deg)`;
    }
    

// 計時器 setInterval, setTimeout, requestAnimationFrame

setClock(); // 初始化畫面
setInterval(setClock, 1000);  // 每隔1千毫秒執行setClock一次


// function timeoutHandler(){
//     setClock();
//     setTimeout(timeoutHandler, 1000);//自己呼叫自己，達到連續執行的效果
// }
// setTimeout(timeoutHandler, 1000);// 延遲1秒執行timeoutHandler


// function animationHandler(){
//     setClock();
//     window.requestAnimationFrame(animationHandler);
// }
// window.requestAnimationFrame(animationHandler); //專門處理畫面的setTimeout


  })();
