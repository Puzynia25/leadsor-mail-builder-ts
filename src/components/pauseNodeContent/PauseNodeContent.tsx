import { Box, Typography } from "@mui/material";
import { IPauseNodeContent } from "../customNode/nodesContent.types";

import "./PauseNodeContent.scss";

const duration: number = 3;
const timeRange: string = "minutes";

const PauseNodeContent = (): IPauseNodeContent => {
    return {
        color: "#6c95b2",
        duration,
        timeRange,
        render: (
            <div className="pause-content__wrapper">
                <p className="pause-content__text">
                    Delay
                    <Box
                        component="span"
                        display="inline-flex"
                        justifyContent="center"
                        alignItems="center"
                        bgcolor="#eee"
                        borderRadius="15px"
                        padding="0 8px"
                        marginX={0.5}>
                        <Typography fontSize="14px" color="black" component="span">
                            {duration}
                        </Typography>
                    </Box>
                    {timeRange}
                </p>
            </div>
        ),
    };
};

export default PauseNodeContent;
