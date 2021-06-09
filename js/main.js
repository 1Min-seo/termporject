const email=document.querySelector('input.id')
const pass=document.querySelector('input.pass')
const button=document.querySelector('input.button')
const msg=document.querySelector('#msg')

button.addEventListener('mouseover',(e)=>{
    if(email.value=='' || pass.value ==''){
        msg.style.display='block'
        setTimeout(()=>{
            msg.style.display='none'
        },3000)
        return
    }
})


