import Bayes from "../public/BayesEq.png";
import BayesRed from "../public/BayesEqReduced.png";
import OneCondition from "../public/OneCondition.png";
import ZeroCondition from "../public/ZeroCondition.png";

export default function Slide4(props) {
  return (
    <div class="container flex flex-col items-center w-2/3 mb-4">
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Для исправления одиночных ошибок следует использовать код с r(min)=3.
        Например, для кода с m=2; n=3 можно использовать комбинации:
      </div>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Пусть передается комбинация 000. Допустим, что помеха исказила второй
        символ, и мы приняли 010. Эта комбинация запрещенная, но она ближе к
        переданной комбинации 000 (r = 1), чем к другой возможной 111 (r = 2).
        Т.о. мы декодируем комбинацию 010 как 000, т.е. исправляем ошибку.
      </div>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Выигрыш в помехоустойчивости достигается за счёт небольшого проигрыша в
        скорости передачи, т.к. два сообщения могли бы передаваться с помощью
        двух комбинаций безызбыточного кода m = 2, n = 1: т.е. 0 и 1.
      </div>
    </div>
  );
}
