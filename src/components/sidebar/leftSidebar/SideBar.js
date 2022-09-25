import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Travel from '../../travel/travel';
import './sidebar.css';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
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

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function Sidebar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
    >
      <Tabs
      className="sibeBar-nav"
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <img className="main-logo" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwsPEhAODRAQCg0OEA0NDQ0NDQ8NDQoKFREWFhURExMYHSggGBolGxMTITEhJSk3Li46Fx8zODM4NygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAKgBLAMBIgACEQEDEQH/xAAYAAEBAQEBAAAAAAAAAAAAAAAAAgMBB//EACMQAQEBAAIBBAMAAwAAAAAAAAABAgMRMRITIVFBcfBhgaH/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A9pAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAgAO5nYOSO5jWTplryDT0Q9ETnd/bmt39AnoVx+V6z2DILAAAAAAAAAAAAAAAAAAAAAAAAAAAAgQBeNSJzPlWsfQO3f0nWOku3VB3GunNXtwBcz+XZuI9V8OArdlS0zj7ZgArjnyDueP7V6Ib10z7oO6x05J2a1a4DSccd9EZ3VpLQd1jpLa+GILxmV2cbvH4TvVBXojPWenc6q9+AZ5kVvPSI2vzAYrxntDafEBlqRWcfaK7NUGnojl4/pn2146DJ3M7d5PKuICccd9ETyWploO6z0mFpAVjy1rGV3W+wdxZ0gdubAcAB3P+Vas+E+m+XAbsarPJ9oAXxIVx35B3k8oa7z2z9NBx3Oe3dZsd4gV1mOerP8ARzklTM0GrFsxBrx+Ge/LTj8M9+QcjbfhjG2/AMWnHWasX5B30/P/AF3kq2W78glpnE/KI11PgE95/orNn4ZdVpidAjk8mddHJ5M57Bfrjvxfplc13OaDu8ojXk8MoAvEiHZegaXE/HwjWq0zrtlryDuM9uanS84c1j/YOTV8LmJ+0cfletdfsEbk/CQAABc5Pt33IzAVrfbkvTgDSckLyMwGnuMwBed9J1XACL1uIAAAae4zABed/aAGnuQnIzAd3e3c7sSA09yF5IzAd1rtyBAAAHc1wBp7kPcjMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQH/9k=" alt="logo" />
        <Tab icon={<AccountCircleIcon />} label="Travels" {...a11yProps(0)} />
        <Tab icon={<AccountCircleIcon />} label="Vouchers" {...a11yProps(1)} />
        <Tab icon={<AccountCircleIcon />} label="Shop" {...a11yProps(2)} />
        <Tab icon={<AccountCircleIcon />} label="Activities" {...a11yProps(3)} />
        <Tab icon={<AccountCircleIcon />} label="My Account" {...a11yProps(4)} />
        <Tab icon={<AccountCircleIcon />} label="Logout" {...a11yProps(5)} />
      </Tabs>
      <TabPanel value={value} index={0}>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Travel />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
    </Box>
  );
}
