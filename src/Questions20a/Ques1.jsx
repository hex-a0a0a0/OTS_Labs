import FullQuiz from '../FullQuiz.jsx'

let questions = ["Пропускная способность канала связи", "Скорость передач информации", "Способность системы связи препятствовать мешающему влияни помех", "Вид модуляции", "Динамический диапазон сигнала"];
let initialAnswer = 3;
let text = <p> P(A) и P(M) - безусловные вероятности букв А и М. Условная вероятность того, что второй буквой будет А, если первая была буква М, обозначена P(A/M). Остальные условные вероятности обозначены аналогично.

P(A) = 0,50
P(M) = 0,50
P(A/A) = 0,60
P(M/A) = 0,40
P(A/M) = 0,80
P(M/M) = 0,20

ЗАПИШИТЕ ЭТИ ВЕРОЯТНОСТИ:

Вычислите вероятность каждого слова из двух букв (известно, что P(МА) = P(М) * P(А/М) и т.д.)."
</p>
/*answer
P(MA) = P(M) * P(A/M) = 0,50 * 0,80 = 0,40
P(MM) = P(M) * P(M/M) = 0,50 * 0,20 = 0,10
P(AM) = P(A) * P(M/A) = 0,50 * 0,40 = 0,20
P(AA) = P(A) * P(A/A) = 0,50 * 0,60 = 0,30*/
export default function Quest1() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

