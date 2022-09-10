import "./styles.css";
import berufeJSON from "../public/berufe.json";
import { forIn, groupBy } from "lodash";
import Levenshtein from "levenshtein";
const berufe: { [key: string]: string } = berufeJSON;

const berufearr: { m: string; w: string }[] = [];
for (const m in berufe) {
  if (Object.prototype.hasOwnProperty.call(berufe, m)) {
    const w = berufe[m];
    berufearr.push({ m, w });
  }
}
export default function App() {
  return <div className="App">{JSON.stringify(berufearr)}</div>;
}
