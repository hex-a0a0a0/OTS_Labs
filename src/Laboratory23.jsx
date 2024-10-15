import { erf } from "mathjs";

import Plotly from "plotly.js-dist";

import { createSignal, createEffect, on } from "solid-js";

function calculateProbabilities(h) {
  let pAM = 1 - (1 / 2) * (1 + erf(h / Math.sqrt(2)));
  let pFM = 1 - (1 / 2) * (1 + erf(h));
  let pPM = 1 - (1 / 2) * (1 + erf(h * Math.sqrt(2)));

  return [pAM, pFM, pPM];
}

function Table(props) {
  return (
    <div class="table">
      <span>{props.first}</span>
      <span>{props.second}</span>
      <span>{props.third}</span>
      <span>{props.fourth}</span>
    </div>
  );
}
export default function Laboratory(props) {
  const [processed, setProcessed] = createSignal(false);
  const [array, setArray] = createSignal(false);

  let callback = () => {
    setProcessed(true);
  };

  createEffect(
    on(
      () => processed(),
      () => {
        if (processed()) {
          let arr = [];
          let x_arr = [];
          let y_arr_1 = [];
          let y_arr_2 = [];
          let y_arr_3 = [];
          let i = 0;
          let vmax = 6;

          while (i <= vmax) {
            x_arr.push(i);
            const [pAM, pFM, pPM] = calculateProbabilities(i);
            let first = Math.round(pAM * 1000);
            let second = Math.round(pFM * 1000);
            let third = Math.round(pPM * 1000);
            y_arr_1.push(pAM);
            y_arr_2.push(pFM);
            y_arr_3.push(pPM);
            arr.push(
              <Table
                first={first.toString()}
                second={second.toString()}
                third={third.toString()}
                fourth={i.toString()}
              ></Table>
            );
            i = i + 0.5;
          }
          setArray(arr);

          const trace1 = {
            x: x_arr,
            y: y_arr_1,
            name: "ДАМ",
            type: "scatter",
          };

          const trace2 = {
            x: x_arr,
            y: y_arr_2,
            name: "ДЧМ",
            type: "scatter",
          };

          const trace3 = {
            x: x_arr,
            y: y_arr_3,
            name: "1",
            type: "scatter",
          };

          const layout = {
            title: "График зависимости вероятностей ошибок от отношения с/ш",
            showlegend: false,
          };
          const data = [trace1, trace2, trace3];

          Plotly.newPlot("plot", data, layout, { staticPlot: true });
        }
      }
    )
  );

  return (
    <main>
      <p class="font-mono text-4xl font-extrabold text-center mb-4">
        КОМПЬЮТЕРНЫЙ ЭКСПЕРИМЕНТ
      </p>
      <p class="font-mono font-normal text-2xl text-center">
        Исследуем зависимость вероятностей ошибок ДАМ, ДЧМ, ДФМ от соотношения
        с/ш.
      </p>
      <Show when={!processed()}>
        <div class="bg-white flex flex-col items-center m-4">
          <button
            className="submit w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg mt-4"
            onClick={callback}
          >
            {" "}
            Запустить расчет
          </button>
        </div>
      </Show>
      <Show when={processed()}>
        <div class="container mx-auto bg-white flex flex-row items-center m-4">
          <Table
            first={"ДАМ N_ош"}
            second={"ДЧМ N_ош"}
            third={"ДФМ N_ош"}
            fourth={"h"}
          ></Table>
          {array()}
        </div>
        <div id="plot"></div>
      </Show>
    </main>
  );
}
