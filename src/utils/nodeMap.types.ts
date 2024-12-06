import { INodeEditor, INodeEditorProps } from "../components/nodeEditor/NodeEditorWrapper.types";

export interface INodeMap {
    [key: string]: (data: Partial<INodeEditorProps>) => INodeEditor;
}
