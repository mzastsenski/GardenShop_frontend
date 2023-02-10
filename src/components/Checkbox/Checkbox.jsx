import s from "./Checkbox.module.scss";

export default function Checkbox({ text }) {
  return (
    <>
      <label className={s.container} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <span className={s.checkmark}></span>
        <span>{text}</span>
      </label>
    </>
  );
}
