import Bayes from "../public/BayesEq.png";
import BayesRed from "../public/BayesEqReduced.png";
import OneCondition from "../public/OneCondition.png";
import ZeroCondition from "../public/ZeroCondition.png";

export default function Slide4(props) {
  return (
    <div class="flex flex-col items-center w-2/3 mb-4">
      <div class="font-mono text-2xl text-center">
        Например, кодовое дерево может иметь такой вид:
      </div>
      <img src={Bayes}></img>
    </div>
  );
}
