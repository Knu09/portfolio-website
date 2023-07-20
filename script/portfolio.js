/*Projects Database*/

let projectsHTML = '';

projects.forEach((project) => {
    projectsHTML += `
        <div class="project hidden-scroll-to-left ${project.hidden}">
            <img src="images/${project.image}">
            <div class="project-modal">
                <h1>${project.name}</h1>
                <p>${project.description}</p>
                <a href="${project.link}" target="_blank">
                    <i class="${project.iconLink}"></i>
                </a>
            </div>
        </div>
<!--        <div class="project hidden">-->
<!--            <img src="images/project1-image.png">-->
<!--            <div class="project-modal"></div>-->
<!--        </div>-->
<!--        <div class="project hidden">-->
<!--            <img src="images/project1-image.png">-->
<!--            <div class="project-modal"></div>-->
<!--        </div>-->
        `;
});



document.querySelector('.js-projects').innerHTML = projectsHTML;

/*Hamburger Menu bar*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-bar-container");
const navLink = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle('active');
});

navLink.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove('active');
    })
})


/*Hide/Show Navigator Bar*/
let lastScrollTop = 0;
navbar = document.getElementById("navbar");
home = document.querySelector(".home-modal")

window.addEventListener("scroll", () => {
    let scrollTop = window.pageYOffset || document
        .documentElement.scrollTop;

    if(scrollTop > lastScrollTop) {
        navbar.style.top="-84px";
        navMenu.style.opacity="0";

    } else {
        navbar.style.top="0";
        navMenu.style.opacity="1";
    }
    console.log(scrollTop)
    if (scrollTop > 1000) {
        home.style.bottom="20px";
    } else {
        home.style.bottom="-100%";
    }

    lastScrollTop = scrollTop;
});


/* About Me activation link */
let tabLinks = document.querySelectorAll('.tab-links');
let contentTabs = document.querySelectorAll('.tab-contents');
let active = document.querySelector('.tab-links.active-link')

function openTab(tabName) {
    tabLinks.forEach((tabLink) => {
        tabLink.classList.remove('active-link');
    });
    contentTabs.forEach((contentTab) => {
        contentTab.classList.remove('active-tab');
    });

    event.currentTarget.classList.add('active-link')
    document.getElementById(tabName).classList.add('active-tab')
}

/*Project - Show more/Show less*/

const seeMoreBtn = document.querySelector('.js-show-more-btn');
const hiddenProjects = document.querySelectorAll('.hidden');


seeMoreBtn.addEventListener('click', () => {
    hiddenProjects.forEach(projects => {
        projects.classList.toggle('show');
    })


    if (seeMoreBtn.innerText === 'Show more') {
        seeMoreBtn.innerText = 'Show less';
    } else {
        seeMoreBtn.innerText = 'Show more ';
    }
});

/*Google Form Sheets*/

const scriptURL = 'https://script.google.com/macros/s/AKfycbzGqiHw3rHGQaaGXn4OSkVXNVmGdD6dQBisG90Jt8uDznLSyEq5OivIMsbrtjLyF1qz/exec'
const form = document.forms['submit-to-google-sheet']
const submitBtnMsg = document.getElementById('submitted-msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    submitBtnMsg.innerHTML = "Successfully Submitted!"
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            setTimeout(() => {
                submitBtnMsg.innerHTML = "";
            }, 1000)
            form.reset();
        })
        .catch(error => console.error('Error!', error.message))
});

/*Animated Scroll*/

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show-scroll');
        } else {
            entry.target.classList.remove('show-scroll');
        }
    })
})

const hiddenRightElements = document.querySelectorAll('.hidden-scroll-to-right');
const hiddenLeftElements = document.querySelectorAll('.hidden-scroll-to-left');
hiddenRightElements.forEach((elem) => observer.observe(elem));
hiddenLeftElements.forEach((elem) => observer.observe(elem));


