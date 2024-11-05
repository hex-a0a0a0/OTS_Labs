import binary from "../public/binary_signal.png";
import DAM from "../public/DAM.png";
import DCHM from "../public/DCHM.png";
import DFM from "../public/DFM.png";

export default function Slide5(props) {
  return (
    <div class="container flex flex-col items-center w-2/3 mb-4">
      <div class="multiline font-mono font-normal text-2xl mt-2">
        Проигрыш в скорости передачи данных кода, исправляющего одиночные
        ошибки, по сравнению с безызбыточным кодом равен 3. Для исправления
        ошибок с кратностью К следует использовать коды с минимальным кодовым
        расстоянием
        <br></br>
        <br />
        r(min) = 2 * k + 1.
        <br></br>
        <br />
        Для обнаружения одиночных ошибок одним из наиболее совершенных способов
        кодирования является 'проверка на четность'. К кодовой комбинации из k
        информационных символов добавляется один проверочный таким образом,
        чтобы количество 1 в кодовой комбинации было четным. Например:
      </div>

      <div class="multiline font-mono font-normal text-2xl mt-2">
        Одиночная ошибка делает количество единиц в кодовой комбинации нечетным,
        что и обнаруживается на приеме.
      </div>
    </div>
  );
}
