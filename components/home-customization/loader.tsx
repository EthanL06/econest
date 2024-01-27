import { Html, useProgress } from "@react-three/drei";
import { Progress } from "../ui/progress";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex w-[320px] flex-col items-center text-black">
        <Progress value={progress} />
        <span>{progress.toFixed(1)}% </span>
      </div>
    </Html>
  );
}

export default Loader;
