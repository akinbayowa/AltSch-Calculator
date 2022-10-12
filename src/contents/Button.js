import { useContext } from "react";
import { CalcWork } from "../Interact/CalcWork";

const getStyleName= btn => {
    const className = {
        '+': 'opt',
        '-': 'opt',
        '*': 'opt',
        '/': 'opt',
        'AC': 'delete',
        '=': 'equal',
    }
    return className[btn];
}

const Button = ({value}) => {
    const {setCalc, calc} = useContext(CalcWork)

    const dotClick =() => {
        setCalc({...calc,
            num:!calc.num.toString().includes('.')?calc.num+value:calc.num})
    }

    const resetClick = () =>{
        setCalc({sign:'', num:0, res:0})
    }

    const handleClickButton=()=>{
        const numberString=value.toString()
        let numberValue;
        if (numberString===0&&calc.num===0) {
            numberValue='0'
        } else {numberValue=Number(calc.num+numberString)
            
        }
        setCalc({...calc, num:numberValue})
    }

    const opt =() =>{
        setCalc({sign:value, 
            res:!calc.res&&calc.num?calc.num:calc.res, 
            num:0})
    }

    const equalClick=()=>{
        if(calc.res&&calc.num){
            const math=(a,b,sign)=>{
                const result = {
                    '+': (a, b) => a+b,
                    '-': (a, b) =>a-b,
                    '*': (a, b) =>a*b,
                    '/': (a, b) =>a/b,
                }

               return result[sign](a,b);
        }
    
        setCalc({res:math(calc.res, calc.num,calc.sign),
        sign:'', 
        num:0})
        }
       
    }

    const percentClick=()=>{
        setCalc({num:(calc.num/100),
                res: (calc.res/100),
                sign:''
    })
    }

    const invertClick=()=>{
        setCalc({num:calc.num?calc.num*-1:0,
                res:calc.res?calc.res*-1:0,
                sign:''
    })
    }

    const handleBtnClick=() =>{
        const results ={
            '.': dotClick,
            'AC': resetClick,
            '+':opt,
            '-':opt,
            '*':opt,
            '/':opt,
            '=':equalClick,
            '%':percentClick,
            '+-':invertClick,
        }

        if (results[value]) {
            return results[value]()
        } else {
            return handleClickButton()
        }
    }
    return(
        <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
    )
}

export default Button;