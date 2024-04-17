import { Autocomplete, TextField, Typography } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { skills } from "../../utils/mock/filters";

type TSelectedOpt = {
    id: number
    name: string
};

function Skill() {
    const [selectedSkills, setSelectedSkills] = useState<TSelectedOpt[]>([]);

    const handleSkillsChange = (
        _evt: SyntheticEvent,
        selectedSkill: TSelectedOpt[],
    ) => {
        setSelectedSkills([...selectedSkill]);
    };

    return (
        <>
            <Typography variant="caption" fontWeight={500}>
                Навыки
            </Typography>
            <Autocomplete
                multiple
                options={skills}
                getOptionLabel={(skill) => skill.name}
                isOptionEqualToValue={(option, value) => option.id === value.id}
                onChange={handleSkillsChange}
                value={selectedSkills}
                filterSelectedOptions
                size="small"
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
        </>
    )
}

export default Skill;