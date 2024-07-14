import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function Index() {
  return (
    <Container>
      <Stack>
        <Typography variant="h1">MUI Hello World</Typography>
        <Typography>These are some MUI components, yay</Typography>
      </Stack>
    </Container>
  );
}
