import FilterNodeContent from "../components/filterNodeContent/FilterNodeContent";
import MessageNodeContent from "../components/messageNodeContent/MessageNodeContent";
import PauseNodeContent from "../components/pauseNodeContent/PauseNodeContent";

export const nodeMap = {
    Message: { nodeContent: MessageNodeContent },
    Pause: { nodeContent: PauseNodeContent },
    Filter: { nodeContent: FilterNodeContent },
};
