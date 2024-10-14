import signal1 from '../public/signal_after.png';
import signal2 from '../public/signal_2.png';
import signal3 from '../public/final_signal.png';

export default function Slide2(props) {
  const imgStyle = "width: 600px; height: 221px; object-fit: cover;";
  return (
    <div class="flex flex-row items-center w-2/3 mb-4">
      <div class="flex flex-col items-center">
        <img style={imgStyle} src={signal1}></img>
        <img style={imgStyle} src={signal2}></img>
        <img style={imgStyle} src={signal3}></img>
      </div>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Для перехода от непрерывного сигнала к сигналу ИКМ
        необходимо осуществить:

        1) Дискретизацию по теореме Котельникова.
        2) Квантование по уровню импульсов-отсчет
        Диапазон допустимых значений x(t)
        разбивается на разрешенные уровни - уровни
        квантования. Операция квантования состоит в
        том, что вместо истинного значения амплитуды
        импульса передается ближайший разрешенный
        уровень. Пусть уровни квантования
        0, 1, 2, 3 и т.д. вольт. Тогда вместо 0.2 вольт
        передаем 0; вместо 1.4 вольт - 1 и т.д.

        3) Кодируем квантованные импульсы - отсчеты.
        Примитивное кодирование состоит в том, что
        уровень квантования записывается двоичным
        числом. 0 -> 000 (предполагаем, что комбинация
        состоит из трех импульсов); 1 -> 001; и т.д.


        Мы получили двоичный сигнал ИКМ однозначно
        соответствующий исходному непрерывному сигналу.
      </div>
    </div>
  )
}
