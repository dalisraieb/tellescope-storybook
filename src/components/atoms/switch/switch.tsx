import { FormControl, FormControlLabel, Switch as MuiSwitch } from "@mui/material";
import type { SwitchProps as MuiSwitchProps, FormControlLabelProps as MuiFormControlLabelProps } from "@mui/material";
import type { FC } from "react";

interface SwitchProps extends Omit<MuiSwitchProps, "color"> {
    color?: "default" | "primary" | "secondary" | "info";
    label?: string;
    formlabelProps?: Omit<MuiFormControlLabelProps, "label" | "control">;
}

const Switch: FC<SwitchProps> = ({ label, formlabelProps, color = "default", ...props }) => {
    const { sx, ...rest } = formlabelProps || {};
    return (
        <FormControl>
            <FormControlLabel
                control={
                    <MuiSwitch
                        {...props}
                        color={color}
                        disableRipple
                    />
                }
                label={label}

                labelPlacement="start"
                sx={{
                    gap: 1,
                    m: 0,
                    ...sx
                }}
                {...rest}
            />
        </FormControl>
    )
}

export default Switch
