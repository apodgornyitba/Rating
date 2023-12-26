import './App.css';
import FirstState from "./components/FirstState";
import ThankYouState from "./components/ThankYouState";
import {useState} from "react";


function App() {

    const [selectedNumber, setSelectedNumber] = useState(null);
    const [currentComponent, setCurrentComponent] = useState('FirstState');

    const handleButtonClick = (number) => {
        setSelectedNumber(number);
    };

    const handleSubmitClick = () => {
        setCurrentComponent('ThankYouState');
    };

    return (
        <div className="App">
            {currentComponent === 'FirstState' ? (
                <FirstState
                    setSelectedNumber={handleButtonClick}
                    handleSubmitClick={handleSubmitClick}
                />
            ) : (
                <ThankYouState number={selectedNumber} />
            )}
        </div>
    );
}

export default App;
