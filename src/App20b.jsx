import { createSignal, Show } from "solid-js";
import {Quest1, Quest2, Quest3, Quest4, Quest5, Quest6, Quest7, Quest8, Quest9, Quest10, Quest11, Quest12, Quest13} from './Questions20b'
import {Slide1, Slide2, Slide3, Slide4, Slide5, Slide6, Slide7, Slide8, Slide9, Slide10, Slide11} from './Slides20b'
import Results from './Results20b'
import Laboratory from './Laboratory20b'

import Verification from './Verification'

function shuffleArray(array) {
   for (var i = array.length - 1; i > 0; i--) { 
       var j = Math.floor(Math.random() * (i + 1));

       var temp = array[i];
       array[i] = array[j];
       array[j] = temp;
   }

   return array;
}

export default function App20b() {
  let comps = [<Verification />];
  let slides = [<Slide1 />, <Slide2 />, <Slide3 />, <Slide4 />, <Slide5 />, <Slide6 />, <Slide7 />];
  let questions = [<Quest1 />, <Quest2 />, <Quest3 />, <Quest4 />, <Quest5 />, <Quest6 />, <Quest7 />, <Quest8 />, <Quest9 />, <Quest11 />, <Quest12 />, <Quest13 />];
  let later_slides = [<Slide8 />, <Slide9 />, <Slide10 />, <Slide11 />]

  comps = comps.concat(slides);
  comps = comps.concat(shuffleArray(questions));
  comps = comps.concat(later_slides);
  comps = comps.concat([<Laboratory />]);
  comps = comps.concat([<Results />]);

  const [page, setPage] = createSignal(0);
  const nextPage = () => {
    if ((page() <= comps.length - 2)) {
      setPage(page() + 1);
    }
  };

  const prevPage = () => {
    if ((page() > 0)) {
      setPage(page() - 1);
    }
  };

  const welcomePage = () => {
    confirm("Выйти на главную страницу?");
    window.location.reload(true);
  };
  
  return (
    <main class="bg-white flex flex-col items-center m-4">
      <Show when={(page() === comps.length-1)}>
        {comps[page()]}
        <button onClick={welcomePage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-red-900 bg-red-700 rounded-full shadow-lg">Выйти</button>
      </Show>

      <Show when={(page() === comps.length-2)}>
        {comps[page()]}
        <div class=" bottom-10">
          <button onClick={prevPage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg">Назад</button>
          <button onClick={nextPage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg">Закончить</button>
        </div>
      </Show>

      <Show when={(page() === 0)}>
        {comps[page()]}
        <button onClick={nextPage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg">Продолжить</button>
      </Show>

      <Show when={(page() > 0 && page() < comps.length-2)}>
        {comps[page()]}
        <div class=" bottom-10">
          <button onClick={prevPage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-full shadow-lg">Назад</button>
          <button onClick={nextPage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-slate-800 bg-slate-950 rounded-full shadow-lg">Продолжить</button>
        </div>
        <button onClick={welcomePage} class="w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 hover:bg-red-900 bg-red-700 rounded-full shadow-lg">Выйти</button>
      </Show>
    </main>
  )
}
