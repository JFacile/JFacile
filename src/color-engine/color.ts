interface Color {
  name: string;
  code: string;
}

const JColorArray: Color[] = [
  { name: "red", code: "#E74C3C" },
  { name: "blue", code: "#3498DB" },
  { name: "green", code: "#52BE80" },
  { name: "yellow", code: "#F4D03F" },
  { name: "gray", code: "#797D7F" },
  { name: "black", code: "#17202A" },
  { name: "white", code: "#FDFEFE" },
  { name: "purple", code: "#7D3C98" },
  { name: "pink", code: "#EE1CEE" },
];

export const JColor = () => {
  return [
    { name: "red", code: "#E74C3C" },
    { name: "blue", code: "#3498DB" },
    { name: "green", code: "#52BE80" },
    { name: "yellow", code: "#F4D03F" },
    { name: "gray", code: "#797D7F" },
    { name: "black", code: "#17202A" },
    { name: "white", code: "#FDFEFE" },
    { name: "purple", code: "#7D3C98" },
    { name: "pink", code: "#EE1CEE" },
  ];
};

export function JColorRandom() {
  return console.log(
    JColorArray[Math.floor(Math.random() * JColorArray.length)]
  );
}
