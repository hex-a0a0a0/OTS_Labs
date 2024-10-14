import FullQuiz from '../FullQuiz.jsx'

let questions = ["p = p(1)*p(0|1)+p(0)*p(1|0)" , "p = p(1)*p(0|1)", "p = p(0)*p(1|0)"];
let initialAnswer = 1;
let text = "Какова формула для рассчета средней вероятности ошибки p?";

export default function Quest14() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}