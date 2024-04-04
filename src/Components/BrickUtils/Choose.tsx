import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React from 'react'
import classes from '../myapp.module.css';
import MyMultiProps from './MyMultiProps';

function Choose(props:MyMultiProps<string>) {
    const [choice, setChoice] = React.useState(props.defaultValue);

    const handleChoice = (_event:any, newChoice:string) => {
        if (!newChoice) {
            newChoice = props.defaultValue;
        }
        setChoice(newChoice);
        props.onChange(newChoice);
    };

    return (
        <div className={classes.toggleContainer}>
            <ToggleButtonGroup
                value={choice}
                exclusive
                onChange={handleChoice}
                aria-label={props.label}
                size="large"
            >
                {props.values.map(v =>
                    <ToggleButton
                        value={v.value}
                        aria-label={v.label}
                        key={v.key}
                        color="primary">

                        {v.icon} {v.helperText}
                    </ToggleButton>
                )}
            </ToggleButtonGroup>
        </div>
    )
}

export default Choose