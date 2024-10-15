import counter from "./Counter";
const [count, setCount] = counter;

import idSignal from "./IDSignal";
const [id, setID] = idSignal;

function getScore(count) {
  let score = Math.round((count / 26) * 100);

  if (score >= 85) {
    return ["text-green-600", "5"];
  }

  if (score >= 70) {
    return ["text-lime-600", "4"];
  }

  if (score >= 50) {
    return ["text-amber-500", "3"];
  }

  return ["text-rose-500", "2"];
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));

    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

let colors = [
  "text-slate-700",
  "text-red-700",
  "text-orange-700",
  "text-green-700",
  "text-blue-700",
  "text-violet-700",
  "text-fuchsia-700",
  "text-rose-700",
  "text-cyan-700",
  "text-teal-700",
  "text-pink-700",
  "text-emerald-700",
  "text-zinc-700",
];

let color = shuffleArray(colors)[0];

export default function Results(props) {
  return (
    <div class="container flex flex-col items-center">
      <p class="font-mono text-4xl mb-4">Лабораторная работа закончена!</p>
      <p class="font-mono text-3xl mb-4">
        Студент: <span class={color}>{id}</span>
      </p>
      <p class="font-mono text-2xl mb-2">Количество заданий</p>
      <span class="font-mono text-4xl mb-2 text-blue-600">{26}</span>
      <p class="font-mono text-2xl mb-2">Количество правильных ответов</p>
      <span class="font-mono text-4xl mb-2 text-green-600">{count()}</span>
      <p class="font-mono text-2xl mb-2">Ваша оценка</p>
      <div class="font-mono text-4xl">
        <span class={getScore(count())[0]}>{getScore(count())[1]}</span>
      </div>
    </div>
  );
}
