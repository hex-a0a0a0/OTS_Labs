import MultiFieldForm from '../MultiFieldForm.jsx'
import { createSignal, onMount, For } from "solid-js";

import {
  erf
} from 'mathjs'

export default function Quest11(props) {
  const [processTag, setProcessTag] = createSignal(false);

  let options = [["Введите аргумент интеграла Лапласа для расчета p(1|0)","4"], ["Введите аргумент интеграла Лапласа для расчета p(0|1)","3"]];

  const arg1 = Math.round(Math.random()*2 * 10) / 10;
  const arg2 = Math.round(Math.random() * 10) / 10;
  const s = (Math.floor(Math.random()*15) + 1);
  const V = Math.round(arg1 * s * 10) / 10;
  const Um = Math.round(arg2 * s * 10) / 10;

  const arg = Math.round((arg1 - arg2) * 10) / 10;

  options[0][1] = arg1.toString();
  options[1][1] = (arg).toString();

  let p10 = Math.round((1 - (1/2)*(1+erf(arg1))) * 1000) / 1000;
  let p01 = Math.round(((1/2)*(1+erf(arg))) * 1000) / 1000;
  
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
      <h2 class="font-mono text-2xl font-normal mb-2 text-center">Для заданных V, Um, s:</h2>
        <p class="font-mono text-xl font-bold mb-2">V = {V} <br />Um = {Um} <br />s = {s}</p>
      <MultiFieldForm options={options} processTag={setProcessTag}></MultiFieldForm>
      <Show when={processTag()}>
        <p class="font-mono text-2xl font-normal mb-2 text-center">Результаты в виде вероятностей:</p>
        <p class="font-mono text-xl font-bold mb-2">p(1|0) = {p10}</p>
        <p class="font-mono text-xl font-bold mb-2">p(0|1) = {p01}</p>
      </Show>
    </div>
  )
}
