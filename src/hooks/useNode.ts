import { INodeBaseContent } from "../components/customNode/nodesContent.types";
import { nodeMap } from "../utils/nodeMap";

export type NodeLabel = keyof typeof nodeMap;

const useNode = (label: NodeLabel): INodeBaseContent => {
    const nodeComponent = nodeMap[label];
    return nodeComponent.nodeContent();
};

export default useNode;
