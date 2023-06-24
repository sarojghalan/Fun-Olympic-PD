import { SampleInputInterface } from "../../Interface/SampleInputInterface";

function SampleInput({
  placeHolder,
  onChangeHandler,
  value,
  name,
  type,
}: SampleInputInterface) {
  return (
    <input
      className="base__sample__input"
      placeholder={`${placeHolder}`}
      name={name}
      type={type}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
export default SampleInput;
