import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import "./car-rental.css";
import moment from "moment";

export default function CarRentalComponent() {
  const todaysDate = moment(new Date()).format("YYYY-MM-DD");
  return (
    <Stack spacing={2}>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Country</InputLabel>
            <Select
              labelId="Select Country"
              id="demo-simple-select"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            ></Select>
          </Stack>
          <Stack spacing={0}>
            <InputLabel>City</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="Select City"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            >
              <MenuItem value={10}></MenuItem>
            </Select>
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack spacing={0}>
          <InputLabel>Location</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="Select Location"
            onChange=""
            sx={{
              maxWidth: "515px",
              height: "40px",
            }}
          >
            <MenuItem value={10}></MenuItem>
          </Select>
        </Stack>
      </div>

      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Pick-UP Date</InputLabel>
            <TextField
              id="datePick-UP-Date"
              type="date"
              defaultValue={todaysDate}
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Pick-UP Time</InputLabel>
            <TextField
              id="time"
              type="time"
              defaultValue="00:00"
              sx={{ width: 250 }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Drop-Off Date</InputLabel>
            <TextField
              id="dateDrop-Off-Date"
              type="date"
              defaultValue={todaysDate}
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Drop-Off Time</InputLabel>
            <TextField
              id="time"
              type="time"
              defaultValue="00:00"
              sx={{ width: 250 }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <div>
          <Stack direction="row" spacing={2}>
            <FormControlLabel
              value="ReturnToSameLocation"
              control={<Checkbox />}
              label="Return to same location"
            />
            <FormControlLabel
              value="DriverAge"
              control={<Checkbox />}
              label="Driver aged between 25 -70 years"
            />
          </Stack>
        </div>
      </div>
      <div>
        <Button
          variant="contained"
          sx={{
            float: "right",
            backgroundColor: "#801C7D",
          }}
        >
          Search Car
        </Button>
      </div>
    </Stack>
  );
}
