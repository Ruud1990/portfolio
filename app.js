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

//message modal

const closeBtn = document.querySelector('.close-modal');

closeBtn.addEventListener('click' , function closeModal(){
    contactModal.classList.remove('show-modal');
})


//change language

const langBtnPl = document.querySelector('.pl');
const langBtnEng = document.querySelector('.eng');
const selectedLanguage= document.querySelector('.language-selected')


langBtnPl.addEventListener('click' , function(){
    selectedLanguage.textContent = 'PL ';
    document.querySelector('.name').innerHTML = `<h1 class="name" >
                    Cze????, nazywam si?? <span>Krzysztof Pro??ko</span><br>
                </h1>`;
    document.querySelector('.name-desc').textContent = 'Szukam pracy jako Front-end Web Developer. Moj?? pasj?? jest tworzenie stylowych, nowoczesnych i funkcjonalnych aplikacji.';
    document.querySelector('.about-me-title').innerHTML = `<h2>O <span>mnie</span></h2>`;
    document.querySelector('.about-me-left').innerHTML = `<h4>Informacje</h4>
                    <p>
                        Po 10 latach do??wiadczenia w handlu obecnie szukam pracy jako Front-end Web Developer. W celu przebran??owienia uko??czy??em p????roczny kurs - "CodersCamp by LiveChat". Podczas kursu ????czy??em teori?? z praktyk?? tworz??c projekty w 6-os. zespole pod okiem mentora. Mia??em mo??liwo???? uczy?? si?? z najlepszych ??r??de??, tj. FreeCodeCamp, FrontendMasters, Academind, CodeAcademy. Praca w grupie da??a mi mo??liwo???? poznania metodologii pracy wzorem pracy komercyjnej. Bazowa??a ona na SCRUM, pair programmingu, code review, MVP i dzieleniu si?? wzajemnie zadaniami. W nowej roli lubi?? mo??liwo???? rozwi??zywania problem??w na r????ne sposoby, planowania i implementowania rozwi??za??, kt??rych efekt ko??cowy daj?? wielk?? satysfakcj??. Prywatnie jestem fanem Lego, pi??ki no??nej oraz wycieczek g??rskich
                    </p>
                    <h5 class="stat-title">O?? czasu</h5>
                    <div class="timeline">
                    <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="timeline-duration">2021 - 2022</p>
                    <h5>Kurs Web Developer<span><br> CodersCamp by Livechat</span></h5>
                    <p>
                        Interaktywny plan nauki, praca w zespole przy projektach, wsparcie menotra, r????norodno???? materia????w. Tworzenie projekt??w przy u??yciu takich narz??dzi jak Html, Css, Javascript, React Js, Node Js, Express, Heroku, MongoDB, Figma, Trello, React Query Library.
                    </p>
                    </div>
                    <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="timeline-duration">2015 - present</p>
                    <h5>Przedstawiciel Handlowy<span><br> Maspex/??ywiec Zdr??j/Neuca</span></h5>
                    <p>
                       Podczas kariery jako Przedstawiciel Handlowy, zdoby??em wiele mi??kkich umiej??tno??ci, kt??re przydadz?? si?? w nowej roli. Potrafi?? si?? skutecznie komunikowa??, wsp????pracowa?? z innymi. Jestem dobrze zorganizowany oraz efektywny w dzia??aniu i planowaniu.
                    </p>
                </div>
                <div class="btn-container">
                        <a href="./data/KrzysztofPronkoCV 2023.pdf" download="KrzysztofPronkoCV.pdf" class="main-btn">
                            <span class="btn-text">CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                        <a href="./data/Pronko_Dyplom.pdf" download="pronko_dyplom.pdf" class="main-btn">
                            <span class="btn-text">Certyfikat</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>`;

                document.querySelector('.stat-title').textContent = 'Umiej??tno??ci';
                document.querySelector('.projects-title').innerHTML = `<h2 class="name" >
                    Moje <span>Portfolio</span><br>
                </h2>`;
                document.querySelector('.port-text').textContent = 'Poni??ej kilka moich projekt??w stworzonych przy u??yciu r????nych narz??dzi';
                document.querySelector('.gym-app').innerHTML = ` <h4>
                                    Be Fit Aplikacja
                                </h4>
                                <p>
                                   Aplikacja wyszukuj??ca ??wiczenia oraz przepisy. Mo??liwo???? przekalkulowania zapotrzebowania kalorycznego oraz stworzenia listy sk??adnik??w. W projekcie u??yto Html, Css, React, React router dom, react splide, eslint i prettier. Stworzono przy Create React App. 
                                </p>`
                document.querySelector('.restaurant').innerHTML = ` <h4>
                                    Strona Restauracji
                                </h4>
                                <p>
                                   Strona dla fikcyjnej restauracji. Prezentuje informacje, menu z opcj?? filtrowania, galeri??, opinie go??ci oraz sekcj?? Q and A. Zintegrowana z Messengerem. Skorzystano z Html, CSS i Vanilla Js oraz Parcel jako module bundler.
                                </p>`
                document.querySelector('.quiz-app').innerHTML = ` <h4>
                                    Quiz a'la Milionerzy
                                </h4>
                                <p>
                                   Qiuz pozwala u??ytkownikowi wcieli?? si?? w rol?? uczestnika programu TV i sprawdzi?? swoj?? wiedz?? w 15 pytaniach. Projekt powsta?? przy u??yciu Create React App, React, Html, Css i prettier. Udost??pniony na Netlify.
                                </p>`
                document.querySelector('.message-title').textContent = 'Wiadomo???? wys??ana';
                document.querySelector('.left-contact').innerHTML = `<h4>Skontaktuj si?? ze mn??!</h4>
                        <p>
                           Je??li jeste?? zainteresowany jak??kolwiek form?? wsp????pracy, napisz lub zadzwo??.
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Lokalizacja</span>
                                </div>
                                <p>
                                    : Legnica/Wroc??aw, Polska
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: pronko.krzysztof@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                    <span>Nr telefonu</span>
                                </div>
                                <p>
                                    <span>: 535335607</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>J??zyki</span>
                                </div>
                                <p>
                                    <span>: Polski, Angielski</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="https://www.facebook.com/krzyszztof.pe/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                
                                <a href="https://github.com/Ruud1990" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>`
                        document.querySelector('.contact-title').innerHTML = `<h2><span>Kontakt</span></h2>`;
                        document.querySelector('.contact-form').innerHTML = `<div class="input-control i-c-2">
                                <input type="text" required placeholder="IMI??" id="name">
                                <input type="email" required placeholder="EMAIL" id="email">
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="TYTU??" id="subject">
                            </div>
                            <div class="input-control">
                                <textarea name="" cols="15" rows="8" placeholder="Wiadomo????..." id="message"></textarea>
                            </div>
                            <button class="submit-btn">
                                <p>Wy??lij</p>
                            </button>`
})


