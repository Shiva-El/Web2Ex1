import Button from 'react-bootstrap/Button';
//import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function HomeButton() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div style={{ flexDirection: "row", direction: "ltr" }}>
      <button onClick={handleSubmit}>Home</button>{' '}
      <Button variant="contained" onClick={handleSubmit}>Home</Button>{' '}
      <Button variant="primary" onClick={handleSubmit} >Home</Button>{' '}
      <Button variant="secondary" onClick={handleSubmit}>Home</Button>{' '}
    </div>
  );
}
export default HomeButton;
