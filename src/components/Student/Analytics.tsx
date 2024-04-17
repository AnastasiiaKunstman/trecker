import {
    Avatar,
    Typography,
    Grid,
    Box,
    IconButton,
    Button,
    Tooltip,
    TextField,
} from '@mui/material';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import { longText } from '../../utils/constans/constans';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useState } from 'react';
import { Students } from '../../utils/mock/students';
import styles from './style.module.css';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

interface StudentProps {
    student: Students;
    onFavorite: (id: number) => void;
}

function Analitic({ student, onFavorite }: StudentProps) {
    const [isFavorite, setIsFavorite] = useState(student.is_favorited);
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(true);
    };

    const handleFavoriteClick = () => {
        onFavorite(student.id);
        setIsFavorite(!isFavorite);
    };

    const edLevel = student.required_education_level?.map((name) => name.name).join(',  ');
    const specialization = student.specialization?.map((name) => name.name).join(',  ');

    return (
        <>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h3" fontWeight={500} lineHeight="110%" color='#5A9BFF'>
                    Вакансия: Название вакансии
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Button
                        sx={{
                            display: 'flex',
                            color: '#797981',
                            '&:hover': {
                                color: '#1D6BF3',
                                backgroundColor: 'transparent',
                            },
                        }}
                        endIcon={(
                            <Tooltip title={longText}>
                                <InfoOutlinedIcon fontSize='small' className={styles.icon_button__info} />
                            </Tooltip>
                        )}
                    >
                        Анализ текста резюме нейросетью
                    </Button>
                    <button className={styles.btn} onClick={handleButtonClick}>
                        <AutoAwesomeIcon className={styles.sparkle} sx={{ color: '#fff' }} />
                        <span className={styles.text}>Аналитика AI</span>
                    </button>
                </Box>
            </Box>
            <Box width='100%'>
                <Box className={styles.box_student_info}>
                    <Avatar
                        src={student?.avatar || ''}
                        alt={student?.first_name}
                        sx={{ height: 60, width: 60, cursor: 'pointer' }}
                    />
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '12px', width: '100%' }}>
                        <Typography variant="h3" fontWeight={500} lineHeight="110%">
                            {`${student?.first_name} ${student?.last_name}`}
                        </Typography>
                        <Typography variant="h3">
                            {specialization ? `${specialization}.` : ''}
                            {' '}
                            {edLevel ? `${edLevel}.` : ''}
                        </Typography>
                        <Box className={styles.box_location}>
                            <FmdGoodOutlinedIcon fontSize='small' />
                            <Typography variant="body2" fontWeight={500} lineHeight="16px" color="#797981">
                                {student?.location.name}
                            </Typography>
                        </Box>
                    </Box>
                    <Box className={styles.box_icon}>
                        <Box sx={{ width: 'max-content' }}>
                            <IconButton
                                aria-label="like"
                                onClick={handleFavoriteClick}
                                className={`${styles.icon_button__like} ${isFavorite ? styles.active : ''}`}
                            />
                            <IconButton className={styles.icon_button__match} />
                            <IconButton className={styles.icon_button__eay} />
                            <IconButton
                                className={styles.icon_button__telegram}
                                component="a"
                                href={`https://t.me/${student.telegram}`}
                                target="_blank"
                            />
                            <IconButton
                                className={styles.icon_button__email}
                                component="a"
                                href={`mailto:${student.email}`}
                                target="_blank"
                            />
                        </Box>
                        <Box className={styles.match}>
                            <Typography variant="body2">
                                Совпадение 80%
                            </Typography>
                        </Box>
                    </Box>
                </Box>
                {!isClicked && (
                    <Box className={styles.box_AI}>
                        <Typography variant="h3" lineHeight="110%" color="#5A9BFF" fontWeight={500} >
                            Нажмите на кнопку «Аналитика AI»
                        </Typography>
                        <Typography variant="h3" lineHeight="120%" color="#797981" >
                            для получения результатов
                        </Typography>
                    </Box>
                )}
                {isClicked && (
                    <>
                        <Box marginBottom="20px">
                            <Typography variant="h2" lineHeight="130%" fontWeight={500}>
                                Результаты аналитики:
                            </Typography>
                        </Box>

                        <Grid container columnSpacing={5} gap="24px">
                            <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <Grid>
                                    <Typography variant="body1" fontWeight={500} >
                                        Красные флаги
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        placeholder="Красные флаги — важные моменты на которые нужно обратить внимание. Например, перерыв в работе больше 6 месяцев или смена работы чаще, чем раз в год."
                                        sx={{ marginTop: '8px' }}
                                    />
                                </Grid>
                                <Grid>
                                    <Typography variant="body1" fontWeight={500}>
                                        Зеленые флаги
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        placeholder="Зеленые флаги — важные моменты на которые нужно обратить внимание. Например, последний опыт работы релевантен с вакансией или профильное образование."
                                        sx={{ marginTop: '8px' }}
                                    />
                                </Grid>
                            </Grid>

                            <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <Grid>
                                    <Typography variant="body1" fontWeight={500} >
                                        Общий вывод:
                                    </Typography>
                                    <TextField
                                        fullWidth
                                        multiline
                                        placeholder="Здесь будет находится краткий вывод по общей совместимости кандидата с вакансией и критерии на которых основан вывод."
                                        sx={{ marginTop: '8px' }}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </>
                )}
            </Box >
        </>
    )
}

export default Analitic;