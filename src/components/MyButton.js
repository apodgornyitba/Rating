import React from 'react';
import Button from '@mui/material/Button';

const MyButton = ({ number, setActiveButton, activeButton, onClick }) => {
    const handleButtonClick = () => {
        setActiveButton(prevState => (prevState === number ? null : number));
        onClick(number);
    };

    return (
        <Button
            sx={{
                backgroundColor: activeButton === number ? 'hsl(25, 97%, 53%)' : 'hsl(213, 19%, 18%)',
                borderRadius: '25px',
                minWidth: 'unset',
                width: '50px',
                height: '50px',
                boxShadow: 'unset',
                color: activeButton === number ? 'white' : 'hsl(217, 12%, 63%)',
                marginRight: '20px',
                transition: 'background-color 0.3s, color 0.3s', // Smooth transition

                '&:hover': {
                    backgroundColor: activeButton === number ? 'hsl(25, 97%, 53%)' : 'hsl(217, 12%, 63%)',
                    color: 'white',
                },
            }}
            onClick={handleButtonClick}
        >
            {number}
        </Button>
    );
};

export default MyButton;