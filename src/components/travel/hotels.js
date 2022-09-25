import React, { Component } from "react";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import "./hotels.css";

export default class HotelsComponent extends Component {
  render() {
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
                  minWidth: "500px",
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
              <InputLabel>Rooms</InputLabel>
              <Select
                labelId="selectRoomsClass"
                id="demo-simple-select"
                onChange=""
                sx={{
                  maxWidth: "162px",
                }}
              >
                <MenuItem value={10}>1</MenuItem>
                <MenuItem value={20}>2</MenuItem>
                <MenuItem value={30}>3</MenuItem>
              </Select>
            </Stack>
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
          </Stack>
        </div>
        <div>
          <Button variant="contained">Search Hotel</Button>
        </div>
      </Stack>
    );
  }
}
