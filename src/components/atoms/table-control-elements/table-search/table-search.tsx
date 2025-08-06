import { useEffect, useRef, useState, type FC } from "react";
import { Input } from "../../input/input";
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from "../../button/icon-button";
import ClearIcon from '@mui/icons-material/Clear';
import { Box, Stack } from "@mui/material";

interface TableSearchProps {
    expanded?: boolean;
    onChange?: (value: string) => void;
    value?: string;
}

const TableSearch: FC<TableSearchProps> = ({ expanded, onChange, value }) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(expanded || false);
    const [searchValue, setSearchValue] = useState<string>(value || "");

    const handleExpendedChange = () => {
        setIsExpanded(!isExpanded);
        if (!isExpanded) {
            setSearchValue("");
            onChange?.("");
        }
    }

    const handleOnChange = (newValue: string) => {
        setSearchValue(newValue);
        onChange?.(newValue);

    };


    const handleResetContent = () => {
        handleOnChange("");
        setIsExpanded(false);
    }

    const handleOnBlur = () => {
        if (searchValue.length === 0) {
            setIsExpanded(false);
        }
    }

    useEffect(() => {
        if (expanded !== undefined) {
            setIsExpanded(expanded);
        }
    }, [expanded]);

    useEffect(() => {
        if (value !== undefined) {
            setSearchValue(value);
        }
    }, [value]);

    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (isExpanded && inputRef.current) {
            inputRef.current.focus();
        }
    }, [isExpanded])

    return (
        <Stack direction="row" spacing={1} alignItems="center" sx={{ width: '100%' }}>
            <Box
                sx={{
                    transition: 'width 0.3s ease, opacity 0.3s ease',
                    width: !isExpanded && !value ? '34px' : '0px', // adjust width as needed
                    opacity: !isExpanded || !value ? 1 : 0,
                    overflow: 'hidden',
                }}
            >
                <IconButton color="default" size="small" onClick={handleExpendedChange}>
                    <SearchIcon
                    // sx={{ width: 20, height: 20 }} 
                    />
                </IconButton>
            </Box>
            <Box
                sx={{
                    transition: 'width 0.3s ease, opacity 0.3s ease',
                    width: isExpanded ? '200px' : '0px', // adjust width as needed
                    opacity: isExpanded ? 1 : 0,
                    overflow: 'hidden',
                }}
            >
                <Input
                    inputRef={inputRef}
                    placeholder="Search"
                    onBlur={handleOnBlur}
                    value={searchValue}
                    onChange={(e) => handleOnChange(e.target.value)}
                    InputProps={{
                        disableUnderline: true,
                    }}
                    hiddenLabel
                    startIcon={
                        // <SearchIcon sx={{ width: 20, height: 20 }} />
                        isExpanded ? <SearchIcon /> : null
                    }
                    endIcon={
                        searchValue.length > 0 ? (
                            <IconButton color="default" size="small" onClick={handleResetContent} disabled={!searchValue}>
                                <ClearIcon sx={{ width: 20, height: 20 }} />
                            </IconButton>
                        ) : <Box sx={{ width: 30, height: 30 }} />
                    }
                    size="medium"
                />
            </Box>

        </Stack>
    )
}

export default TableSearch
