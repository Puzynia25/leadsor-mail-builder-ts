import { INodeEditor, INodeEditorProps } from "../components/nodeEditor/NodeEditor.types";

export interface INodeMap {
    [key: string]: (data: INodeEditorProps) => INodeEditor;
}
