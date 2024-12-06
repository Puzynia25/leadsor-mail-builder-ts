import { INodeEditor, INodeEditorProps } from "../components/nodeEditor/NodeEditorWrapper.types";
import { nodeMap } from "../utils/nodeMap";

export const useNodeEditor = ({ type, data, onUpdateNodeContent }: INodeEditorProps): INodeEditor => {
    const nodeComponent = nodeMap[type];
    return nodeComponent({ data, onUpdateNodeContent });
};
