import React from "react";
import { Button } from '@mui/material';
import "./Main.css";
import "./ShopButton.js";

export function Main() {
  return (
    <div class="content">
      <div class="column">
        <h2>Product_one</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
          elementum magna tristique. Quisque vehicula, risus eget aliquam
          placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
          Praesent scelerisque tortor sed accumsan convallis.
        </p>
        <Button variant="outlined" href="/Shop">Add to Cart</Button>

      </div>

      <div class="column">
        <h2>Product_Two</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
          elementum magna tristique. Quisque vehicula, risus eget aliquam
          placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
          Praesent scelerisque tortor sed accumsan convallis.
        </p>
        <Button variant="outlined" href="/Shop">Add to Cart</Button>
      </div>

      <div class="column">
        <h2>Product_Three</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit
          amet pretium urna. Vivamus venenatis velit nec neque ultricies, eget
          elementum magna tristique. Quisque vehicula, risus eget aliquam
          placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
          Praesent scelerisque tortor sed accumsan convallis.
        </p>
        <Button variant="outlined" href="/Shop">Add to Cart</Button>
      </div>
    </div>
  );
}
export default Main;
