import Box from '@mui/material/Box'
import TextField  from '@mui/material/TextField'

export default function Search() {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: '10%',
                left: '25%',
                width: '50%',
                backgroundColor: 'primary.light',
                borderColor: 'transparent',
                borderRadius: 5
            }}
        >

            <TextField placeholder='Search...' variant='outlined' size='small'
            sx={{
                height: '100%',
                width: '100%',
                input: {
                    color: 'inherit',
                    '&::placeholder': {
                        color: 'inherit'
                    }
                },
                '&:focus-visible': {
                    outline: 0
                }
            }}
            />
        </Box>
    );
}