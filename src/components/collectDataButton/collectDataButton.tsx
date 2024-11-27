import { Button } from "@mui/material";
import { Edge, useReactFlow } from "@xyflow/react";
import { useCallback } from "react";
import { collectChainData } from "../../utils";
import { CustomNodeType } from "../nodes/Node.types";
import { SaveAlt } from "@mui/icons-material";

const CollectDataButton = () => {
    const { getNodes, getEdges } = useReactFlow();

    const nodes: CustomNodeType[] = getNodes();
    const edges: Edge[] = getEdges();

    const collectData = useCallback(() => {
        const startNode: CustomNodeType = nodes.find((node) => node.id === "start-node");

        if (startNode) {
            const chainData = collectChainData(startNode, nodes, edges);
            console.log("!!!collectData", chainData);
        }
    }, [nodes, edges]);

    return (
        <Button variant="outlined" onClick={collectData} color="info">
            <SaveAlt fontSize="small" sx={{ marginRight: 1 }} />
            Save
        </Button>
    );
};

export default CollectDataButton;
