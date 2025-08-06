import { ListItemText, Menu, MenuItem, MenuList } from "@mui/material";
import TableFooter from "../../atoms/table-control-elements/table-footer/table-footer";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { Input } from "../../atoms/input/input";

type SortItem = string;


type DetailSelectContextType = {
    sort: SortItem;
    setSort: React.Dispatch<React.SetStateAction<SortItem>>;
    availableFields: {
        label: string;
        value: string;
    }[],
    open?: boolean;
    onChangeFilter?: (field: string) => void;
    valueSort?: SortItem;
    buttonContent?: ReactNode;
    placeholder?: string;
    onClose?: (field: string) => void;
};

const DetailSelectContext = createContext<DetailSelectContextType | undefined>(undefined);


type StateProps = {
    availableFields: {
        label: string;
        value: string;
    }[],
    open?: boolean;
    onChangeFilter?: (field: string) => void;
    value?: SortItem;
    buttonContent?: ReactNode;
    placeholder?: string;
    onClose?: (field: string) => void;
};


function ProviderWrapper({
    availableFields,
    open,
    children,
    ...rest
}: Omit<StateProps, "appearance"> & { children: ReactNode }) {
    // Internal state if not provided
    const [internalSort, internalSetSort] = useState<SortItem>("name");

    const value = {
        sort: internalSort,
        setSort: internalSetSort,
        availableFields: availableFields,
        open,
        ...rest
    };

    return <DetailSelectContext.Provider value={value}>{children}</DetailSelectContext.Provider>;
}


// Final export
export default function TableFooterSelect({ content, ...rest }: StateProps & { content?: ReactNode }) {
    return (
        <ProviderWrapper {...rest} >
            <Select>
                {content}
            </Select>
        </ProviderWrapper>
    );
}



const FilterMenuStyle = {
    padding: 0,
    maxHeight: "500px !important",
    minHeight: "443px !important",
    "& .MuiTypography-root": { fontSize: "0.875rem" },
    "& .MuiListItemIcon-root": {
        minWidth: "28px !important",
        "svg": { width: "20px" }
    },
    "& .MuiButtonBase-root.MuiMenuItem-root ": {
        borderRadius: "4px"
    },
    "& .MuiMenuItem-root": {
        padding: "4px 8px",
    },
    outline: "0 !important"

};

const randomStringId = () => {
    return Math.random().toString(36).substring(2, 15);
}


const Select = ({ children }: { children: ReactNode }) => {

    const { sort, setSort, open, onChangeFilter, valueSort, placeholder, onClose } = useContext(DetailSelectContext)!;
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>) => setAnchorEl(e.currentTarget);
    const handleClose = () => {
        setAnchorEl(null);
        onClose?.(sort);
    };

    const handleChangeValue = (field: string) => {
        setSort(() => field);
        onChangeFilter?.(field);
        handleClose();
    };

    const randomId = randomStringId();

    useEffect(() => {
        // Simulate a reference to a button
        const button = document.getElementById(randomId);
        if (open) {
            if (button) {
                setAnchorEl(button);
            }
        }
        else {
            setAnchorEl(null);
        }
    }, [open]);

    // when Provide a Value
    useEffect(() => {
        setSort(valueSort || "")
    }, [valueSort]);


    return (
        <>
            <TableFooter
                onClick={handleClick}
                hover={Boolean(anchorEl)}
                sx={{
                    cursor: "pointer"
                }}
            >
                {children}
            </TableFooter>
            <FilterMenu
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                onChange={handleChangeValue}
                usedFields={sort}
                placeholder={placeholder}
            />
        </>
    )
}



function FilterMenu({ open, anchorEl, onClose, onChange, usedFields, placeholder = "Label" }: {
    open: boolean;
    anchorEl: null | HTMLElement;
    onClose: () => void;
    onChange: (field: string) => void;
    usedFields: string;
    placeholder?: string;
}) {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const { availableFields } = useContext(DetailSelectContext)!;
    const search = availableFields.filter(f => f.label.toLowerCase().includes(searchTerm.toLowerCase()));
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(0);
    useEffect(() => {
        setHoveredIndex(0); // Reset hovered index when search term changes
    }, [])

    const handleClose = () => {
        onClose()
        const timeOut = setTimeout(() => {
            setSearchTerm("");
            clearTimeout(timeOut)
        }, 150);
    };



    return (
        <Menu
            open={open}
            onClose={handleClose}
            anchorEl={anchorEl}
            MenuListProps={{
                disablePadding: true,
                sx: { px: "4px", py: "8px", },
            }}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            transformOrigin={{
                vertical: 'bottom',
                horizontal: -10,
            }}
            sx={{
                "& .MuiPaper-root": {
                    width: "250px",
                    border: "1px solid #0000001F",
                    borderRadius: "5px"
                }
            }}
            elevation={1}

        >
            <MenuList sx={FilterMenuStyle}
            >
                <Input
                    autoFocus
                    appearance="distinct"
                    placeholder={placeholder}
                    size="small"
                    sx={{
                        width: "100%",
                        "& .MuiInputBase-input": {
                            padding: "4px 8px"
                        }
                    }}
                    FormControlProps={{
                        sx: {
                            width: "100%",
                            mb: "4px",
                        }
                    }}
                    onKeyDown={(e) => {
                        e.stopPropagation(); // prevent key events from being captured by the menu
                    }}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    value={searchTerm}
                />
                {search.map((f, index) => (
                    <MenuItem
                        key={f.value}
                        onClick={() => onChange(f.value)}
                        selected={usedFields.includes(f.value)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        sx={{
                            backgroundColor:
                                hoveredIndex === index ? "rgba(0, 0, 0, 0.04)" : "transparent",
                            "&.Mui-selected": {
                                backgroundColor: hoveredIndex === index ? "rgba(0, 0, 0, 0.04)" : "transparent",
                            },
                            "&.Mui-selected:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.04) !important",
                            },
                            "&:hover": {
                                backgroundColor: "rgba(0, 0, 0, 0.04)",
                            },
                        }}
                    >
                        <ListItemText>{f.label}</ListItemText>
                    </MenuItem>
                ))}
                {
                    availableFields.length === 0 ? (
                        <MenuItem disabled>
                            <ListItemText>All Fields Are Applied</ListItemText>
                        </MenuItem>
                    ) : null
                }
                {
                    search.length === 0 && searchTerm !== "" && availableFields.length > 0 && (
                        <MenuItem disabled>
                            <ListItemText>No fields found</ListItemText>
                        </MenuItem>
                    )
                }
            </MenuList>
        </Menu>
    )
}