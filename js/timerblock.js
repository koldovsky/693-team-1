(function (){
    const date=document.querySelector('.Date')
    const timer=document.querySelector('.Clock')
    const messages=document.querySelector('.Message')
    function watchTime(){
      date.innerHTML=new Date().toLocaleDateString()
      timer.innerHTML=new Date().toLocaleTimeString()
      let hour=new Date().getHours()
      console.log(hour)
      if(hour>=12)
      {
        messages.innerHTML='Good evening'
      }
      else{
        messages.innerHTML='Good morning'
      }
        }
    setInterval (watchTime,1000)
  })()