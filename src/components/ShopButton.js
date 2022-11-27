import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ShopButton() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    try {
      navigate("/", { replace: true });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button variant="outlined" onClick={handleSubmit}>Read More</Button>{' '}
    </div>
  );
}
export default ShopButton;
