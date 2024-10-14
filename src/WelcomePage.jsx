import App from './App'
import App23 from './App23'
import App20a from './App20a'
import App20b from './App20b'
import { createSignal, Show, createEffect } from "solid-js";

export default function WelcomePage(props) {
  let [labNum, setLabNum] = createSignal(0);
  
  return (
    <>
      <Show when={labNum() === 1}>
        <App />
      </Show>
      <Show when={labNum() === 2}>
        <App23/>
      </Show>
      <Show when={labNum() === 3}>
        <App20a/>
      </Show>
      <Show when={labNum() === 4}>
        <App20b/>
      </Show>
      <Show when={labNum() === 0}>
        <div class="container-2xl flex flex-col items-center mt-4">
          <p class="font-mono font-extrabold text-4xl mb-4">Лабораторные работы ОТС</p>
          <p class="font-mono font-normal text-2xl mb-2">Выберите номер соответствующей лабораторной работы</p>
          <div class="container flex flex-wrap flex-1 justify-center">
            <button onClick={() => setLabNum(1)} className="w-64 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-lg shadow-lg">Лаб. работа №16</button>
             <button onClick={() => setLabNum(2)} className="w-64 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-lg shadow-lg">Лаб. работа №23</button>
             <button onClick={() => setLabNum(3)} className="w-64 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-lg shadow-lg">Лаб. работа №20а</button>
             <button onClick={() => setLabNum(4)} className="w-64 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-lg shadow-lg">Лаб. работа №20б</button>
          </div>
        </div>
      </Show>
    </>
  )
}
