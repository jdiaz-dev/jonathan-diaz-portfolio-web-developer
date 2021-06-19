
/* to go with elements after to press bottons of header */
class GoToElements{
    constructor(){
        this.linkBottonsWithSection()
    }
    getBottons(){
        const bottons = []
        let about = document.querySelector('.about')
        bottons.push(about)
        let work = document.querySelector('.work')
        bottons.push(work)
        let contact = document.querySelector('.contact')
        bottons.push(contact)
        
        return bottons

    }
    getSectionsOfPages(){
        const sections = []
        let aboutMe = document.querySelector('.about-me')
        sections.push(aboutMe)
        let projects = document.querySelector('.projects')
        sections.push(projects)
        let contactMe = document.querySelector('.contact-me')
        sections.push(contactMe)

        return sections
    }
    linkBottonsWithSection(){
        const bottons = this.getBottons() 
        const sections = this.getSectionsOfPages() 
        
        for(let i = 0; i < bottons.length; i++){
            bottons[i].addEventListener('click', function(){
                sections[i].scrollIntoView()
            })
        }
    }
}

function displayHideScrollEffect(){
    let body = document.querySelector('body')
    body.onscroll =  function(e){

        let scrollY = window.pageYOffset || document.documentElement.scrollTop;
        let header = document.querySelector('header');

        if(scrollY <= this.lastScroll ){
            header.style.visibility = 'visible'
            if(scrollY == 0){
                header.style.opacity = '1'
            }

        }else{
            header.style.visibility = 'hidden'; 
            header.style.opacity = '0.96'
        }

        this.lastScroll = scrollY;
    }
}

window.onload = function(){
    const goToElements = new GoToElements()
    //----------------
    displayHideScrollEffect()
    
    
}











