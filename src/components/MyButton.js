import * as React from "react";
import {Button} from "@mui/material";


class MyButton extends React.Component {
    render() {
        const {number} = this.props;

        return (
            <Button
                sx={{backgroundColor: 'hsl(213, 19%, 18%)', borderRadius: '25px', width: '15px',
                height: '35px', boxShadow: 'unset', color: 'hsl(217, 12%, 63%)', marginRight: '10px'}}>
                {number}
            </Button>
        );
    }
}

export default MyButton;