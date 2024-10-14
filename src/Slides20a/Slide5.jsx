import binary from '../public/binary_signal.png';
import DAM from '../public/DAM.png';
import DCHM from '../public/DCHM.png';
import DFM from '../public/DFM.png';

export default function Slide5(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
      Чтобы закодировать исходные сообщения новым кодом, надо идти от вершины дерева к сообщениям. Если в узлах кодового дерева вы идете вверх, то в кодовую комбинацию пишется 1, а если вниз, то 0.
      Для нашего примера получим такие кодовые комбинации: S1 - 0, S2 - 111, S3 - 110, S4 - 10.
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style="height: 300px; width: 700px; object-fit: cover;" src={binary}></img>
        <p>Исходный двоичный сигнал</p>
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style="height: 300px; width: 700px; object-fit: cover;" src={DAM}></img>
        <p>ДАМ(t): U1(t)=Um*cos(w0*t) <br/> U0(t)=0</p>
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style="height: 300px; width: 700px; object-fit: cover;" src={DCHM}></img>
        <p>ДЧМ(t): U1(t)=Um*cos(w1*t) <br/> U0(t)=Um*cos(w0*t)</p>
      </div>
      <div class="flex flex-row items-center font-mono text-2xl">
        <img style="height: 300px; width: 700px; object-fit: cover;" src={DFM}></img>
        <p>ДФМ(t): U1(t)=Um*sin(w0*t) <br/> U0(t)=-Um*sin(w0*t)</p>
      </div>
    </div>
  )
}
