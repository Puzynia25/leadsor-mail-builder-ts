import EmailNodeEditor from "../components/nodeEditor/EmailNodeEditor";
import ImmediatelyNodeEditor from "../components/nodeEditor/ImmediatelyNodeEditor";
import ScheduledTimeNodeEditor from "../components/nodeEditor/ScheduledTimeNodeEditor";
import SmsNodeEditor from "../components/nodeEditor/SmsNodeEditor";
import WaitNodeEditor from "../components/nodeEditor/WaitNodeEditor";
import ConditionNodeEditor from "../components/nodeEditor/conditionNodeEditor/ConditionNodeEditor";
import { INodeMap } from "./nodeMap.types";

export const nodeMap: INodeMap = {
    immediately: ImmediatelyNodeEditor,
    scheduledTime: ScheduledTimeNodeEditor,
    wait: WaitNodeEditor,
    condition: ConditionNodeEditor,
    email: EmailNodeEditor,
    sms: SmsNodeEditor,
};
