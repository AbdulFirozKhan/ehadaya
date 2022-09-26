import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import moment from "moment";

export default function FlightComponent() {
  const todaysDate = moment(new Date()).format("YYYY-MM-DD");

  return (
    <Stack spacing={1}>
      <div>
        <RadioGroup
          aria-labelledby="travel type"
          defaultValue="Return"
          name="radioTravelType"
          sx={{
            "&.Mui-checked": {
              color: "#4B8DF8",
            },
          }}
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
              defaultValue={todaysDate}
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
              defaultValue={todaysDate}
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
              id="selectTravelClass"
              onChange=""
              sx={{
                minWidth: "250px",
                height: "40px",
              }}
            >
              <MenuItem value={1}>Economy</MenuItem>
              <MenuItem value={2}>Business</MenuItem>
              <MenuItem value={3}>First</MenuItem>
            </Select>
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Airlines Preference</InputLabel>
            <Select
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
        <Button
          variant="contained"
          sx={{
            float: "right",
            backgroundColor: "#801C7D",
          }}
        >
          Buy Now
        </Button>
      </div>
    </Stack>
  );
}
