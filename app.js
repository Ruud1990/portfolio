const sections = document.querySelectorAll('.section');
const sectBtns = document.querySelectorAll('.controlls');
const sectBtn = document.querySelectorAll('.control');
const allSections = document.querySelector('.main');

function PageTransitions(){
    // active class btn
    for(let i = 0; i < sectBtn.length; i++){
        sectBtn[i].addEventListener('click', function() {
            let currentBtn = document.querySelectorAll('.active-btn');
            currentBtn[0].className = currentBtn[0].className.replace('active-btn', '');
            this.className += ' active-btn';
        })
    }


    // active section
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        console.log(id);
        if (id) {
            // delete selected from other buttons
            sectBtns.forEach((btn) => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active');

            // hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            }) 

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    } )

    // toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', ()=>{
        let element = document.body;
        element.classList.toggle('light-mode')
    })
}


//contact form
const messageButton = document.querySelector('.submit-btn');
const contactModal = document.querySelector('.contact-modal');

messageButton.addEventListener('click', function sendMail(event){
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    }

    const serviceID = 'service_x9e4stv';
    const templateID = 'template_1iibw3c';
    if(params.name === ''){
        console.log('error-name');
        
    } 
    if (params.email === ''){
        console.log('error-email');
    }
    else {
        event.preventDefault()
        console.log(params.name, params.email)
        emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
                document.getElementById('name').value = '';
                document.getElementById('email').value = '';
                document.getElementById('subject').value = '';
                document.getElementById('message').value = '';
                console.log(res);
                contactModal.classList.add('show-modal');
               
            })
        .catch((err) => console.log(err));
    }
})

const closeBtn = document.querySelector('.close-modal');

closeBtn.addEventListener('click' , function closeModal(){
    contactModal.classList.remove('show-modal');
})


PageTransitions();