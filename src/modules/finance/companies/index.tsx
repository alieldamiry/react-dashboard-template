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
import { useQuery } from "react-query";
import { fetchcCompanies } from "src/controllers/services/companies";
import DeleteModal from "src/components/DeleteModal";
import Edit from "./Edit";
import { useState } from "react";
import { calculatePage } from "src/utils/calculatePage";

export default function Companies() {
  const { t } = useTranslation();
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [page] = useState(1);

  const { data, refetch } = useQuery(
    ["companies", page],
    () => fetchcCompanies(1),
    {
      onSuccess: (res) => {
        setNumberOfPages(calculatePage(res.total, res.per_page));
      },
    }
  );
  return (
    <div>
      <div className="entity-header">
        <Typography component="h2" variant="h5" sx={{ fontWeight: "bold" }}>
          {t("Companies")}
        </Typography>
        <Create refetch={refetch} />
      </div>
      <Box sx={{ p: 3 }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead sx={{ fontWeight: "bold" }}>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Code</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Created At</TableCell>
                <TableCell>Controls</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data?.data.map((row: any) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.created_at}</TableCell>
                  <TableCell>
                    <Edit refetch={refetch} data={row} />
                    <DeleteModal
                      entity="companies"
                      refetch={refetch}
                      id={row.id}
                    />
                  </TableCell>
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
            <Pagination count={numberOfPages} />
          </Box>
        </TableContainer>
      </Box>
    </div>
  );
}
