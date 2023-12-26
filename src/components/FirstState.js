import {Box, Card, List, ListItemText} from "@mui/material";
import icon from "../images/icon-star.svg"
import MyButton from "./MyButton";
import Button from "@mui/material/Button";
import {useState} from "react";
import './FirstState.css'

function FirstState({ setSelectedNumber, handleSubmitClick }) {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (number) => {
        setSelectedNumber(number);
    };

    return (
        <Card className="MainComponent"
              sx={{
                  borderRadius: '25px',
              }}
        >
            <Box className="IconBox" sx={{boxShadow: 'unset'}}>
                <img alt="Star Icon" src={icon}/>
            </Box>
            <List style={{marginLeft: '30px'}}>
                <ListItemText disableTypography={true}
                              sx={{
                                  color: 'hsl(0, 0%, 100%)',
                                  marginTop: '20px',
                                  fontWeight: 'bold',
                                  fontSize: '30px'
                              }}
                >
                    How did we do?
                </ListItemText>
                <ListItemText disableTypography={true}
                              sx={{
                                  color: 'hsl(217, 12%, 63%)',
                                  marginTop: '20px',
                                  marginRight: '40px'
                              }}
                >
                    Please let us know how we did with your support request. All feedback is appreciated to help us
                    improve our offering!
                </ListItemText>
            </List>
            <Box className="ButtonsBox">
                <MyButton number="1" setActiveButton={setActiveButton} activeButton={activeButton} onClick={() => handleButtonClick(1)}/>
                <MyButton number="2" setActiveButton={setActiveButton} activeButton={activeButton} onClick={() => handleButtonClick(2)}/>
                <MyButton number="3" setActiveButton={setActiveButton} activeButton={activeButton} onClick={() => handleButtonClick(3)}/>
                <MyButton number="4" setActiveButton={setActiveButton} activeButton={activeButton} onClick={() => handleButtonClick(4)}/>
                <MyButton number="5" setActiveButton={setActiveButton} activeButton={activeButton} onClick={() => handleButtonClick(5)}/>
            </Box>
            <Box className="SubmitBox">
                <Button
                    onClick={handleSubmitClick}
                    sx={{
                        color: 'white',
                        backgroundColor: 'hsl(25, 97%, 53%)',
                        borderRadius: '25px',
                        minWidth: 'unset',
                        width: '330px',
                        height: '45px',
                        transition: 'background-color 0.3s, color 0.3s',

                        '&:hover': {
                            backgroundColor: 'white',
                            color: 'hsl(25, 97%, 53%)',
                        },
                    }}>
                    Submit
                </Button>
            </Box>
        </Card>
    );
}

export default FirstState;