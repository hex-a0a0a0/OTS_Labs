import { createSignal, createEffect, on } from "solid-js";
import MultiFieldForm from "./MultiFieldForm.jsx";
import Quiz from "./Quiz.jsx";

export default function FullQuiz(props) {
  let questions = props.questions;
  let initAns = props.initialAnswer;
  const [answer, setAnswer] = createSignal(0);
  const [option, setOption] = createSignal([["", "0"]]);

  createEffect(
    on(
      () => answer,
      () => {
        setOption([["", answer().toString()]]);
      }
    )
  );

  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
      <h2 class="font-mono text-2xl font-normal mb-2">{props.text}</h2>
      <Quiz
        options={questions}
        initialAnswer={initAns}
        shuffledAnswer={[answer, setAnswer]}
      ></Quiz>
      <p class="font-mono text-xl font-bold mt-4">
        Введите номер правильного ответа:
      </p>
      <MultiFieldForm options={option()}></MultiFieldForm>
    </div>
  );
}
