import Container from "./contents/Container";
import Screen from "./contents/Screen"
import ButtonCont from "./contents/ButtonCont";
import Button from "./contents/Button";
import CalcStick from "./Interact/CalcWork";


const btnValues = [
  [1, 2, 3, '+'],
  [4, 5, 6, '-'],
  [7, 8, 9, '*'],
  ['.', 0, '=','/'],
  ['%', '+-', 'AC'],
];

function App() {
  return (
    <CalcStick>
      <Container>
        <Screen>

        </Screen>

        <ButtonCont>
          {btnValues.flat().map((btn, i) => (
          <Button value = {btn} key = {i} />
          ))
          }
        </ButtonCont>

        
      </Container>
  
      
      </CalcStick>
  );
}

export default App;
