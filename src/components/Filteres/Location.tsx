import { Autocomplete, TextField, Typography } from "@mui/material";
import { SetStateAction, SyntheticEvent, useState } from "react";
import { locations, Locations } from "../../utils/mock/filters";

function Location() {
    const [selectedLocation, setSelectedLocation] = useState<Locations | null>(null);

    const handleLocationChange = (
        _evt: SyntheticEvent,
        selectedLocation: SetStateAction<Locations | null>,
    ) => {
        if (selectedLocation) {
            setSelectedLocation(selectedLocation);
        } else {
            setSelectedLocation(null);
        }
    };

    return (
        <>
            <Typography variant="caption" fontWeight={500}>
                Город
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
                        sx={{ marginTop: '4px' }}
                    />
                )}
            />
        </>
    )
}

export default Location;