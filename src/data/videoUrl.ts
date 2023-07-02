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
    url: "https://www.youtube.com/watch?v=UJpCCeDgXoY",
    img: liveTwo,
  },
  {
    muted: true,
    playing: true,
    controls: false,
    height: "23.3vh",
    width: "80%",
    url: "https://www.youtube.com/watch?v=A_lTonMNJ54",
    img: liveThree,
  },
  {
    muted: true,
    playing: true,
    controls: false,
    height: "23.3vh",
    width: "80%",
    url: "https://www.youtube.com/watch?v=vP9QpcqzSns",
    img: liveFour,
  },
];
