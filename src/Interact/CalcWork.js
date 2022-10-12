import { createContext, useState } from "react"

export const CalcWork = createContext()

const CalcStick = ({children}) => {
    const [calc, setCalc] = useState ({
        sign:'',
        num:0,
        res:0,
    });

    const stickValue = {
        calc, setCalc
    }

    return(
        <CalcWork.Provider value ={stickValue}>{children}</CalcWork.Provider> 
    )
}

export default CalcStick;