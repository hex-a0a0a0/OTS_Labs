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
    "Определите синдромы, как прноизведение принятой комбинации (вектор-строка) на транспонированную проверочную матрицу H.";

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
