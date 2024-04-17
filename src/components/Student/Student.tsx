import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import CandidatsResume from './CandidatsResume';
import Analitic from './Analytics';
import { Students } from '../../utils/mock/students';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import LoggedUserHeader from '../Header/LoggedUserHeader';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

interface StudentProps {
    student: Students;
    onFavorite: (id: number) => void;
    onCancel: () => void;
}


function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <main>
                    {children}
                </main>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Student({ student, onFavorite, onCancel }: StudentProps) {
    const [value, setValue] = React.useState(0);

    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <LoggedUserHeader />
            <Box>
                <Box sx={{ display: 'flex', width: '87%', margin: '28px auto 34px' }}>
                    <ArrowBackIosIcon onClick={onCancel} sx={{ cursor: 'pointer', margin: 'auto 0' }} />
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Резюме кандидата" {...a11yProps(0)} />
                        <Tab label="Аналитика" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    <CandidatsResume student={student} onFavorite={onFavorite} />
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <Analitic student={student} onFavorite={onFavorite} />
                </CustomTabPanel>
            </Box>
        </>
    );
}