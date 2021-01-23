import { v4 as uuidv4 } from "uuid";

function chillHop() {
  return [
    {
      name: "03 Al-Imran",
      artist: "Sheikh Mishary Rashid Al-Afasy",
      cover:
        "https://images.pexels.com/photos/6570386/pexels-photo-6570386.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: uuidv4(),
      active: true,
      color: ["#322223", "#7C4456"],
      audio: "https://freequranmp3.com/alafasy/003-al-imran.mp3",
    },
    {
      name: "094 Ash-Sharh",
      artist: "Sheikh Mishary Rashid Al-Afasy",
      cover:
        "https://images.pexels.com/photos/6570417/pexels-photo-6570417.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      id: uuidv4(),
      active: false,
      color: ["#82A78F", "#427E62"],
      audio: "https://freequranmp3.com/alafasy/094-ash-sharh.mp3",
    },
  ];
}

export default chillHop;
