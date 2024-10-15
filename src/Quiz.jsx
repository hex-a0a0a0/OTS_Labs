import { createSignal, createEffect, on } from "solid-js";

function shuffleArray(array, answer) {
  let num = answer - 1;
  let element = array[num];
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  num = array.indexOf(element);

  return [array, num];
}

export default function Quiz(props) {
  const [array, num] = shuffleArray(props.options, props.initialAnswer);
  const options = (
    <For each={array}>
      {(element, index) => (
        <p class="font-mono text-xl font-normal mt-2">
          {index() + 1 + ") " + element}
        </p>
      )}
    </For>
  );

  const [answer, setAnswer] = props.shuffledAnswer;

  setAnswer(num + 1);

  return <div>{options}</div>;
}
