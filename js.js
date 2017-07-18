let scrollSpy = {};
scrollSpy.init = () => {

  currentSection = () => {
    let current;
    let sections = document.querySelectorAll('.section')
    sections.forEach(section => {
      let aboveWindow = (window.scrollY >= section.offsetTop - (window.innerHeight / 2))
      let belowWindow = window.scrollY <= (section.offsetTop + section.offsetHeight - (window.innerHeight / 2))
      if ( aboveWindow && belowWindow ) current = section.id
    })
    return current
  }

  updateMenu = (section) => {
    document.querySelectorAll('nav li').forEach((li) => {
      li.classList = []
    })
    document.querySelector('li[data-section="' + section + '"]').classList.add('active')
  }

  window.addEventListener("scroll", (e) => {
    this.updateMenu(this.currentSection())
  } )
}

scrollSpy.init()
