import { TitleInterface } from "../../Interface/TitleInterface";
import '../../Scss/Main.scss';
function Title({ title }: TitleInterface) {
  return (
    <div className="title__wrapper">
      <h3>{title}</h3>
    </div>
  );
}

export default Title;
