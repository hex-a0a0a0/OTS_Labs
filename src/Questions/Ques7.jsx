import MultiFieldForm from '../MultiFieldForm.jsx'

let options = [["Вероятность приема ","1"], ["при передаче ","0"]];

export default function Quest7(props) {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
      <p class="font-mono text-2xl font-normal mb-2">Что такое p(1|0) ?</p>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
