import binary from "../public/binary_signal.png";
import DAM from "../public/DAM.png";
import DCHM from "../public/DCHM.png";
import DFM from "../public/DFM.png";

export default function Slide5(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold multiline">
        Чтобы закодировать исходные сообщения новым кодом -
      </h1>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        надо идти от вершины дерева к сообщениям. Если в узлах кодового дерева
        вы идете вверх, то в кодовую комбинацию пишется 1, а если вниз, то 0.
        <br />
        Для нашего примера получим такие кодовые комбинации: S1 - 0, S2 - 111,
        S3 - 110, S4 - 10.
      </div>
    </div>
  );
}
