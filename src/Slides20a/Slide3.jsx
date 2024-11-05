export default function Slide3(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold">
        ВТОРОЙ СПОСОБ УВЕЛЕЧЕНИЯ ЭНТРОПИИ -
      </h1>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        состоит в том, что неравновероятные сообщения кодируются новым кодом,
        символы которого должны быть равновероятны. Это достигается, например,
        кодированием в соответствии с алгоритмом Хаффмена. Этот алгоритм состоит
        из следующих операций: а) Расположить исходные сообщения в порядке
        убывания вероятностей. б) Объединить два наименее вероятных сообщения в
        одно, вероятность которого равна сумме вероятностей объединяемых
        сообщений (точка объединения сообщений называется «узлом кодового
        дерева»). в) Повторять шаги а) и б) до тех пор, пока не получим одно
        сообщение с вероятностью 1. Эта точка называется «вершиной кодового
        дерева».
      </div>
    </div>
  );
}
