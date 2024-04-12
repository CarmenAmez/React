import { Box, Container, Inside} from './Popup.styles';

const Popup = ({ visible }) => (
  <Container visible={visible}>
    <Box>
      <Inside>
        <p> ¡ G · A · N · A · S · T · E !</p>
      </Inside>
    </Box>
  </Container>
);


export default Popup;
