import React from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import moment from "moment";

import "./hotels.css";

export default function HotelsComponent() {
  const todaysDate = moment(new Date()).format("YYYY-MM-DD");
  return (
    <Stack spacing={2}>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>City</InputLabel>
            <Select
              id="selectCity"
              onChange=""
              sx={{
                minWidth: "515px",
                height: "40px",
              }}
            />
          </Stack>
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Stack spacing={0}>
            <InputLabel>Check-In</InputLabel>
            <TextField
              id="Check-In"
              defaultValue={todaysDate}
              type="date"
              sx={{ width: 250 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Check-Out</InputLabel>
            <TextField
              id="dateCheck-Out"
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
        <Stack direction="row" spacing={3}>
          <Stack spacing={0}>
            <InputLabel>Rooms</InputLabel>
            <Select
              labelId="selectRoomsClass"
              id="demo-simple-select"
              onChange=""
              sx={{ width: "160px" }}
            >
              <MenuItem value={10}>1</MenuItem>
              <MenuItem value={20}>2</MenuItem>
              <MenuItem value={30}>3</MenuItem>
            </Select>
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Adult(s)12+ Yrs</InputLabel>
            <TextField
              required
              id="textAdult"
              type="number"
              sx={{
                width: "160px",
              }}
            />
          </Stack>
          <Stack spacing={0}>
            <InputLabel>Child(s)2+ 11 Yrs</InputLabel>
            <TextField
              required
              id="textChild"
              type="number"
              sx={{
                width: "150px",
              }}
            />
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
          Search Hotel
        </Button>
      </div>
    </Stack>
  );
}
