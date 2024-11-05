export default function Slide8(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <h1 class="font-mono text-4xl font-extrabold">ИЗБЫТОЧНОСТЬ</h1>
      <div class="multiline font-mono font-normal text-2xl mt-2">
        R = (Hmax - H)/Hmax = (1 - 0,811)/1 = 0,189
        <br />
        Hmax = 1, так как lg 2 = 1 бит/символ.
        <br></br>
        <br />
        Средняя длина кодовой комбинации:
        <br />
        Ncp = p(S1)n1 + p(S2)n2 + p(S3)n3 + p(S4)n4 = = 0,491 + 0,023 + 0,063 +
        0,252 = 1,27 символ/сообщение,
        <br />
        где n1, n2, n3, n4 - длина кодовой комбинации для S1, S2, S3, S4.
      </div>
    </div>
  );
}
