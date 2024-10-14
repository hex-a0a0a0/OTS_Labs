import FullQuiz from '../FullQuiz.jsx'

let questions = ["Vopt =  Um/2 - (M2/Um)*ln(p(1)/p(0))" , "Vopt = (M2/Um)*ln(p(1)/p(0))", "Vopt = Um/2 - M2*ln(p(1)/p(0))"];
let initialAnswer = 1;
let text = "Какова формула для рассчета Vopt если амплитуда импульса Um, дисперсия шума M2, вероятности передачи 1 и 0: p(1) и p(0)?";

export default function Quest17() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}