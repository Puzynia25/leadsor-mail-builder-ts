import CollectDataButton from "../collectDataButton/collectDataButton";
import { Button, InputAdornment, TextField } from "@mui/material";
import {
    AnalyticsOutlined,
    BugReport,
    DoDisturbAlt,
    DriveFileRenameOutlineRounded,
    FilterAlt,
    Settings,
    Stop,
} from "@mui/icons-material";
import logo from "../../assets/logo.svg";

import "./AppHeader.scss";

const AppHeader = () => {
    return (
        <div className="app__header">
            <div className="header__logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="header__title">
                <TextField
                    placeholder="Untitled workflow"
                    variant="outlined"
                    size="small"
                    slotProps={{
                        input: {
                            startAdornment: (
                                <InputAdornment position="start">
                                    <DriveFileRenameOutlineRounded />
                                </InputAdornment>
                            ),
                        },
                    }}
                />
            </div>

            <div className="header__btns">
                <Button variant="outlined" onClick={(e) => console.log(e.target)} color="warning">
                    <Stop fontSize="small" sx={{ marginRight: 1 }} />
                    Stopped
                </Button>

                <CollectDataButton />

                <Button variant="outlined" onClick={(e) => console.log(e.target)} color="info">
                    <BugReport fontSize="small" sx={{ marginRight: 1 }} />
                    Test
                </Button>
                <Button variant="outlined" onClick={(e) => console.log(e.target)} color="info">
                    <AnalyticsOutlined fontSize="small" sx={{ marginRight: 1 }} />
                    Analytics
                </Button>
                <Button variant="outlined" onClick={(e) => console.log(e.target)} color="info">
                    <Settings fontSize="small" sx={{ marginRight: 1 }} />
                    Options
                </Button>
                <Button variant="outlined" onClick={(e) => console.log(e.target)} color="info">
                    <FilterAlt fontSize="small" sx={{ marginRight: 1 }} />
                    Filter
                </Button>
            </div>
            <Button
                variant="outlined"
                onClick={(e) => console.log(e.target)}
                sx={{ color: "dimgray", borderColor: "dimgray" }}>
                <DoDisturbAlt fontSize="small" sx={{ marginRight: 1 }} />
                Leave
            </Button>
        </div>
    );
};

export default AppHeader;
