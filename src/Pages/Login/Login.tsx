import SampleButton from "../../Components/Button/SampleButton";

function Login() {
  const onclick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("haha");
  };
  return (
    <div className="container">
      <div className="login__wrapper">
        <SampleButton
          title="login"
          nameOfClass=""
          handler={(e: React.MouseEvent<HTMLButtonElement>) => onclick(e)}
        />
      </div>
    </div>
  );
}
export default Login;
