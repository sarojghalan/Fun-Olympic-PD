import { ReactPlayerInterface } from "../Interface/ReactPlayerInterface";
import { liveOne, liveFour, liveThree, liveTwo } from "../assets";

export const videoUrls: ReactPlayerInterface[] = [
  {
    muted: true,
    playing: true,
    controls: false,
    height: "85vh",
    width: "100%",
    url: "https://www.youtube.com/watch?v=hQYRDNl-lGI",
    img: liveOne,
  },
  {
    muted: true,
    playing: true,
    controls: false,
    height: "23.3vh",
    width: "80%",
    url: "https://www.youtube.com/watch?v=rFFuXHRPMNI",
    img: liveTwo,
  },
  {
    muted: true,
    playing: true,
    controls: false,
    height: "23.3vh",
    width: "80%",
    url: "https://www.youtube.com/watch?v=rFFuXHRPMNI",
    img: liveThree,
  },
  {
    muted: true,
    playing: true,
    controls: false,
    height: "23.3vh",
    width: "80%",
    url: "https://www.youtube.com/watch?v=rFFuXHRPMNI",
    img: liveFour,
  },
];
