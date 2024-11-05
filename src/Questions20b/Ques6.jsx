import FullQuiz from "../FullQuiz.jsx";

let questions = ["I = 1", "I = 2", "I = 3", "I = 4", "I = 5", "I = 6", "I = 7"];
let initialAnswer = 1;
let text =
    "Введите (по одному символу!) синдром, соответсвующий ошибке в символе 0(I), где I - номер символа, отсчитываемый справа.";

export default function Quest6(props) {
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
