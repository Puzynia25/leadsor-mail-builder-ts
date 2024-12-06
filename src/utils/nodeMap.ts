import EmailNodeEditor from "../components/nodeEditor/EmailNodeEditor/EmailNodeEditor";
import ImmediatelyNodeEditor from "../components/nodeEditor/ImmediatelyNodeEditor/ImmediatelyNodeEditor";
import ScheduledTimeNodeEditor from "../components/nodeEditor/ScheduledTimeNodeEditor/ScheduledTimeNodeEditor";
import SmsNodeEditor from "../components/nodeEditor/SmsNodeEditor/SmsNodeEditor";
import WaitNodeEditor from "../components/nodeEditor/WaitNodeEditor/WaitNodeEditor";
import ConditionNodeEditor from "../components/nodeEditor/ConditionNodeEditor/ConditionNodeEditor";
import { INodeMap } from "./nodeMap.types";

export const nodeMap: INodeMap = {
    immediately: ImmediatelyNodeEditor,
    scheduledTime: ScheduledTimeNodeEditor,
    wait: WaitNodeEditor,
    condition: ConditionNodeEditor,
    email: EmailNodeEditor,
    sms: SmsNodeEditor,
};
