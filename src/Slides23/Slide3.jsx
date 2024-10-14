export default function Slide3(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
        ОП вычисляет условные (апостериорные) вероятности передачи ‘1’ и ‘0’ если на входе приемника процесс Z(t), т.е. р(1/Z) и р(0/Z).
      </div>
      <div class="font-mono text-2xl text-center">
        {"Если р(1/Z) > р(0/Z), то ОП дает на выходе «1»"}
      </div>
      <div class="font-mono text-2xl text-center">
        {"Если р(1/Z) < р(0/Z), то ОП дает на выходе «0»"}
      </div>
      <div class="font-mono text-2xl text-center">
        Условные и безусловные вероятности связаны между собой формулой Байеса.
        Выведем эту формулу.
        Процесс Z на входе приемника может получиться при передаче "1". Вероятность того, что произошли эти два события обозначим так:
      </div>
      <div class="font-mono text-2xl text-center">
        р(Z и 1) = p(2)*p(1/Z) = p(1)*p(Z/1)
        <br/>
        р(1) - безусловная (априорная) вероятность процесса Z:
        p(Z) - безусловная (априорная) вероятность процесса 1;
        р(Z/1) - условная (апостериорная) вероятность Z, если была передана ‘1’.
      </div>
      <div class="font-mono text-2xl text-center">
        Из равенства получаем <br/>
        p(1/Z) = p(1)*p (Z/1) / p(Z) - формула Байеса. <br/>
        Аналогично : <br/>
        p(0/Z) - p(0)*p(Z/0) / p(Z) - это тоже формула Байеса. <br/>
        Т.о. правило работы ОП можно записать так: <br/>
      </div>
      <div class="font-mono text-2xl text-center">
        {"p(1/Z) > p(0/Z) -> 1"}
      </div>
      <div class="font-mono text-2xl text-center">
        {"p(1/Z) < p(0/Z) -> 0`"}
      </div>
    </div>
  )
}
