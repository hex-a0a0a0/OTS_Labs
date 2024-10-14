import FullQuiz from '../FullQuiz.jsx'

let questions = ["Минимальная помехоустойчивость", "Максимально достижимая помеха устойчивость", "Пропускная способность канала связи", "Максимальная глубина модуляции", "Максимальная скорость передачи"];
let initialAnswer = 2;
let text = <p>Вычислите энтропию источника, считая слова некоррелированными, а каждое слово состоящим из двух символов, по формуле:

H = [-P(MA)*lg P(MA) - P(MM)*lg P(MM) - P(AM)*lg P(AM) - P(AA)*lg P(AA)] / 2 / lg 2

Примечание: я исправил формулу, добавив пробелы и исправив некоторые ошибки в форматировании.
</p>
/*answer
ЭНТРОПИЯ Н = 0 . 9 2 3 
ИЗБЫТОЧНОСТЬR = 0 . 0 2 6 8*/
export default function Quest2() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz questions={questions} initialAnswer={initialAnswer} text={text}></FullQuiz>
    </div>
  )
}

