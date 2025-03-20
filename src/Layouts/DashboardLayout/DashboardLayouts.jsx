import * as React from "react";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Outlet, useNavigate, useLocation } from "react-router";

const NAVIGATION = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Dashboard",
    icon: <DashboardIcon />,
  },
  {
    segment: "home",
    title: "Home",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

function useRouter() {
  const location = useLocation();
  const navigate = useNavigate();

  return {
    pathname: location.pathname,
    searchParams: new URLSearchParams(location.search),
    navigate: (path) => navigate(path),
  };
}

const DashboardLayouts = () => {
  const router = useRouter();

  return (
    <AppProvider navigation={NAVIGATION} router={router}>
      <DashboardLayout>
        <PageContainer>
          <Outlet />
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}

export default DashboardLayouts
