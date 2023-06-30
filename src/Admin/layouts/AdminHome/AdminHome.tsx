import { Container } from "@mui/material";
import AdminCard from "../../components/card/AdminCard";
import PersonIcon from "@mui/icons-material/Person";
import LiveTvIcon from "@mui/icons-material/LiveTv";

function AdminHome() {
  return (
    <div className="admin__home__wrapper">
      <Container>
        <div className="admin__home__content">
          <AdminCard
            count={2}
            title="User"
            icon={<PersonIcon sx={{ fontSize: "16px" }} />}
          />
          <AdminCard
            count={2}
            title="Live Streaming"
            icon={<LiveTvIcon sx={{ fontSize: "16px" }} />}
          />
        </div>
      </Container>
    </div>
  );
}

export default AdminHome;
