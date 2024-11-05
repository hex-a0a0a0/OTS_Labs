import OP from "../public/OPKot.png";

export default function Slide6(props) {
  return (
    <div class="container flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold">
        ЦЕЛЬ ПОМЕХОУСТОЙЧИВОГО КОДИРОВАНИЯ:
      </h1>

      <div class="multiline font-mono font-normal text-2xl mt-2">
        уменьшение вероятности ошибки на приеме. Помехоустойчивые коды делятся
        на блочные и непрерывные. Код называется блочным, если каждое сообщение
        передается блоком из n символов, из которых k символов - информационные,
        а p = (n - k) - проверочные.
      </div>
    </div>
  );
}
