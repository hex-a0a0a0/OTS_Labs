import MultiFieldForm from '../MultiFieldForm.jsx'

import diagram from '../public/scheme.png';

let options = [["1-ый блок","4"], ["2-ой блок","3"], ["3-й блок","5"], ["4-й блок","6"], ["5-й блок","2"]];

export default function Quest19(props) {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ЗАДАНИЕ</h1>
      <h2 class="font-mono text-2xl font-normal">Составьте из нарисованных блоков структурную схему экспериментальной установки</h2>
      <img src={diagram}></img>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
