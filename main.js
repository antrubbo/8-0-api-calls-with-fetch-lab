let URL = "https://opentdb.com/api.php?amount=10&category=12&difficulty=hard&type=multiple"

let main = document.querySelector("main")
let form = document.querySelector("form")

function onSubmit() {
    fetch(URL)
    .then(res => res.json())
    .then(trivia => {
        trivia.results.forEach(q => {
            let card = document.createElement("article")
            let category = document.createElement("h2")
            let question = document.createElement("p")
            let answer = document.createElement("p")
            let button = document.createElement("button")
            
            card.setAttribute("class", "card")
            answer.setAttribute("class", "hidden")

            category.textContent = q.category
            question.textContent = q.question
            answer.textContent = q.correct_answer
            button.textContent = "Show Answer"

            card.append(category, question, button, answer)
            main.append(card)

            button.addEventListener("click", () => {
                answer.removeAttribute("class")
            })
        })
    })
}

form.addEventListener("submit", (evt) => {
    evt.preventDefault()
    onSubmit()
})



