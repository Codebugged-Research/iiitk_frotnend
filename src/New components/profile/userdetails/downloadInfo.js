/*eslint-disable */
// @mui material components
import Container from "@mui/material/Container";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DTable from "../table/downloadTable";

function DownloadInfo() {

  return (
    <MKBox>
      <Container>
        <MKTypography variant="h4" color="text" pb={2}>
          Download Details
        </MKTypography>
        <DTable />
      </Container>
    </MKBox>
  );
}
export default DownloadInfo;
