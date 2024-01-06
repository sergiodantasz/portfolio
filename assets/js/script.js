const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.replace('hidden', 'shown')
    } 
  })
})

const sections = document.querySelectorAll('.hidden')
sections.forEach(section => observer.observe(section))
