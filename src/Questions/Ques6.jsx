import FullQuiz from '../FullQuiz.jsx'

let questions = ["Оно детектирует сигнал", "Если сигналы на входах СУ различны, то на выходе 0, если одинаковы, то 1", "СУ осуществляет фильтрацию", "СУ ограничивает сигнал", "Если сигнал на обоих входах СУ одинаковы, то на выходе СУ - 0, если различны, то 1"];
let initialAnswer = 5;
let text = "Как работает Сравнивающее Устройство (СУ)?";

export default function Quest6() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}
