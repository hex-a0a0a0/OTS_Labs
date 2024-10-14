import MultiFieldForm from '../MultiFieldForm.jsx'

let options = [["V -> -∞","0"], ["V -> +∞","1"]];

export default function Quest13(props) {
  return (
    <div class="container flex flex-col items-center w-2/3">
      <h1 class="font-mono text-4xl font-extrabold mb-4">ВОПРОС</h1>
      <h2 class="font-mono text-2xl font-normal mb-2">Чему равна p(0|1), если:</h2>
      <MultiFieldForm options={options}></MultiFieldForm>
    </div>
  )
}
