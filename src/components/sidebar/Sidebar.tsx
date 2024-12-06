import SidebarItem from "./SidebarItem";
import { ISidebarItem } from "./SidebarItem.types";
import { Divider } from "@mui/material";
import { sidebarItems } from "./InitialValues";

import "./Sidebar.scss";

const Sidebar = () => {
    const onDragStart = (e: React.DragEvent, item: ISidebarItem) => {
        // console.log(item, "onDragStart");
        e.dataTransfer.setData("application/reactflow", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    };

    return (
        <aside className="sidebar__wrapper">
            <div className="sidebar__content">
                {/* Triggers */}
                <div>
                    <h4 className="sidebar__title">Triggers</h4>
                    <Divider />
                    {sidebarItems.triggers.map((trigger) => (
                        <SidebarItem key={trigger.id} item={trigger} onDragStart={onDragStart} />
                    ))}
                </div>

                {/* Workflow Control */}
                <div>
                    <h4 className="sidebar__title">Workflow Control</h4>
                    <Divider />
                    {sidebarItems.workflowControl.map((workflow) => (
                        <SidebarItem key={workflow.id} item={workflow} onDragStart={onDragStart} />
                    ))}
                </div>

                {/* Actions */}
                <div>
                    <h4 className="sidebar__title">Actions</h4>
                    <Divider />
                    {sidebarItems.actions.map((action) => (
                        <SidebarItem key={action.id} item={action} onDragStart={onDragStart} />
                    ))}
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;
