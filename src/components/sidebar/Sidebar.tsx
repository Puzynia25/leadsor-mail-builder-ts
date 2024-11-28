import SidebarItem from "./SidebarItem";
import { SidebarItem as SidebarItemType } from "./SidebarItem.types";

import "./Sidebar.scss";
import { Divider } from "@mui/material";
import { sidebarItems } from "./InitialValues";

const Sidebar = () => {
    const onDragStart = (e: React.DragEvent, item: SidebarItemType) => {
        // console.log(item, "onDragStart");
        e.dataTransfer.setData("application/reactflow", JSON.stringify(item));
        e.dataTransfer.effectAllowed = "move";
    };

    // const renderItemList = (sidebarItems: SidebarItem[]) =>
    //     sidebarItems.map((item: SidebarItemType) => <SidebarItem key={item.id} item={item} onDragStart={onDragStart} />);

    // const elements = renderItemList(sidebarItems);
    return (
        <div className="sidebar-wrapper">
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
                {sidebarItems.workflowControl.map((item) => (
                    <SidebarItem key={item.id} item={item} onDragStart={onDragStart} />
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
    );
};

export default Sidebar;
