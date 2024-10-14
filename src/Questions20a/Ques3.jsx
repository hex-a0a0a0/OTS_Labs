import FullQuiz from '../FullQuiz.jsx'

let questions = ["Количество правильных принятых сообщений", "Вероятность передачи 1", "Вероятность передачи 0", "Отношение числа ошибок к общему числу сообщений N, при N стремящемся к бесконечности","Количество ошибок"];
let initialAnswer = 4;
let text = "Что такое вероятность ошибки?";

export default function Quest3() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

