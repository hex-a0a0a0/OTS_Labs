import FullQuiz from '../FullQuiz.jsx'

let questions = ["Пропускная способность канала связи", "Скорость передач информации", "Способность системы связи препятствовать мешающему влияни помех", "Вид модуляции", "Динамический диапазон сигнала"];
let initialAnswer = 3;
let text = "Что такое помехоустойчивость?";

export default function Quest1() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

