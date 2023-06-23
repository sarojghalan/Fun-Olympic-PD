import { SampleInputInterface } from "../../Interface/SampleInputInterface";

function SampleInput({
  placeHolder,
  onChangeHandler,
}: SampleInputInterface) {
  return <input placeholder={`${placeHolder}`} onChange={onChangeHandler} />;
}
export default SampleInput;
