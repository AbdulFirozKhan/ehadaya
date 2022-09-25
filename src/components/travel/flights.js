import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FlightComponent() {
  return (
    <Stack spacing={1}>
      <div>
        <RadioGroup
          aria-labelledby="travel type"
          defaultValue="Return"
          name="radioTravelType"
          row
        >
          <FormControlLabel
            value="One Way"
            control={<Radio />}
            label="One Way"
          />
          <FormControlLabel value="Return" control={<Radio />} label="Return" />
          <FormControlLabel
            value="Multicity"
            control={<Radio />}
            label="Multicity"
          />
        </RadioGroup>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>From</InputLabel>
            <Select
              id="selectFrom"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>To</InputLabel>
            <Select
              id="selectTo"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Departure</InputLabel>
            <TextField
              id="dateDeparture"
              type="date"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Arrival</InputLabel>
            <TextField
              id="dateArrival"
              type="date"
              defaultValue=""
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Adult(s)</InputLabel>
            <TextField
              required
              id="textAdult"
              type="number"
              sx={{
                maxWidth: "162px",
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Child</InputLabel>
            <TextField
              required
              id="textChild"
              type="number"
              sx={{
                maxWidth: "162px",
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Infant below 2 years</InputLabel>
            <TextField
              required
              id="textInfant"
              type="number"
              sx={{
                maxWidth: "162px",
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Travel Class</InputLabel>
            <Select
              labelId="selectTravelClass"
              id="demo-simple-select"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            >
              <MenuItem value={10}>Economy</MenuItem>
              <MenuItem value={20}>Business</MenuItem>
              <MenuItem value={30}>First</MenuItem>
            </Select>
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Airlines Preference</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="selectAirlinesPref"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            >
              <MenuItem value={10}>All Airlines</MenuItem>
            </Select>
          </Stack>
        </Stack>
      </div>
      <div>
        <Button variant="contained">Buy Now</Button>
      </div>
    </Stack>
  );
}
