import "./styles.css";
import WheelComponent from "react-wheel-of-prizes";

export default function App() {
  const segments = ["Manoj", "Pip", "Ravi", "Abdul", "Siddhesh", "Komal"];
  const segColors = ["#EE4040", "#F0CF50", "#815CD1", "#3DA5E0", "#34A24F"];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <WheelComponent
          segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          contrastColor="white"
          buttonText="Spin"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={600}
          fontFamily="Arial"
        />
      </div>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
