import FullQuiz from '../FullQuiz.jsx'

let questions = ["Если Z<V, то на выходе 1; если Z>V, то на выходе 0 ", "Усиливает Z(t) ", "Ограничивает входной сигнал", "Если Z>V, то на выходе 1; если Z<V, то на выходе 0", "Осуществляет демодуляцию входного сигнала"];
let initialAnswer = 4;
let text = "Как работает пороговое устройство, если на на входе процесс - Z, а пороговое напряжение - V?";

export default function Quest5() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

