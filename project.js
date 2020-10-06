var SubmitButton = document.querySelector('.sendmssg');
SubmitButton.addEventListener('click', submitMssg);
function submitMssg(e) {
    e.preventDefault();
    var name='';
    var mail ='';
    var mssg='';
    
    
    name =document.getElementById('name').value; 
    mail =document.getElementById('mail').value;
    mssg=document.getElementById('message').value;
    console.log(name);
    console.log(mail);
    console.log(mssg);
   
    if (name =='') {
        alert('You must input your Name');
        return;
    } else if (mail =='') {
        alert('Please you must provide your Email Address');
        return;
    } else if (mssg =='') {
        alert('Message is empty plese write your message');
        return;
    } else {
        alert('Your Message has been sent Thank-You');
        window.location.reload();
    }
    
}