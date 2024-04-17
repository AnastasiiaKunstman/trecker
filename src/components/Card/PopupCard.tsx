import { FC } from 'react';
import {
  Typography, Button, Box, IconButton,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';

interface PopupCardProps {
  id: number;
  onDelete: () => void;
  onCancel: () => void;
}

const PopupCard: FC<PopupCardProps> = ({ id, onCancel, onDelete }) => {
  const location = useLocation();

  const isArchivePage = location.pathname === '/vacancies/archive';

  return (
    <>
      <Box
        key={id}
        sx={{
          width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px',
        }}
      >
        {isArchivePage ? (
          <Typography variant="h1">Восстановить вакансию?</Typography>
        ) : (
          <Typography variant="h1">Переместить вакансию в архив?</Typography>
        )}
        <form onSubmit={onDelete}>
          <Button
            variant="contained"
            sx={{
              width: '153px',
              backgroundColor: '#5A9BFF',
              color: '#fff',
              height: '40px',
              borderRadius: '6px',
              padding: '10px 20px',
              fontFamily: 'YS Text',
              fontSize: '14px',
              lineHeight: '20px',
            }}
            type="submit"
            aria-label="Сохранение данных"
          >
            Да
          </Button>
        </form>

      </Box>
      <IconButton
        type="button"
        aria-label="Отмена"
        onClick={onCancel}
        sx={{ position: 'absolute', top: '0', right: '0' }}
      >
        <CloseIcon />
      </IconButton>
    </>
  );
};

export default PopupCard;
