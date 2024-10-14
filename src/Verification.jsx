import App from './App'
import App23 from './App23'
import { createSignal, Show, createEffect } from "solid-js";
import idSignal from "./IDSignal"

let [id, setID] = idSignal;

export default function Verification(props) {
  return (
    <>
        <div class="bg-white flex flex-col items-center m-2">
          <h1 class="font-mono text-3xl font-extrabold text-center mb-4">Введите вашу фамилию, имя и номер группы</h1>
          <input
            class="border border-slate-950 rounded-lg px-4 pt-1 pb-1 w-80 text-lg"
            type="text"
            onInput={(e) => setID(e.target.value)}
            placeholder = "Иванов Иван БИН2202"
            maxlength="120"
            required
          />
        </div>
    </>
  )
}
