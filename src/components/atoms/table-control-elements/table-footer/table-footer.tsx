import { Stack, TableCell, Typography, type TableCellProps } from "@mui/material";
import type { FC } from "react";
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';

interface TableFooterProps extends TableCellProps {
    children?: React.ReactNode;
    hover?: boolean;
}

const TableFooter: FC<TableFooterProps> = ({ children, sx, hover = false, ...rest }) => {
    return (
        <TableCell {...rest} sx={{
            border: 0,
            borderRadius: "4px",
            "&:hover": {
                backgroundColor: "#EEEDF4",
                "& .MuiTypography-root": {
                    color: "#00000099"
                },
                "svg": {
                    opacity: 1
                }
            },

            backgroundColor: hover ? "#EEEDF4" : "transparent",
            "& .MuiTypography-root": {
                color: hover ? "#00000099" : "inherit"
            },
            "svg": {
                opacity: hover ? 1 : 0
            },
            ...sx
        }} >
            <Stack sx={{
                flexDirection: 'row',
                gap: "8px",
                justifyContent: children ? "flex-end" : "center",

            }}>
                {
                    children ? (
                        <>
                            <Typography variant="body2" sx={{ color: "#8C90A1" }}>COUNT ALL</Typography>
                            <Typography variant="body2">{children}</Typography>
                        </>
                    ) : (
                        <CalculateOutlinedIcon sx={{ color: "#00000099", opacity: 0 }} />
                    )
                }
            </Stack>
        </TableCell>
    )
}

export default TableFooter
