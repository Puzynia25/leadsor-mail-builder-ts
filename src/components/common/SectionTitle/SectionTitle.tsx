import { Divider } from "@mui/material";
import { CommonNodeData } from "../../nodes/Node.types";

const SectionTitle = ({ color, label }: Partial<CommonNodeData>) => {
    return (
        <div className="node-settings__title" style={{ color: color }}>
            <h6>{label}</h6>
            <Divider
                sx={{
                    borderBottomWidth: "medium",
                    bgcolor: color,
                    marginTop: "7px",
                }}
            />
        </div>
    );
};

export default SectionTitle;
