import Bayes from '../public/BayesEq.png';
import BayesRed from '../public/BayesEqReduced.png';
import OneCondition from '../public/OneCondition.png';
import ZeroCondition from '../public/ZeroCondition.png';

export default function Slide4(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
        Используя формулу Байеса получим правило работы ОП в виде
      </div>
      <img src={Bayes}></img>
      <div class="font-mono text-2xl text-center">
        Сократим на р(Z); обычно р(1) = р(0) = 0.5 => тоже можно сократить, тогда
        правило работы ОП окончательно запишем в виде:
      </div>
      <img src={BayesRed}></img>
      <div class="font-mono text-2xl text-center">
        Если помеха-белый нормальный шум (шум с постоянной спектральной плотностью от 0 до бесконечности) , то правило работы ОП может быть записано в виде:
      </div>
      <img src={OneCondition}></img>
      <img src={ZeroCondition}></img>
      <div class="font-mono text-2xl text-center">
        Z(t) - сигнал + шум. <br/>
        U1(t) - сигнал при передаче '1'. <br/>
        U0(t) - сигнал при передаче '0'. <br/>
        T - длительность одной посылки. <br/>
      </div>
    </div>
  )
}
