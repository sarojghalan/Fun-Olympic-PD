import { SampleInputInterface } from "../../Interface/SampleInputInterface";

function SampleInput({
  placeHolder,
  onChangeHandler,
  value,
  name,
}: SampleInputInterface) {
  return (
    <input
      className="base__sample__input"
      placeholder={`${placeHolder}`}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
export default SampleInput;
