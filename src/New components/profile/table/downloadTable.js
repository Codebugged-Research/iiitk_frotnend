/*eslint-disable */
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  TableContainer,
  Paper,
  Grid,
  Typography,
  TablePagination,
} from "@mui/material";
import MKButton from "components/MKButton";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
    width: "50%",
    height: "fitContent",
    borderCollapse: "collapse",
    borderSpacing: 0,
    overFlow: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
      height: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      background: theme.palette.secondary.dark,
    },
    [theme.breakpoints.up("xl")]: {
      width: "350%",
    },
    [theme.breakpoints.down("xl")]: {
      width: "280%",
    },
    [theme.breakpoints.down("lg")]: {
      width: "200%",
    },
    [theme.breakpoints.down("md")]: {
      width: "150%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "85%",
    },
  },
  pagination: {
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
    width: "150%",
  },
  tableHeaderCell: {
    top: 0,
    position: "sticky",
    height: "50px",
    fontWeight: "bold",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.getContrastText(theme.palette.secondary.dark),
  },
  name: {
    fontWeight: "bold",
    color: theme.palette.secondary.dark,
  },
  status: {
    fontWeight: "bold",
    fontSize: "0.75rem",
    color: "white",
    backgroundColor: "grey",
    borderRadius: 8,
    padding: "3px 10px",
    display: "inline-block",
  },
}));

function DTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [downloads, setDownloads] = React.useState([]);

  let downloadData = [];
  // fetch data from api
  axios
    .get(
      "https://cms.lidaverse.com/items/data_download"
      , {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth")).data.access_token
            }`,
        }
      }
    )
    .then((res) => {
      const data = res.data;
      data.data.forEach((item) => {
        downloadData.push(item);
      });
      setDownloads(downloadData);
    });
  return (
    <div>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <table
          className={classes.table}
          style={{ width: "100%", overflowX: "auto" }}
        >
          <tr>
            <th className={classes.tableHeaderCell} style={{ width: "10%" }}>
              S.no
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "20%" }}>
              Downlaod Info
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "20%" }}>
              Payment Id
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "15%" }}>
              Date
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "20%" }}>
              Status
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "25%" }}>
              Link
            </th>
          </tr>
          {downloads.map((row, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: 50 }}>{index + 1}</td>
              <td style={{ paddingLeft: 24, paddingTop: 24 }}>
                <Grid container>
                  <Grid item>
                    <Typography className={classes.name}>
                      No of files : {row.download_file_list.length}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Total price : {"Rs " + row.total_price + ".00"}
                    </Typography>
                  </Grid>
                </Grid>
              </td>
              <td style={{ paddingLeft: 30 }}>
                <Typography color="textSecondary" variant="h6">
                  {row.payment_id}
                </Typography>
              </td>
              <td style={{ paddingLeft: 40 }}>
                <Typography color="primary" variant="subtitle2">
                  {row.date_created}
                </Typography>
              </td>
              <td style={{ paddingLeft: 80 }}>
                <Typography
                  className={classes.status}
                  style={{
                    backgroundColor:
                      (row.status === "available" && "green") ||
                      (row.status === "processing" && "blue"),
                  }}
                >
                  {row.status}
                </Typography>
              </td>
              <td style={{ paddingLeft: 20 }}>
                <MKButton
                  onClick={async () => {
                    if (row.status === "available") {
                      window.open("https://lidaverse-space.sgp1.digitaloceanspaces.com/" + row.destination_url, "_blank");
                    }
                    if (row.status === "deleted") {
                      // upadte status to processing

                      await axios
                        .patch(
                          "https://cms.lidaverse.com/items/data_download/" + row.id
                          , {
                            status: "pending",
                          },{
                            headers: {
                              Authorization: `Bearer ${JSON.parse(localStorage.getItem("auth")).data.access_token
                                }`,
                            }
                          }
                        )
                        .then((res) => {
                          const data = res.data;
                          // refresh the page
                          window.location.reload();
                        });
                    }
                  }}
                  variant="gradient"
                  color="primary"
                  disabled={row.status !== "available"}
                >
                  {row.status === "available" ? "Download" : row.status === "deleted" ? "Redownload" : "Processing"}
                </MKButton>
              </td>
            </tr>
          ))}
        </table>
      </TableContainer>
      {/* <TablePagination
        className={classes.pagination}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
    </div>
  );
}

export default DTable;
