import {
    Avatar,
    Typography,
    Grid,
    Box,
    List,
    ListItem,
    IconButton,
} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import Book from '../../assets/diary.svg';
import { Students } from '../../utils/mock/students';
import { useState } from 'react';
import styles from './style.module.css';

interface StudentProps {
    student: Students;
    onFavorite: (id: number) => void;
}

function CandidatsResume({ student, onFavorite }: StudentProps) {
    const [isFavorite, setIsFavorite] = useState(student.is_favorited);

    const handleFavoriteClick = () => {
        onFavorite(student.id);
        setIsFavorite(!isFavorite);
    };

    const edLevel = student.required_education_level?.map((name) => name.name).join(',  ');
    const specialization = student.specialization?.map((name) => name.name).join(',  ');
    const skillsString = student.skills.map((name) => name.name);

    return (
        <>
            <Typography variant="h3" fontWeight={500} lineHeight="110%" color='#5A9BFF' width='100%'>
                Вакансия:
            </Typography>

            <Box maxWidth="lg" sx={{ mt: '14px', mb: 2, p: 0 }}>
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

                <Grid container columnSpacing={5} gap="24px">
                    <Grid item xs={12} sm={6} sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Grid>
                            <Typography variant="body1" fontWeight={500}>
                                О себе
                            </Typography>
                            <Typography variant="body2" mt="8px">
                                Здесь будет находится информация из резюме кандидата, раздел "О себе"
                            </Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="body1" fontWeight={500}>
                                Опыт работы
                            </Typography>
                            <Typography variant="body2" mt="8px">
                                Здесь будет находится информация из резюме кандидата, раздел "Опыт работы"
                            </Typography>
                        </Grid>
                    </Grid>

                    <Grid item xs sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <Box display="flex">
                            {skillsString.map((skill, id) => (
                                <Box key={id} className={styles.skills}>
                                    <Typography variant="body2">{skill}</Typography>
                                </Box>
                            ))}
                        </Box>
                        <Box className={styles.portfolio}>
                            <img className={styles.book} src={Book} alt="Книга" />
                            <Typography variant="body2" fontWeight={500} lineHeight="16px" color="#797981">
                                Портфолио
                            </Typography>
                        </Box>

                        <Typography variant="body1" fontWeight={500} >
                            Сертификаты
                        </Typography>
                        <List>
                            <ListItem
                                disablePadding
                                sx={{
                                    fontFamily: 'YS Text',
                                    fontSize: '14px',
                                    lineHeight: '20px',
                                    display: 'flex',
                                    gap: '8px',
                                }}
                            >
                                {/* <FiberManualRecordIcon sx={{ fontSize: 5 }} /> */}
                                <Typography>
                                    Здесь будет находится информация из резюме кандидата, раздел "Сертификаты"
                                </Typography>
                            </ListItem>
                        </List>
                        <Typography variant="body1" fontWeight={500}>
                            Технические навыки
                        </Typography>
                        <List>
                            {student.skills.map((skill) => (
                                <ListItem
                                    disablePadding
                                    key={skill.id}
                                    sx={{
                                        fontFamily: 'YS Text',
                                        fontSize: '14px',
                                        lineHeight: '20px',
                                        display: 'flex',
                                        gap: '8px',
                                    }}
                                >
                                    <FiberManualRecordIcon sx={{ fontSize: 5 }} />
                                    {skill.name}
                                </ListItem>
                            ))}
                        </List>
                        <Typography variant="body1" fontWeight={500}>
                            Языки
                        </Typography>
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default CandidatsResume;