import css from "./Options.module.css";

export default function Options({ update, reset, total }) {
  return (
    <div>
      <button className={css.button} onClick={() => update("good")}>
        Good
      </button>
      <button className={css.button} onClick={() => update("neutral")}>
        Neutral
      </button>
      <button className={css.button} onClick={() => update("bad")}>
        Bad
      </button>
      {total > 0 && (
        <button className={css.button} onClick={reset}>
          Reset
        </button>
      )}
    </div>
  );
}
