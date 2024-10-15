import { createSignal, createEffect, on } from "solid-js";

import counter from "./Counter";

const [count, setCount] = counter;

function processText(str) {
  if (!str) {
    return "";
  }
  return str
    .toLowerCase()
    .replace(/[.,;']/g, ".")
    .replace(/\s/g, "")
    .replace(/[)]/g, "");
}

function Field(props) {
  const [value, setValue] = createSignal();
  const [isRightValue, setIsRightValue] = createSignal(false);

  createEffect(
    on(
      () => props.processed,
      () => {
        if (props.processed) {
          if (processText(props.answer) == processText(value())) {
            //setCount(count()+1);
            setIsRightValue(true);
          } else {
            setIsRightValue(false);
          }
        }
      }
    )
  );

  createEffect(
    on(
      () => isRightValue(),
      () => {
        if (processText(props.answer) == processText(value())) {
          setCount((count) => count + 1);
        }
      }
    )
  );

  return (
    <Show
      when={props.processed}
      fallback={() => (
        <div className="input-wrapper mb-4">
          <p class="font-mono text-bold text-xl mb-2">{props.text}</p>
          <input
            class="border border-slate-950 rounded-lg px-2"
            type="text"
            onInput={(e) => setValue(e.target.value)}
          />
        </div>
      )}
    >
      <Show
        when={isRightValue()}
        fallback={
          <div className="input-wrapper text-center">
            <p class="font-mono text-extrabold text-xl">{props.text}</p>
            <p class="font-mono text-extrabold text-red-600 text-2xl">
              Неправильно!
            </p>
          </div>
        }
      >
        <div className="input-wrapper text-center">
          <p class="font-mono text-extrabold text-xl">{props.text}</p>
          <p class="font-mono text-extrabold text-green-600 text-2xl">
            Правильно!
          </p>
        </div>
      </Show>
    </Show>
  );
}

export default function MultiFieldForm(props) {
  const [processed, setProcessed] = createSignal(false);

  let callback = () => {
    setProcessed(true);
    if (props.processTag != null) {
      props.processTag(true);
    }
  };

  const options = (
    <For each={props.options}>
      {(element, i) => (
        <Field
          text={element[0]}
          name={i}
          processed={processed()}
          answer={element[1]}
        />
      )}
    </For>
  );

  return (
    <div>
      <Show
        when={processed()}
        fallback={() => (
          <div className="wrapper text-center font-mono text-extrabold">
            <form onSubmit="return false;" class="m-4">
              {options}
            </form>
            <button
              className="submit w-48 font-mono text-extrabold text-slate-50 px-6 py-2 m-2 bg-slate-950 hover:bg-slate-800 rounded-full shadow-lg mt-4"
              onClick={callback}
            >
              {" "}
              Подтвердить
            </button>
          </div>
        )}
      >
        <div className="wrapper text-center font-mono text-extrabold text-xl ">
          <form onSubmit="return false;" class="m-4">
            {options}
          </form>
        </div>
      </Show>
    </div>
  );
}
