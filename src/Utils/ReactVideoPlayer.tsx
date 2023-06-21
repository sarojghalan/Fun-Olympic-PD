import ReactPlayer from "react-player";
import { ReactPlayerInterface } from "../Interface/ReactPlayerInterface";
import { height } from "@mui/system";

function ReactVideoPlayer({
  playing,
  controls,
  muted,
  height,
  width,
  url,
}: ReactPlayerInterface) {
  const setting: ReactPlayerInterface = {
    playing: playing,
    controls: controls,
    muted: muted,
    height: height,
    width: width,
    url: url,
  };
  return <ReactPlayer {...setting} />;
}

export default ReactVideoPlayer;
