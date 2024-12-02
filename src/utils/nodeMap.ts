import EmailNodeEditor from "../components/nodeEditor/EmailNodeEditor";
import ImmediatelyNodeEditor from "../components/nodeEditor/ImmediatelyNodeEditor";
import SmsNodeEditor from "../components/nodeEditor/SmsNodeEditor";
import WaitNodeEditor from "../components/nodeEditor/WaitNodeEditor";
import ConditionNodeEditor from "../components/nodeEditor/conditionNodeEditor/ConditionNodeEditor";
import { INodeMap } from "./nodeMap.types";

export const nodeMap: INodeMap = {
    Immediately: ImmediatelyNodeEditor,
    Wait: WaitNodeEditor,
    Condition: ConditionNodeEditor,
    Email: EmailNodeEditor,
    Sms: SmsNodeEditor,
};
