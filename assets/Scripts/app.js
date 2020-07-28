$(document).ready(function(){
    $('.section--testimonials__container').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  dots: true,
                  autoplay: true,
                  centerMode: true,
                  margin: '40px',
                  variableWidth: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true,
                autoplay: true,
                centerMode: false,
                variableWidth: false
                }
            }
        ]
    });
  });
  const btn = document.getElementById('btn')
  const input = document.getElementById('Input')
  const errMsg = document.getElementById('err')
  errMsg.innerText =''
  const onBtnSumit = () => {
    if(input.value.length > 0){
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)){
        errMsg.innerText ='Success'
        input.value ='',
        setTimeout(()=>{
            errMsg.innerText =''
        },4000)
        }
        else{
            errMsg.innerText ='Please enter a valid email'
            return (false)
        }
       
    }
    else{
        errMsg.innerText ='Your Input form is empty'
    }
    
  }
  btn.addEventListener('click', onBtnSumit)