import FullQuiz from '../FullQuiz.jsx'

let questions = ["p(1|0) = 1-F(V/s)", "p(1|0) = F((V-Um)/s)", "p(1|0) = F(V/s)"];
let initialAnswer = 1;
let text = "Какова формула для рассчета p(1|0) если амплитуда импульса Um, среднеквадратическое значение нормального шума s, пороговое напряжение V";

export default function Quest9() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}