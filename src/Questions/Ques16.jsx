import FullQuiz from '../FullQuiz.jsx'

let questions = ["Максимальна" , "Минимальна"];
let initialAnswer = 2;
let text = "Какова средняя вероятность ошибки, если пороговое напряжение V - оптимально?";

export default function Quest16() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}