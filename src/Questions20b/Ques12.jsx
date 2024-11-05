import FullQuiz from "../FullQuiz.jsx";

let questions = ["1-F(a*h0)", "F(a*h0)", "1-F(h0)"];
let initialAnswer = 1;
let text =
    "Каково выражение для расчета вероятности ошибки при оптимальном приеме";

export default function Quest12(props) {
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
