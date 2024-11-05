import FullQuiz from "../FullQuiz.jsx";

let questions = [
  "Минимальная",
  "Равная 1",
  "Максимальная",
  "Равная 0.5",
  "Равная 0",
];
let initialAnswer = 1;
let text =
  "Какая вероятность ошибки соответствует потенциальной помехоустойчивости?";

export default function Quest4() {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <FullQuiz
        questions={questions}
        initialAnswer={initialAnswer}
        text={text}
      ></FullQuiz>
    </div>
  );
}
