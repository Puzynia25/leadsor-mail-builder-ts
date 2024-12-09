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
import { calculateNodePosition } from "../../utils";
import { ISidebarItem } from "../sidebar/SidebarItem.types";
import { CustomNodeType } from "../nodes/Node.types";
import { nodeTypes } from "./FlowWrapper.types";

import "./FlowWrapper.scss";

interface IFlowWrapperProps {
    nodes: CustomNodeType[];
    edges: Edge[];
    onNodesChange: OnNodesChange<CustomNodeType>;
    onEdgesChange: OnEdgesChange<Edge>;
    onConnect: OnConnect;
    onEditNode: (nodeId: string) => void;
}

const FlowWrapper = ({ nodes, edges, onNodesChange, onEdgesChange, onConnect, onEditNode }: IFlowWrapperProps) => {
    const { getViewport, addNodes, getNodes } = useReactFlow();

    // const nodes: CustomNodeType[] = getNodes();

    const onDrop: (e: React.DragEvent) => void = (e) => {
        e.preventDefault();

        const reactFlowBounds: DOMRect = e.currentTarget.getBoundingClientRect();
        const sideBarItemData: string = e.dataTransfer.getData("application/reactflow");

        if (!sideBarItemData) {
            return;
        }

        const sideBarItem: ISidebarItem = JSON.parse(sideBarItemData);

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
        <main className="flow__wrapper" onDrop={onDrop} onDragOver={onDragOver}>
            <ReactFlow
                className="flow__content"
                nodes={nodes.map((node) => ({
                    ...node,
                    data: {
                        ...node.data,
                        onEdit: () => onEditNode(node.id),
                    },
                }))}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                nodeTypes={nodeTypes}
                nodeOrigin={[0.5, 0.5]}
                defaultEdgeOptions={defaultEdgeOptions}>
                <Controls />
                <Background />
            </ReactFlow>
        </main>
    );
};

export default FlowWrapper;

const defaultEdgeOptions: DefaultEdgeOptions = {
    animated: true,
};
