import Card from "./Card";
import "./Main.scss";
import {data} from "../../helper/data.js"

const Main = () => {
  return (
    <div>
    {data.map((horoscope, index)=>(
      <Card key={index} horoscope={horoscope}/>
    ))}
      
    </div>
  );
};

export default Main;
