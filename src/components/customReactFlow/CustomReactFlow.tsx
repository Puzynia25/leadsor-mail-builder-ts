import { FC } from "react";
import { useCallback } from "react";
import {
    ReactFlow,
    applyNodeChanges,
    applyEdgeChanges,
    addEdge,
    Edge,
    useReactFlow,
    OnNodesChange,
    OnEdgesChange,
    OnConnect,
    DefaultEdgeOptions,
} from "@xyflow/react";
import { v4 as uuidv4 } from "uuid";

import { calculateNodePosition, nodeTypes } from "../../utils";
import { SidebarItem } from "../sidebar/SidebarItem.types";
import { CustomNodeType } from "../nodes/Node.types";

import "./CustomReactFlow.scss";

const CustomReactFlow: FC<{
    nodes: CustomNodeType[];
    edges: Edge[];
    setNodes: React.Dispatch<React.SetStateAction<CustomNodeType[]>>;
    setEdges: React.Dispatch<React.SetStateAction<Edge[]>>;
    handleNodeClick: (e: React.MouseEvent, node: CustomNodeType | null) => void;
}> = ({ nodes, edges, setNodes, setEdges, handleNodeClick }) => {
    const { getViewport } = useReactFlow();

    const onNodesChange: OnNodesChange<CustomNodeType> = useCallback(
        (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
        []
    );
    const onEdgesChange: OnEdgesChange = useCallback(
        (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
        []
    );
    const onConnect: OnConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);

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

        setNodes((nds) => [...nds, newNode]);
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
                onEdgesChange={onEdgesChange}
                onNodesChange={onNodesChange}
                onConnect={onConnect}
                onNodeClick={handleNodeClick}
                nodeTypes={nodeTypes}
                nodeOrigin={[0.5, 0.5]}
                defaultEdgeOptions={defaultEdgeOptions}
            />
        </div>
    );
};

export default CustomReactFlow;

const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
};
