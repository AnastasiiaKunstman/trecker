import {
    Card, CardContent, Box, Typography, Button, Dialog, DialogContent,
} from '@mui/material';
import { FC, useContext, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import { Vacancy } from '../../utils/mock/vacancies';
import { format } from 'date-fns';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import styles from './styles.module.css'
import { SearchContext } from '../../context/SearchContext';
import PopupCard from './PopupCard';

interface VacancyCardProps {
    card: Vacancy;
}

const VacancyCard: FC<VacancyCardProps> = ({ card }) => {
    const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
    const { moveToArchive } = useContext(SearchContext);
    const isArchivePage = card.is_archived;

    const skillsString = card.required_skills.map((name) => name.name);
    const formattedDate = format(new Date(card.pub_date), 'dd.MM');
    const educationLevel = card.required_education_level.map((name) => name.name);
    const schedule = card.schedule.map((name) => name.name).join(', ');

    const handleMoveToArchive = () => {
        if (moveToArchive) {
            setOpenDeleteDialog(true);
        }
    };

    const handleDelete = () => {
        if (moveToArchive) {
            moveToArchive(card.id);
            setOpenDeleteDialog(false);
        }
    };

    const handleCloseDialogs = () => {
        setOpenDeleteDialog(false);
    };

    return (
        <>
            <Card key={card.id}>
                <CardContent className={styles.card_content} sx={{ padding: 0 }}>
                    <Box className={styles.card_box}>
                        <Typography variant="h3" fontWeight={'500'}>
                            {card.name}
                        </Typography>
                        <Box className={styles.icon_box}>
                            {isArchivePage ? (
                                <>
                                    <EditIcon fontSize="small" />
                                    <AutorenewIcon fontSize="small" />
                                </>
                            ) : (
                                <>
                                    <EditIcon fontSize="small" />
                                    <DeleteIcon fontSize="small" onClick={handleMoveToArchive} />
                                </>
                            )}
                        </Box>
                    </Box>
                    <Box className={styles.info_box}>
                        <Box className={styles.row}>
                            <Typography variant="body1">{educationLevel}</Typography>
                            <Typography variant="body1">{card.salary}</Typography>
                        </Box>
                        <Box className={styles.row}>
                            <Box className={styles.location_box}>
                                <Box className={styles.location}>
                                    <FmdGoodOutlinedIcon fontSize='small' />
                                    <Typography variant="body1">
                                        {card.location.name}
                                    </Typography>
                                </Box>
                                <Typography variant="body1">{schedule}</Typography>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={styles.description} sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        {skillsString.map((skill, id) => (
                            <Box
                                key={id}
                                sx={{
                                    border: '1px solid #1D6BF3',
                                    borderRadius: '4px',
                                    backgroundColor: '#fff',
                                    color: '#1D6BF3',
                                    textAlign: 'center',
                                    height: 'min-content',
                                    padding: '6px 12px',
                                    margin: '4px',
                                }}
                            >
                                <Typography variant="body2">{skill}</Typography>
                            </Box>
                        ))}
                    </Box>
                    <Box className={styles.date}>
                        {isArchivePage ? (
                            <></>
                        ) : (
                            <>
                                <Button variant="contained" href="#contained-buttons">Перейти</Button>
                                <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                    <Typography variant="body2">{formattedDate}</Typography>
                                </Box>
                            </>
                        )}
                    </Box>
                </CardContent>
            </Card>

            <Dialog maxWidth="lg" onClose={handleCloseDialogs} open={openDeleteDialog}>
                <DialogContent>
                    <PopupCard
                        key={card.id}
                        id={card.id}
                        onDelete={handleDelete}
                        onCancel={handleCloseDialogs}
                    />
                </DialogContent>
            </Dialog>
        </>
    )
};

export default VacancyCard;