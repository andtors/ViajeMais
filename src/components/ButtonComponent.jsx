import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ButtonComponent = ({text}) => {
  return (
    <div>
        <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" >{text}</Button>
        </Stack>
    </div>
  )
}

export default ButtonComponent