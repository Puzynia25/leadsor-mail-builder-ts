import { INodeEditor, INodeEditorProps } from "../components/nodeEditor/NodeEditor.types";
import { nodeMap } from "../utils/nodeMap";

export const useNodeEditor = (label: string, nodeData: INodeEditorProps): INodeEditor => {
    const nodeComponent = nodeMap[label];
    return nodeComponent(nodeData);
};
