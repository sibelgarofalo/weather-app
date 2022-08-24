import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const DayCard = (props) => {
    return (
        <Paper style={{ width: 128, height: 128 }}>
            <Stack spacing={2} alignItems="center" justifyContent="space-around">
                <img src={props.info.text.icon} width="48" />
                <Typography variant="h6" gutterBottom>
                    {Math.round(props.info.temperature)}C
                </Typography>
            </Stack>
        </Paper>
    )
}

export default DayCard;