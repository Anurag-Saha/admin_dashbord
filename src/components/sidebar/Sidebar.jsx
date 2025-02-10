import "./sidebar.css"
import { LineStyle ,Timeline, TrendingUp} from "@material-ui/icons"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">dashbord</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem active">
                    <LineStyle/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp/>
                    Sales
                </li>
            </ul>
        </div>
        <div className="sidebarMenu">
            <h3 className="sidebarTitle">dashbord</h3>
            <ul className="sidebarList">
                <li className="sidebarListItem ">
                    <LineStyle/>
                    Home
                </li>
                <li className="sidebarListItem">
                    <Timeline/>
                    Analytics
                </li>
                <li className="sidebarListItem">
                    <TrendingUp/>
                    Sales
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}
