import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import "./car-rental.css";

export default function CarRentalComponent() {
  return (
    <Stack spacing={2}>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Counntry</InputLabel>
            <Select
              labelId="Select Counntry"
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
              minWidth: "520px",
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
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}></Stack>
        <Stack spacing={0}>
          <InputLabel>Drop-Off Date</InputLabel>
          <TextField
            id="dateDrop-Off-Date"
            type="date"
            defaultValue=""
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Stack>
      </div>

      <div>
        <Button variant="contained">Search Car</Button>
      </div>
    </Stack>
  );
}
