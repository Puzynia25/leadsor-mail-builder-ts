import { CommonNodeData } from "../nodes/Node.types";

export interface INodeToolbar {
    nodeId: string;
    data: CommonNodeData;
    selected: boolean;
}
