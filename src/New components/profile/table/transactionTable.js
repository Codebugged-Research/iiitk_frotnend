/*eslint-disable */
import React from "react";
import { makeStyles } from "@mui/styles";
import { TableContainer, Paper, Grid, Typography, TablePagination } from "@mui/material";
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
    marginTop:10,
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
}));

function TTable() {
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

  const [transaction , setTransaction] = React.useState([]);

  let downloadData = [];
  // fetch data from api
  axios
    .get(
      "https://cms.lidaverse.com/items/payments"
    )
    .then((res) => {
      const data = res.data;
      data.data.forEach((item) => {
        downloadData.push(item);
      });
      setTransaction(downloadData);
    });

  return (
    <Grid>
      <TableContainer component={Paper} className={classes.tableContainer}>
        <table className={classes.table}>
          <tr>
            <th className={classes.tableHeaderCell} style={{ width: "10%" }}>
              S.no
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "30%" }}>
              Data Info
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "25%" }}>
              Account NO
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "25%" }}>
              Date
            </th>
            <th className={classes.tableHeaderCell} style={{ width: "100%" }}>
              Paid
            </th>
          </tr>
          {transaction.map((row, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: 50 }}>{index + 1}</td>
              <td style={{ paddingLeft: 50, paddingTop: 12 }}>
                <Grid container>
                  <Grid item>
                    <Typography className={classes.name}>Download : {row.download}</Typography>
                    {/* <Typography color="textSecondary" variant="body2">
                      Sensor : {row.sensor}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Terrain : {row.terrain}
                    </Typography> */}
                  </Grid>
                </Grid>
              </td>
              <td style={{ paddingLeft: 70 }}>
                <Typography color="textSecondary" variant="h6">
                  {row.transaction_id}
                </Typography>
              </td>
              <td style={{ paddingLeft: 80 }}>
                <Typography color="primary" variant="subtitle2">
                  {row.date_created}
                </Typography>
              </td>
              <td style={{ paddingLeft: 50, paddingRight: 50 }}>
                <Typography className={classes.status} style={{ color: "green" }}>
                  ₹{row.amount}
                </Typography>
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
    </Grid>
  );
}

export default TTable;
