/*eslint-disable */
import React from "react";
import { makeStyles } from "@mui/styles";
import {
  TableContainer,
  Paper,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    borderRadius: 15,
    width: "350%",
    height: "500px",
    overFlow: "hidden",
    "&::-webkit-scrollbar": {
      width: "10px",
    },
    "&::-webkit-scrollbar-thumb": {
      borderRadius: "5px",
      background: theme.palette.secondary.dark,
    },
  },
  tableHeaderCell: {
    top:0,
    position:"sticky",
    height:"50px",
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
  const rows = [
    {
      place: "delhi",
      sensor: "mls",
      terrain: "semiurban",
      amount: "2000",
      Date: "13/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "mumbai",
      sensor: "mls",
      terrain: "semiurban",
      amount: "2300",
      Date: "14/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "chennai",
      sensor: "mls",
      terrain: "semiurban",
      amount: "200",
      Date: "15/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "coimbatore",
      sensor: "mls",
      terrain: "semiurban",
      amount: "3000",
      Date: "3/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "chandigar",
      sensor: "mls",
      terrain: "semiurban",
      amount: "3000",
      Date: "17/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "delhi",
      sensor: "mls",
      terrain: "semiurban",
      amount: "3000",
      Date: "11/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "bangalore",
      sensor: "mls",
      terrain: "semiurban",
      amount: "4344",
      Date: "13/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "mangalore",
      sensor: "mls",
      terrain: "semiurban",
      amount: "3999",
      Date: "17/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "goa",
      sensor: "mls",
      terrain: "semiurban",
      amount: "1000",
      Date: "13/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "chatiskar",
      sensor: "mls",
      terrain: "semiurban",
      amount: "2000",
      Date: "14/08/2022",
      account: "ICICXXXXXX1234",
    },
    {
      place: "manali",
      sensor: "mls",
      terrain: "semiurban",
      amount: "5000",
      Date: "16/08/2022",
      account: "ICICXXXXXX1234",
    },
  ];
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


  return (
    <Grid>
    <TableContainer component={Paper} className={classes.tableContainer}>
      <table className={classes.table}>
        <tr>
          <th className={classes.tableHeaderCell} style={{width:"10%"}}>S.no</th>
          <th className={classes.tableHeaderCell} style={{width:"30%"}}>Data Info</th>
          <th className={classes.tableHeaderCell} style={{width:"25%"}}>Account NO</th>
          <th className={classes.tableHeaderCell} style={{width:"25%"}}>Date</th>
          <th className={classes.tableHeaderCell} style={{width:"100%"}}>Paid</th>
        </tr>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
            <tr key={index}>
              <td style={{paddingLeft:50}}>{index+1}</td>
              <td style={{paddingLeft:50,paddingTop:12}}>
                <Grid container>
                  <Grid item>
                    <Typography className={classes.name}>Place : {row.place}</Typography>
                    <Typography color="textSecondary" variant="body2">
                      Sensor : {row.sensor}
                    </Typography>
                    <Typography color="textSecondary" variant="body2">
                      Terrain : {row.terrain}
                    </Typography>
                  </Grid>
                </Grid>
              </td>
              <td style={{paddingLeft:70}}>
                <Typography color="textSecondary" variant="h6">
                {row.account}
                </Typography>
              </td>
              <td style={{paddingLeft:80}}>
                <Typography color="primary" variant="subtitle2">
                  {row.Date}
                </Typography>
              </td>
              <td style={{paddingLeft:50,paddingRight:50}}>
                <Typography
                  className={classes.status}
                  style={{color:"green"}}
                >
                ₹{row.amount}
                </Typography>
              </td>
            </tr>
          ))}
      </table>
    </TableContainer>
      <TableFooter>
      <TablePagination
        style={{width:"150%"}}
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      </TableFooter>
    </Grid>
  );
}

export default TTable;
