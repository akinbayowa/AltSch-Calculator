import { useContext } from "react";
import { Textfit } from "react-textfit";
import { CalcWork } from "../Interact/CalcWork";


const Screen = () => {
    const {calc} = useContext(CalcWork);
    return(
        <Textfit className="screen" max={30} mode='single'>{calc.num?calc.num:calc.res}</Textfit>
    )
}

export default Screen;