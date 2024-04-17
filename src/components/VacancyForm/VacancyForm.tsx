/* eslint-disable max-len */
/* eslint-disable no-console */
import { SetStateAction, SyntheticEvent, useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Box,
  Select,
  MenuItem,
  FormControlLabel,
  TextField,
  Autocomplete,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Input from '../Input/Input';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { IOSSwitch } from '../../utils/constans/Switch';
import Snackbars from '../SnackBars/SnackBars';
import { vacancyShema } from '../../utils/validation/yupSchema';
import { educationLevels, locations, schedules, skills, specializations } from '../../utils/mock/filters';
import styles from './styles.module.css';
import NavBar from '../NavBar/NavBar';

type TSelectedOpt = {
  id: number
  name: string
};

function VacancyForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success');
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [hidden, setHidden] = useState(false);
  const [selectedSkills, setSelectedSkills] = useState<TSelectedOpt[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<TSelectedOpt | null>(null);
  const navigate = useNavigate();

  const [value, setValue] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState('');

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
    navigate('/students');
  };

  const handleSkillsChange = (
    _evt: SyntheticEvent,
    selectedSkill: TSelectedOpt[],
  ) => {
    setSelectedSkills([...selectedSkill]);
  };

  const specialization = specializations.map((specialization) => specialization.name);
  const educationLevel = educationLevels.map((educationLevel) => educationLevel.name);
  const schedule = schedules.map((schedule) => schedule.name);

  const handleLocationChange = (
    _evt: SyntheticEvent,
    // eslint-disable-next-line @typescript-eslint/no-shadow
    selectedLocation: SetStateAction<TSelectedOpt | null>,
  ) => {
    if (selectedLocation) {
      setSelectedLocation(selectedLocation);
    } else {
      setSelectedLocation(null);
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(vacancyShema) });

  const handleHiddenChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setHidden(event.target.checked);
  };

  return (
    <>
      <NavBar />
      <main>
        <form noValidate onSubmit={handleSubmit((data) => {
          console.log(data)
          const transformedData = {
            ...data,
            location: data.location,
            required_skills: selectedSkills.map((id) => ({ id, name: String(id) })),
            required_education_level: [{ id: Number(data.required_education_level), name: String(data.required_education_level) }],
            specialization: [{ id: Number(data.specialization), name: String(data.specialization) }],
            schedule: [{ id: Number(data.schedule), name: String(data.schedule) }],
          }
          localStorage.setItem('vacancy', JSON.stringify(transformedData));
          setSnackbarSeverity('success');
          setSnackbarOpen(true);
          setSnackbarMessage('Вакансия успешно создана');
          navigate('/students');
        })}
        >

          <Grid container item xs={12} height={'65.3%'} gap={'2.9vw'}>
            <Grid item container xs={5} flexDirection="column" gap={'20px'}>
              <Grid sx={{ p: 0 }}>
                <Typography variant="body1" sx={{ marginBottom: '4px', fontWeight: '500' }}>
                  Вакансия
                </Typography>
                <Input
                  fullWidth
                  type="text"
                  placeholder="Введите название должности"
                  register={register}
                  registerName="name"
                  error={!!errors.name}
                  helperText={errors.name?.message}
                />
              </Grid>

              <Grid
                item
                container
                xs
                sx={{
                  flexDirection: 'column',
                  backgroundColor: '#F1F6FF',
                  borderRadius: '12px',
                  padding: '5.1% 8.5%',
                  gap: '3.4%',
                  justifyContent: 'space-between',
                  height: '84%',
                  flexWrap: 'nowrap',
                }}
              >
                <Grid container justifyContent="space-between" alignItems="center">
                  <Typography variant="body1" fontWeight='500'>Фильтры</Typography>
                  <Button
                    type="button"
                    size="small"
                    sx={{
                      color: '#797981', fontSize: '14px', gap: '4px', lineHeight: '20px',
                    }}
                  >
                    <DeleteIcon fontSize='small' />
                    Очистить фильтры
                  </Button>
                </Grid>
                <Grid padding={0} sx={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  <Typography variant="caption" fontWeight={500}>
                    Зарплата или вилка
                  </Typography>
                  <Input
                    type="text"
                    fullWidth
                    size="small"
                    placeholder="от"
                    register={register}
                    registerName="salary"
                    error={!!errors.salary}
                    helperText={errors.salary?.message}
                  />
                </Grid>
                <Grid
                  container
                  sx={{
                    padding: '0',
                    gap: '20px',
                  }}
                >
                  <Grid xs item>
                    <Typography variant="caption" fontWeight={500}>
                      Формат работы
                    </Typography>
                    <Autocomplete
                      value={value}
                      onChange={(_event, newValue: string | null) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(_event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      size="small"
                      noOptionsText="Нет подходящих вариантов"
                      options={schedule}
                      renderInput={(params) => <TextField {...params} placeholder="Офис" />}
                    />
                  </Grid>
                </Grid>

                <Grid padding={0}>
                  <Typography variant="caption" fontWeight={500}>
                    Локация
                  </Typography>
                  <Autocomplete
                    options={locations}
                    getOptionLabel={(location) => location.name}
                    onChange={handleLocationChange}
                    value={selectedLocation}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    noOptionsText="Нет подходящих вариантов"
                    size="small"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        type="text"
                        placeholder="Москва"
                        name="location"
                      />
                    )}
                  />
                </Grid>

                <Grid
                  container
                  sx={{
                    padding: '0',
                    gap: '20px',
                  }}
                >
                  <Grid item xs>
                    <Typography variant="caption" fontWeight={500}>
                      Уровень
                    </Typography>
                    <Autocomplete
                      value={value}
                      onChange={(_event, newValue: string | null) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(_event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      size="small"
                      noOptionsText="Нет подходящих вариантов"
                      options={educationLevel}
                      renderInput={(params) => <TextField {...params} placeholder="Junior" />}
                    />
                  </Grid>
                  <Grid item xs>
                    <Typography variant="caption" fontWeight={500}>
                      Специализация
                    </Typography>
                    <Autocomplete
                      value={value}
                      onChange={(_event, newValue: string | null) => {
                        setValue(newValue);
                      }}
                      inputValue={inputValue}
                      onInputChange={(_event, newInputValue) => {
                        setInputValue(newInputValue);
                      }}
                      size="small"
                      noOptionsText="Нет подходящих вариантов"
                      options={specialization}
                      renderInput={(params) => <TextField {...params} placeholder="Программирование" />}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  sx={{
                    padding: '0',
                    gap: '16px',
                  }}
                >
                  <FormControlLabel
                    control={<IOSSwitch sx={{ margin: '0 12px' }} checked={hidden} onChange={handleHiddenChange} />}
                    label="Дополнительно"
                  />
                  <Box width="100%">
                    <Grid
                      container
                      sx={{
                        padding: '0',
                        gap: '20px',
                      }}
                    >
                      <Grid item xs>
                        <Typography variant="caption" fontWeight={500} sx={{ color: hidden ? '#1A1B22' : '#797981' }}>
                          Возраст
                        </Typography>
                        <TextField
                          fullWidth
                          size="small"
                          type="text"
                          placeholder="Число или диапазон"
                          disabled={!hidden}
                          sx={{ marginTop: '4px', backgroundColor: hidden ? '#fff' : '#F9FAFB' }}
                        />
                      </Grid>
                      <Grid item xs>
                        <Typography variant="caption" fontWeight={500} sx={{ color: hidden ? '#1A1B22' : '#797981' }}>
                          Уровень английского
                        </Typography>
                        <Select
                          fullWidth
                          size="small"
                          defaultValue=""
                          disabled={!hidden}
                          sx={{ backgroundColor: hidden ? '#fff' : '#F9FAFB' }}
                        >
                          <MenuItem value="a1">A1</MenuItem>
                          <MenuItem value="a2">A2</MenuItem>
                          <MenuItem value="b1">B1</MenuItem>
                          <MenuItem value="b2">B2</MenuItem>
                          <MenuItem value="c1">C1</MenuItem>
                          <MenuItem value="c2">C2</MenuItem>
                        </Select>
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              item
              container
              xs
              sx={{
                justifyContent: 'flex-start', flexDirection: 'column', p: 0, gap: '20px',
              }}
            >
              <Grid
                container
                sx={{
                  justifyContent: 'flex-start',
                  flexDirection: 'column',
                }}
              >
                <Typography variant="body1" sx={{ marginBottom: '4px', fontWeight: '500' }}>
                  Описание
                </Typography>
                <Grid
                  container
                  sx={{
                    gap: '40px',
                    justifyContent: 'space-between',
                    flexWrap: 'nowrap',
                  }}
                >
                  <Button fullWidth variant="outlined">
                    Из шаблонов Яндекс Практикума
                  </Button>
                  <button className={styles.btn}>
                    <AutoAwesomeIcon className={styles.sparkle} sx={{ color: '#1D6BF3' }} />
                    <span className={styles.text}>Генерация текста нейросетью</span>
                  </button>
                </Grid>
              </Grid>

              <Grid
                item
                container
                xs
                sx={{
                  padding: '0',
                  alignContent: 'flex-start',
                  alignItems: 'flex-end',
                  gap: '24px'
                }}
              >
                <Grid item xs={12}>
                  <Typography variant="caption" fontWeight={500}>
                    Технологии, ключевые слова
                  </Typography>
                  <Autocomplete
                    multiple
                    options={skills}
                    getOptionLabel={(skill) => skill.name}
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    onChange={handleSkillsChange}
                    value={selectedSkills}
                    filterSelectedOptions
                    size='small'
                    noOptionsText="Нет подходящих вариантов"
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        placeholder={
                          selectedSkills.length === 0
                            ? 'Java Script, CSS, HTML'
                            : ''
                        }
                        sx={{ marginTop: '4px' }}
                      />
                    )}
                  />
                </Grid>

                <Grid item xs={12} sx={{ display: 'flex', flexDirection: 'column', gap: '4px', height: '73.4%' }}>
                  <Typography variant="caption" fontWeight={500}>
                    Описание работы
                  </Typography>
                  <Input
                    type="text"
                    fullWidth
                    multiline
                    rows={16}
                    name="text"
                    register={register}
                    registerName="text"
                    error={!!errors.text}
                    helperText={errors.text?.message}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            pt: '2.66vh',
          }}
          >
            <Box className={styles.edit_buttons}>
              <Button variant='contained' type="submit" className={styles.save_button}>
                Сохранить
              </Button>
              <Button variant='contained' type="submit" className={styles.publish_button}>
                Опубликовать вакансию и начать поиск
              </Button>
            </Box>
          </Box>
        </form>
      </main >

      <Snackbars
        open={snackbarOpen}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        severity={snackbarSeverity}
      />
    </>
  );
}

export default VacancyForm;
