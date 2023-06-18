import { SampleButtonInterface } from "../../Interface/SampleButtonInterface";
import "../../Scss/Main.scss";
function SampleButton({ title, nameOfClass, handler }: SampleButtonInterface) {
  return (
    <button className={`${nameOfClass} base__sample__button`} onClick={handler}>
      {title}
    </button>
  );
}

export default SampleButton;
