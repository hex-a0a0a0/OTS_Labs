import FullQuiz from "../FullQuiz.jsx";

let questions = [
    "Z(t)*U1(t)*dt > Z(t)*U0(t)*dt",
    "Z(t)*U0(t)*dt > Z(t)*U1(t)*dt",
    "Z(t)*U1(t)*dt > U0(t)*dt",
];
let initialAnswer = 1;
let text =
    "Исправьте одиночную ошибку в принятой кодовой комбинации, предварительно вычислив синдром.";

export default function Quest7(props) {
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
