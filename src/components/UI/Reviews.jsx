import React from "react";
import "../../styles/Reviews.css";
import { Box, Button, Divider, LinearProgress, Rating } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

const Reviews = () => {
  return (
    <section className="container">
      <div className="grid-container">
        <Box width={{ xs: "100%", md: "80%" }} className="grid-item card">
          {/* back icon */}
          <div className="flex back-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="currentColor"
            >
              <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
            </svg>
          </div>
          <h1 className="font-lg font-bold mt-4">Reviews And ratings</h1>
          <div className="mt-3 flex">
            <div className="">
              {/* actual rating come from api */}
              <h1 className="font-xl font-bold">4.2</h1>
            </div>
            <div className="ml-4">
              {/* actual value from api */}
              <Rating
                name="read-only"
                color=""
                value={4}
                readOnly
                size="large"
              />
              <p>Based on 456 Ratings</p>
            </div>
          </div>
          {/* divider line */}
          <div className="my-4">
            <Divider />
          </div>

          {/* rating range */}
          <div>
            <CardParameters name={"Reliability"} rating={4.5} value={90} />
            <CardParameters name={"Payout Rating"} rating={4.8} value={98} />
            <CardParameters name={"Postive Solution"} rating={4.5} value={80} />
          </div>
          {/* summery button */}
          <div className="mt-4">
            <Button variant="text" endIcon={<KeyboardArrowDown />}>
              {" "}
              Show Summery
            </Button>
          </div>
        </Box>
      </div>
    </section>
  );
};

export default Reviews;

const CardParameters = ({ name, rating, value }) => {
  return (
    <div className="mt-3">
      <div className="flex justify-between">
        <h1>{name}</h1>
        <h1>{rating}</h1>
      </div>
      <div className="mt-3">
        <LinearProgress variant="determinate" value={value} />
      </div>
    </div>
  );
};
