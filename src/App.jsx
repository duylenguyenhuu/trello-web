import { Button, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import { pink } from '@mui/material/colors';
function App() {
  return (
    <>
      <div>duyle</div>

      <Typography variant="body2" color="text.secondary">
        Test Typography
      </Typography>

      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <br />
      <AccessAlarmIcon />
      <ThreeDRotationIcon />
      <HomeIcon color="primary" />
      <HomeIcon color="secondary" />
      <HomeIcon color="success" />
      <HomeIcon color="action" />
      <HomeIcon color="disabled" />
      <HomeIcon sx={{ color: pink[500] }} />
    </>
  );
}

export default App;
