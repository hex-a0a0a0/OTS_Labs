import {
  erf
} from 'mathjs'

import Plotly from 'plotly.js-dist'

import { createSignal, createEffect, on } from "solid-js";

const s = Math.random() + 1;

function calculateProbabilities(V, Vm) {
  let p10 = 1 - (1/2)*(1+erf(V/s))
  let p01 = (1/2)*(1+erf((V-Vm)/s))

  return [p10, p01];
}

function Table(props) {
  return (
    <div class="table">
      <span>{props.first}</span>
      <span>{props.second}</span>
      <span>{props.third}</span>
    </div>
  )
}
export default function Laboratory(props) {
  const [valueUM, setValueUM] = createSignal(0);

  const [processed, setProcessed] = createSignal(false);
  const [array, setArray] = createSignal(false);

  let callback = () => {
    setProcessed(true);
  };

  createEffect(on(() => processed(), () => {
    if (processed()) {
      let arr = [];
      let x_arr = [];
      let y_arr_1 = [];
      let y_arr_2 = [];
      let i = -3;
      let vmax = 8;

      let Um = Math.min(Math.max(valueUM(), 0), 5);
  
      while (i <= vmax) {
        x_arr.push(i);
        const [p10, p01] = calculateProbabilities(i, Um);
        let first = Math.round(p10*1000);
        let second = Math.round(p01*1000);
        y_arr_1.push(p10);
        y_arr_2.push(p01);
        arr.push(<Table first={first.toString()} second={second.toString()} third={i.toString()}></Table>)
        i = i + 0.5;
      }
      setArray(arr);

      const trace1 = {
        x: x_arr,
        y: y_arr_1,
        type: 'scatter'
      }

      const trace2 = {
        x: x_arr,
        y: y_arr_2,
        type: 'scatter'
      }

      const layout = {
        title: "График зависимости вероятностей ошибок от порогового напряжения",
        showlegend: false
      }
      const data = [trace1, trace2];

      Plotly.newPlot('plot', data, layout, {staticPlot: true});
    }
  }));

  return (
    <main>
      <p class="font-mono text-4xl font-extrabold text-center mb-4">КОМПЬЮТЕРНЫЙ ЭКСПЕРИМЕНТ</p>
      <p class="font-mono font-normal text-2xl text-center">Исследуем зависимость вероятностей ошибок p(1|0) p(0|1) от порогового напряжения V(вольт) при задаваемом напряжении сигнала Vm.</p>
      <Show when={!processed()}>
        <div class="bg-white flex flex-col items-center m-4">
          <span class="font-mono text-xl font-extrabold text-center mb-2">Введите напряжение сигнала Vm (от 0 до 5):   </span>
          <input
            class="border border-slate-950 rounded-lg px-2"
            type="text"
            onInput={(e) => setValueUM(e.target.value)}
          />
          <button className="submit w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg mt-4" onClick={callback}> Подтвердить
          </button>
        </div>
      </Show>
      <Show when={processed()}>
        <div class="container mx-auto bg-white flex flex-row items-center m-4">
          <Table first={"N(1|0)"} second={"N(0|1)"} third={"V"}></Table>
          {array()}
        </div>
        <div id="plot"></div>
      </Show>
    </main>
  )
}
