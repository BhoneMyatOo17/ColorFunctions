 const circles = document.querySelectorAll('[data-bg]')
    const square = document.getElementById('square')

    circles.forEach(circle => {
      const background = circle.dataset.bg
      const border = circle.dataset.border
      circle.addEventListener('mouseenter', (e) => {
        square.classList.replace("bg-slate-100", background)
        square.classList.replace("border-slate-400", border)

      })
      circle.addEventListener('mouseleave', () => {
        square.classList.replace(background, "bg-slate-100")
        square.classList.replace(border, "border-slate-400")
      })
    })