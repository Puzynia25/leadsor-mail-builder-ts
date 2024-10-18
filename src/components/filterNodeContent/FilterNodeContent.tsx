import { Box, Typography } from "@mui/material";
import { IFilterNodeContent } from "../customNode/nodesContent.types";

import "./FilterNodeContent.scss";

const text: string = "filter";

const FilterNodeContent = (): IFilterNodeContent => {
    return {
        color: "#e27111",
        text,
        render: (
            <div className="filter-content__wrapper">
                <p className="filter-content__text">
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
                            {text}
                        </Typography>
                    </Box>
                    {text}
                </p>
            </div>
        ),
    };
};

export default FilterNodeContent;
