import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import LoggedUserHeader from '../Header/LoggedUserHeader';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Toolbar } from '@mui/material';
import { tabConfig, tableTabConfig } from '../../utils/constans/constans';

export default function NavBar() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState(location.pathname);

  const handleTabClick = (value: string) => {
    setActiveTab(value);
  };

  return (
    <>
      <LoggedUserHeader />

      <Box sx={{ width: '87%', margin: '0 auto', height: '8.9%' }}>
        <Toolbar>
          <Tabs value={activeTab}>
            {location.pathname.startsWith('/vacancies') ? (
              tabConfig.map((tab) => (
                <Tab
                  key={tab.path}
                  label={tab.label}
                  value={tab.path}
                  component={Link}
                  to={tab.path}
                  onClick={() => handleTabClick(tab.path)}
                />
              ))
            ) : location.pathname.startsWith('/students') ? (
              tableTabConfig.map((tab) => (
                <Tab
                  key={tab.path}
                  label={tab.label}
                  value={tab.path}
                  component={Link}
                  to={tab.path}
                  onClick={() => handleTabClick(tab.path)}
                />
              ))
            ) : null}
          </Tabs>
        </Toolbar>
      </Box>
    </>
  )
}