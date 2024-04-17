import { Autocomplete, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { schedules } from "../../utils/mock/filters";

function Schedule() {
    const [value, setValue] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');

    const schedule = schedules.map((schedule) => schedule.name);

    return (
        <>
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
                sx={{ width: '194px', marginTop: '4px' }}
                renderInput={(params) => <TextField {...params} placeholder="Офис" />}
            />
        </>
    )
}

export default Schedule;