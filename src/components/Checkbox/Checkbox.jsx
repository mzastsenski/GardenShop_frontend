import s from "./Checkbox.module.scss";

export default function Checkbox() {
  return (
    <>
      <label className={s.container} htmlFor="checkbox">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <span className={s.checkmark}></span>
        <span>Discounted items</span>
      </label>
    </>
  );
}
