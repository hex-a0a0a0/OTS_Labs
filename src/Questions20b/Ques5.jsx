import FullQuiz from "../FullQuiz.jsx";

let questions = [
    "Обеспечивающий вероятность ошибки равную 0.5",
    "Обеспечивающий вероятность ошибки равную 1",
    "Обеспечивающий вероятность ошибки равную 0",
    "Обеспечивающий минимальную вероятность ошибки",
];
let initialAnswer = 5;
let text =
    "Введите (по одному символу!) синдром, соответсвующий отсутствию ошибок:";

export default function Quest5() {
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
