import { Button } from "@mui/material";
import { useReactFlow } from "@xyflow/react";

const CollectDataButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const collectData = () => {
        const nodes = getNodes();
        const edges = getEdges();

        const flowData = {
            nodes,
            edges,
        };

        console.log("CollectDataButton", flowData);
    };

    return (
        <div>
            <Button variant="contained" onClick={collectData} color="info">
                Save
            </Button>
        </div>
    );
};

export default CollectDataButton;
