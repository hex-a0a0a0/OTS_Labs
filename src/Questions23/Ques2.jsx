import FullQuiz from '../FullQuiz.jsx'

let questions = ["Минимальная помехоустойчивость", "Максимально достижимая помеха устойчивость", "Пропускная способность канала связи", "Максимальная глубина модуляции", "Максимальная скорость передачи"];
let initialAnswer = 2;
let text = "Что такое потенциальная помехоустойчивость?";

export default function Quest2() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

