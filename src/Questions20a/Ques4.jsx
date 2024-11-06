/*
QUESTION:
        Вычислите вероятности 1 и 0 в кодовых комбинациях нового двочного кода.
ANSWER:
        Введите вероятность появления 1, т.е. P(1): P(1) = 0.579
        Введите вероятность появления 0, т.е. P(0): P(0) = 0.421
*/

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
