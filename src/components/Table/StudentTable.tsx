import {
  Table, TableBody, TableCell, TableHead, TableRow,
  TableContainer, Grid, Box, Typography, Button,
} from '@mui/material';
import TableActive from './TableActive';
import DeleteIcon from '@mui/icons-material/Delete';
import NavBar from '../NavBar/NavBar';
import AddIcon from '@mui/icons-material/Add';
import Location from '../Filteres/Location';
import Schedule from '../Filteres/Schedule';
import Skill from '../Filteres/Skill';
import results, { Students } from '../../utils/mock/students';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import { StudentContext } from '../../context/StudentContext';

function StudentTable() {
  const location = useLocation();
  const [students, setStudents] = useState<Students[]>(results);

  //Лайк
  const handleLikeStudent = (id: number) => {
    setStudents((prevResults) =>
      prevResults.map((student) =>
        student.id === id ? { ...student, is_favorited: true } : student
      )
    );
  };

  //Дизлайк
  const handleDislikeStudent = (id: number) => {
    setStudents((prevResults) =>
      prevResults.map((student) =>
        student.id === id ? { ...student, is_favorited: false } : student
      )
    );
  };

  return (
    <StudentContext.Provider value={{ results: students }}>
      <NavBar />
      <main>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
            marginBottom: '20px',
            width: '100%',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography variant="subtitle1" fontWeight={500}>
              Настройка фильтров поиска
            </Typography>
            <Box sx={{ display: 'flex', gap: '20px' }}>
              <Button type="button" size="small" sx={{ color: '#1D6BF3', fontSize: '14px', lineHeight: '20px' }}>
                <AddIcon fontSize='small' sx={{ color: '#1D6BF3' }} />
                Добавить фильтры
              </Button>
              <Button type="button" size="small" sx={{ color: '#797981', fontSize: '14px' }}>
                <DeleteIcon fontSize='small' />
                Очистить все
              </Button>
            </Box>
          </Box>

          {/* Фильтры */}
          <Box sx={{ display: 'flex', justifyContent: 'flex-start', gap: '20px' }}>
            <Grid padding={0} width="194px">
              <Location />
            </Grid>
            <Grid padding={0} width="194px">
              <Schedule />
            </Grid>
            <Grid padding={0} width="250px">
              <Skill />
            </Grid>
          </Box>

          <TableContainer>
            <Table aria-label="simple table" stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>#</TableCell>
                  <TableCell align="center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <rect x="0.5" y="0.5" width="23" height="23" rx="3.5" fill="white" stroke="#797981" />
                    </svg>
                  </TableCell>
                  <TableCell>Студент</TableCell>
                  <TableCell />
                  <TableCell>Город</TableCell>
                  <TableCell>Формат работы</TableCell>
                  <TableCell>Навыки</TableCell>
                  <TableCell />
                  <TableCell sx={{ width: '180px' }}>Действия</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {location.pathname === '/students' ? (
                  students?.map((student) => (
                    <TableActive
                      key={student.id}
                      student={student}
                      onLike={handleLikeStudent}
                      onDislike={handleDislikeStudent}
                    />
                  ))
                ) : (
                  students?.filter((student) => student.is_favorited).map((student) => (
                    <TableActive
                      key={student.id}
                      student={student}
                      onLike={handleLikeStudent}
                      onDislike={handleDislikeStudent}
                    />
                  ))
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </main>
    </StudentContext.Provider>
  );
}

export default StudentTable;