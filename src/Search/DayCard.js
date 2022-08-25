import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
const DayCard = (props) => {
    return (
        <div>
            <Paper style={{ width: 216, height: 180 }}>
                <Stack spacing={2} alignItems="center" justifyContent="space-around">
                    <img src={props.info.text.icon} width="48" />
                    <Typography variant="h5" gutterBottom>
                        {Math.round(props.info.temperature)}C
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center" justifyContent="space-around">
                        <Typography variant="h6">
                            Min:&nbsp;{Math.round(props.info.minimum)}C
                        </Typography>
                        <Typography variant="h6">
                            &nbsp;-&nbsp;
                        </Typography>
                        <Typography variant="h6">
                            Max:&nbsp;{Math.round(props.info.maximum)}C
                        </Typography>
                    </Stack>
                </Stack>
            </Paper>
            <Stack alignItems="center" justifyContent="space-around">
            <Typography variant="h6">
                {(props.info.date)}
            </Typography>

            </Stack>
            
        </div>
    )
}

export default DayCard;