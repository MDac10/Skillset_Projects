import Message from './Message';
import ListGroup from './components/ListGroup';
import Alert from './components/Alert';
import Button from './components/Button';
import { useState } from 'react';

function App() {

  let learningList = ["Azure", "AI Cert", "Cybersecurity", "Terraform", "TypeScript"];

  const handleSelectItem = (item: string) => {
        console.log(item);
    }

  // return (
  //   <div>
  //     <ListGroup items={learningList} heading="Learning Items" onSelectItem={handleSelectItem} />
  //   </div>
  // );

  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>"Wow, you just do whatever you're told. Close this alert for me would ya ----"</Alert>}
      <Button 
        color="secondary" 
        onClick={() => {setAlertVisibility(true)}}
        >
          Click Here
        </Button>
    </div>
  )
}

export default App;