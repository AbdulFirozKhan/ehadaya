import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Flight from './flights';
import CarRental from './car-rental';
import Hotels from './hotels';
import './travel.css';
import Stack from "@mui/material/Stack";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`horizontal-tabpanel-${index}`}
      aria-labelledby={`horizonl-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};
export default function IconLabelTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <><div className="center">
      <Stack direction="row" spacing={1}>
      <span className="travel-header">Go for your</span>
      <span className="travel-header-bold">Favourite Destination!</span>
      </Stack>
    </div>
    <Stack spacing={2}>
    <div className="center">
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Travel">
        <Tab icon={<AccountCircleIcon />} label="Flights" />
        <Tab icon={<AccountCircleIcon />} label="Hotels" />
        <Tab icon={<AccountCircleIcon />} label="Car Rental" />
      </Tabs>    
    </div>
      <TabPanel value={value} index={0}>
        <Flight />
      </TabPanel><TabPanel value={value} index={1}>
        <Hotels />
      </TabPanel><TabPanel value={value} index={2}>
        <CarRental />
        </TabPanel>
      </Stack>
    </>
  );
}