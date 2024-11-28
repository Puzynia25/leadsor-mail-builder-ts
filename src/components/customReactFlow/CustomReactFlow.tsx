import {
    ReactFlow,
    Edge,
    useReactFlow,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    DefaultEdgeOptions,
    Controls,
    Background,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";
import { calculateNodePosition, nodeTypes } from "../../utils";
import { SidebarItem } from "../sidebar/SidebarItem.types";
import { CustomNodeType } from "../nodes/Node.types";

import "./CustomReactFlow.scss";

const CustomReactFlow = ({
    nodes,
    edges,
    handleNodeClick,
    onNodesChange,
    onEdgesChange,
    onConnect,
}: {
    nodes: CustomNodeType[];
    edges: Edge[];
    handleNodeClick: (e: React.MouseEvent, node: CustomNodeType | null) => void;
    onNodesChange: OnNodesChange<CustomNodeType>;
    onEdgesChange: OnEdgesChange<Edge>;
    onConnect: OnConnect;
}) => {
    const { getViewport, addNodes, getNodes } = useReactFlow();

    // const nodes: CustomNodeType[] = getNodes();

    const onDrop: (e: React.DragEvent) => void = (e) => {
        e.preventDefault();

        const reactFlowBounds: DOMRect = e.currentTarget.getBoundingClientRect();
        const sideBarItemData: string = e.dataTransfer.getData("application/reactflow");

        if (!sideBarItemData) {
            return;
        }

        const sideBarItem: SidebarItem = JSON.parse(sideBarItemData);

        const newNode: CustomNodeType = {
            id: uuidv4(),
            data: { ...sideBarItem.data },
            position: calculateNodePosition(e, getViewport, reactFlowBounds),
            type: sideBarItem.type,
        };

        addNodes(newNode);
    };

    const onDragOver: (e: React.DragEvent) => void = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "move";
    };

    return (
        <div className="custom-rf__wrapper" onDrop={onDrop} onDragOver={onDragOver}>
            <ReactFlow
                className="custom-rf__content"
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                nodeOrigin={[0.5, 0.5]}
                defaultEdgeOptions={defaultEdgeOptions}>
                <Controls />
                <Background />
            </ReactFlow>
        </div>
    );
};

export default CustomReactFlow;

const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
};