langBtnEng.addEventListener('click' , function(){
    selectedLanguage.textContent = 'ENG';
    document.querySelector('.name').innerHTML = `<h1 class="name" >
                    Hi, I'm <span>Krzysztof Pro??ko</span><br>
                </h1>`;
    document.querySelector('.name-desc').textContent = 'I amm looking for a job as Front-end Web Developer, I love to create beautiful, modern and functional websites.';
    document.querySelector('.about-me-title').innerHTML = `<h2>About <span>me</span></h2>`;
    document.querySelector('.about-me-left').innerHTML = `
    <h4>Information About me</h4>
                    <p>
                        After ten years of expierence in sales, I am currently looking for a job as a Front-end
                        Developer. I finished half-one year course - "CodersCamp by LiveChat". During course I combined theory and practice in team under mentorship. I learned from the best sources such as: FreeCodeCamp, FrontendMasters, Academind, CodeAcademy. Thanks to my work in the group, I had the opportunity to learn the methodology of working in a project based on SCRUM, pair programming, code review, MVP and mutual task decomposition. I like to solving problems in different ways, planning and implementing solutions and I feel great satisfaction after finished projects. Privately I am fan of LEGO and mountain trips.
                    </p>
                    <h5 class="stat-title">My Timeline</h5>
                    <div class="timeline">
                    <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="timeline-duration">2021 - 2022</p>
                    <h5>Web Developer Course<span><br> CodersCamp by Livechat</span></h5>
                    <p>
                        Interactive learning plan, work in team, mentor support, variety of materials. Cooperate in projects used technologies and tools like Html, Css, Javascript, React Js, Node Js, Express, Heroku, MongoDB, Figma, Trello, React Query Library.
                    </p>
                </div>
                    <div class="timeline-item">
                    <div class="timeline-icon">
                        <i class="fas fa-briefcase"></i>
                    </div>
                    <p class="timeline-duration">2015 - present</p>
                    <h5>Sales Representative<span><br> Maspex/??ywiec Zdr??j/Neuca</span></h5>
                    <p>
                       During my career as a Sales Representative, I have gained many soft skills. I am communicative, well-organized, cooperative with others, effective in operations and good planner.
                    </p>
                </div>
                </div>
                    <div class="btn-container">
                        <a href="./data/KrzysztofPronkoCV 2023.pdf" download="KrzysztofPronkoCV.pdf" class="main-btn">
                            <span class="btn-text">CV</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                        <a href="./data/Pronko_Dyplom.pdf" download="pronko_dyplom.pdf" class="main-btn">
                            <span class="btn-text">Certificate</span>
                            <span class="btn-icon"><i class="fas fa-download"></i></span>
                        </a>
                    </div>
                `;

                document.querySelector('.stat-title').textContent = 'My Skills';
                document.querySelector('.projects-title').innerHTML = `<h2>My <span>Portfolio</span></h2>`;
                document.querySelector('.port-text').textContent = 'Here is some of my work that I have done in various programming languages.';
                document.querySelector('.gym-app').innerHTML = ` <h4>
                                    Be Fit App
                                </h4>
                                <p>
                                     Application for search gym exercises and recipes. Calculate calories and makes todo list of ingredients. Project uses Html, Css, React, React router dom, react splide, eslint and prettier. Made by Create React App.  
                                </p>`
                document.querySelector('.restaurant').innerHTML = ` <h4>
                                    Restaurant Page
                                </h4>
                                <p>
                                     Page for fiction restaurant. Presents information about restaurant, filtered menu, gallery, guests opinions and QA. Integrated with Messenger.Project uses Html, CSS and Vanilla Js. As module bundler uses Parcel.
                                </p>`
                document.querySelector('.quiz-app').innerHTML = ` <h4>
                                    Quiz App Millionaires
                                </h4>
                                <p>
                                   Quiz allows user test general knowledge in fifteen questions and feel like participant of the popular TV-Show. Project configurated by Create React App uses React, Html, Css and prettier. Deployed on Netlify.
                                </p>`
                document.querySelector('.message-title').textContent = 'Message sent';
                document.querySelector('.left-contact').innerHTML = `<h4>Contact me here</h4>
                        <p>
                           If you are interested in any form of cooperation, call or write to me!
                        </p>
                        <div class="contact-info">
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Location</span>
                                </div>
                                <p>
                                    : Legnica/Wroc??aw, Poland
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-envelope"></i>
                                    <span>Email</span>
                                </div>
                                <p>
                                    <span>: pronko.krzysztof@gmail.com</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-phone"></i>
                                    <span>Mobile number</span>
                                </div>
                                <p>
                                    <span>: 535335607</span>
                                </p>
                            </div>
                            <div class="contact-item">
                                <div class="icon">
                                    <i class="fas fa-globe-africa"></i>
                                    <span>Languages</span>
                                </div>
                                <p>
                                    <span>: Polish, English</span>
                                </p>
                            </div>
                        </div>
                        <div class="contact-icons">
                            <div class="contact-icon">
                                <a href="https://www.facebook.com/krzyszztof.pe/" target="_blank">
                                    <i class="fab fa-facebook-f"></i>
                                </a>
                                
                                <a href="https://github.com/Ruud1990" target="_blank">
                                    <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>`
                        document.querySelector('.contact-title').innerHTML = `<h2>Contact<span>me</span></h2>`;
                        document.querySelector('.contact-form').innerHTML = `<div class="input-control i-c-2">
                                <input type="text" required placeholder="YOUR NAME" id="name">
                                <input type="email" required placeholder="EMAIL" id="email">
                            </div>
                            <div class="input-control">
                                <input type="text" required placeholder="ENTER SUBJECT" id="subject">
                            </div>
                            <div class="input-control">
                                <textarea name="" cols="15" rows="8" placeholder="Message Here..." id="message"></textarea>
                            </div>
                            <button class="submit-btn">
                                <p>Send message</p>
                            </button>`

})




PageTransitions();

