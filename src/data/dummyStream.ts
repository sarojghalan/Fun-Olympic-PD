import { StreamCardInterface } from "../Interface/StreamCardInterface";
import { liveFour, liveOne, liveThree, liveTwo } from "../assets";

export const dummyStream: StreamCardInterface[] = [
  {
    image: liveOne,
    cardTitle: "F1 Streams",
    cardDescription:
      "Hello, fantastic spectators! Prepare yourselves for a thrilling live stream extravaganza",
  },
  {
    image: liveTwo,
    cardTitle: "Moto GP Streams",
    cardDescription:
      "Greetings, fabulous audience! Join me for a spectacular live streaming event",
  },
  {
    image: liveThree,
    cardTitle: "Marine Streams",
    cardDescription:
      "Hey there, amazing viewers! Welcome to my live stream extravaganza!",
  },
  {
    image: liveFour,
    cardTitle: "Sports Streams",
    cardDescription:
      "Hey, incredible viewers! Get ready to be blown away by the sensational live stream",
  },
];
