import './App.css';
import {Box, Card, List, ListItemText} from "@mui/material";
import icon from "./images/icon-star.svg"

function App() {
    return (
        <div className="App">
            <Card className="MainComponent" style={{borderRadius: '15px'}}>
                <Box className="IconBox">
                    <img alt="Star Icon" src={icon}/>
                </Box>
                <List style={{marginLeft: '30px'}}>
                    <ListItemText disableTypography="true" sx={{color: 'hsl(0, 0%, 100%)', marginTop: '20px', fontWeight: 'Bold', fontSize: '24px'}}>
                        How did we do?
                    </ListItemText>
                    <ListItemText disableTypography="true" sx={{color: 'hsl(217, 12%, 63%)', marginTop: '20px', marginRight: '100px'}}>
                        Please Let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                    </ListItemText>
                </List>
                <Box className="ButtonBox">

                </Box>
            </Card>
        </div>
    );
}

export default App;
