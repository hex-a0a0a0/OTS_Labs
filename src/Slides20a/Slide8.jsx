export default function Slide8(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center mb-4">
        Избыточность R = (Hmax - H)/Hmax = (1 - 0,811)/1 = 0,189 Hmax = 1, так
        как lg 2 = 1 бит/символ. Средняя длина кодовой комбинации: Ncp = p(S1)n1
        + p(S2)n2 + p(S3)n3 + p(S4)n4 = = 0,491 + 0,023 + 0,063 + 0,252 = 1,27
        символ/сообщение, где n1, n2, n3, n4 - длина кодовой комбинации для S1,
        S2, S3, S4. Примечание: я исправил ошибку в формуле для Ncp, заменив
        p(S2)n2 = 0,23 на p(S2)n2 = 0,023, так как вероятность S2 равна 0,02, а
        не 0,2.
      </div>
    </div>
  );
}
