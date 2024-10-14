import FullQuiz from '../FullQuiz.jsx'

let questions = ["G0*Um^2*T/2", "G0*Um^Z*T/Z", "G0*T/2"];
let initialAnswer = 1;
let text = "Каково выражение для расчета дисперсии шума на выходе интегратора";

export default function Quest11(props) {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}
