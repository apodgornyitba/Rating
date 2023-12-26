import './ThankYouState.css'
import {Box, Card, List, ListItemText} from "@mui/material";
import photo from '../images/illustration-thank-you.svg'

function ThankYouState({number}) {
    return (
        <Card className="MainCard"
              sx={{
                  borderRadius: '25px',
              }}
        >
            <Box className="PhotoBox"
                 sx={{
                     marginTop: '30px',
                 }}
            >
                <img alt="Thank you" src={photo}/>
            </Box>
            <Card className="MessageCard"
                  sx={{
                      borderRadius: '25px',
                      backgroundColor: 'hsla(213, 19%, 18%, 1)',
                      color: 'hsl(25, 97%, 53%)',
                      boxShadow: 'unset',
                      padding: '8px',
                      paddingLeft: '20px',
                      paddingRight: '20px',
                      marginTop: '30px',
                  }}
            >
                You selected {number} out of 5
            </Card>
            <List className="Text">
                <ListItemText
                    disableTypography={true}
                    sx={{
                        color: 'hsl(0, 0%, 100%)', fontSize: '30px', marginTop: '30px', textAlign: 'center',
                    }}
                >
                    Thank you!
                </ListItemText>
                <ListItemText
                    disableTypography={true}
                    sx={{
                        color: 'hsl(217, 12%, 63%)',
                        marginTop: '10px',
                        marginBottom: '30px',
                        maxWidth: '350px',
                        display: 'flex',
                        textAlign: 'center',
                    }}
                >
                    We appreciate you taking your time to give a rating. If you ever need more support, don't hesitate
                    to get in touch.
                </ListItemText>
            </List>
        </Card>
    );
}

export default ThankYouState;