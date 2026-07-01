 let currentIndex = 0
    const question = document.getElementById('question')
    const buttonContainer = document.getElementById('buttons')
    const message = document.getElementById('message')
    const card = document.getElementById('card')
    const questions = [
      {
        text: "Give me a color that starts with the letter M",
        options: [
          { label: "Mlue", isCorrect: true },
          { label: "Magenta", isCorrect: false },
          { label: "Magnet", isCorrect: false },
          { label: "Mark", isCorrect: false }
        ]
      },
      {
        text: "Which adds an element to the end of an array?",
        options: [
          { label: ".push()", isCorrect: true },
          { label: ".pop()", isCorrect: false },
          { label: ".shift()", isCorrect: false },
          { label: ".append()", isCorrect: false }
        ]
      },
      {
        text: "What does === check that == does not?",
        options: [
          { label: "Scope", isCorrect: false },
          { label: "Value", isCorrect: false },
          { label: "Type ", isCorrect: true },
          { label: "Length", isCorrect: false }
        ]
      },
      {
        text: "What is the output of typeof null?",
        options: [
          { label: "null", isCorrect: false },
          { label: "object", isCorrect: true },
          { label: "undefined", isCorrect: false },
          { label: "boolean", isCorrect: false }
        ]
      },
      {
        text: "That's all I have",

      }
    ]
    function renderQuestion() {
      question.innerText = questions[currentIndex].text
      buttonContainer.innerHTML = ""
      message.innerHTML = ""
      card.classList.replace('bg-green-100', 'bg-slate-100')
      card.classList.replace('border-green-200', 'border-slate-200')
      for (let i = 0; i < questions[currentIndex].options.length; i++) {
        const option = questions[currentIndex].options[i]
        const button = document.createElement('button')
        button.innerText = option.label
        button.dataset.isCorrect = option.isCorrect
        button.classList.add('btn', 'hover:scale-110', 'transition-all', 'duration-200', 'cursor-pointer', 'active:scale-98', 'bg-slate-300')
        button.addEventListener('click', () => {
          checkAnswer(button)
        })
        buttonContainer.appendChild(button)
      }

    }
    function checkAnswer(button) {

      if (button.dataset.isCorrect === "true") {
        button.classList.replace('bg-slate-300', 'bg-green-300')
        card.classList.replace('bg-slate-100', 'bg-green-100')
        card.classList.replace('border-slate-200', 'border-green-200')
        message.innerText = "YAYYYY! Correct"
        setTimeout(() => {
          currentIndex++
          renderQuestion()
        }, 1000)
      }
      else {
        button.classList.replace('bg-slate-300', 'bg-red-300')
        button.classList.replace('cursor-pointer', 'cursor-not-allowed')
        button.classList.remove('active:scale-98', 'hover:scale-110')
        message.innerText = "EHHH! Try Again"
      }
    }


    renderQuestion(questions)