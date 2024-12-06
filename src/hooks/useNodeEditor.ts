import { INodeEditor, INodeEditorProps } from "../components/nodeEditor/NodeEditorWrapper.types";
import { nodeMap } from "../utils/nodeMap";

export const useNodeEditor = (type: string, nodeData: INodeEditorProps): INodeEditor => {
    const nodeComponent = nodeMap[type];
    return nodeComponent(nodeData);
};
