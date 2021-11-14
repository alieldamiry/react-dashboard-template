import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Pagination, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Create from "./Create";
import { useTranslation } from "react-i18next";

const rows = [
  {
    name: "ahmed",
    email: "aaa@sss.com",
    phoneNumber: "0101010101",
  },
];
export default function Companies() {
  const { t } = useTranslation();

  return (
    <div>
      <div className="entity-header">
        <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
          {t("Companies")}
        </Typography>
        <Create />
      </div>
      <Box sx={{ p: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ fontWeight: "bold" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone Number</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                  {/* <TableCell >{row.carbs}</TableCell>
                  <TableCell >{row.protein}</TableCell> */}
                  <TableCell>Actions</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box
            sx={{
              m: 3,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Pagination count={10} />
          </Box>
        </TableContainer>
      </Box>
    </div>
  );
}
