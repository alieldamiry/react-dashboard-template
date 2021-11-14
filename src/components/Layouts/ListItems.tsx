import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SidebarLink from "../SidebarLink";
import { useTranslation } from "react-i18next";

const ListItems = () => {
  const { t } = useTranslation();
  return (
    <div>
      <SidebarLink
        to="dashboard"
        text={t("Dashboard")}
        icon={<DashboardIcon />}
      />
      <SidebarLink
        to="finance/companies"
        text="Companies"
        icon={<PeopleIcon />}
      />
    </div>
  );
};

export default ListItems;
