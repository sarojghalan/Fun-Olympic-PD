import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface TableI {
  title: string;
  url: string;
  iconClass: string;
}

interface TableArrI {
  arr: TableI[] | null | undefined;
  setArr: React.Dispatch<React.SetStateAction<TableI[] | null | undefined>>;
  itemData: React.Dispatch<React.SetStateAction<TableI | undefined>>;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  objFindingElem: string;
  setObjFindingElem: React.Dispatch<React.SetStateAction<string>>;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#1976d2",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function CustomizedTables({
  arr,
  setArr,
  itemData,
  editMode,
  setEditMode,
  objFindingElem,
  setObjFindingElem,
}: TableArrI) {
  const deleteHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    const findingTitle = arr?.filter((item) => item.title !== title);
    setArr(findingTitle);
  };

  const editHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    console.log(document.getElementById("modal-btn-id")?.click());
    itemData(arr?.find((item) => item.title === title));
    setEditMode(!editMode);
    setObjFindingElem(title);
    // setArr(arr?.filter((item) => item.title !== title));
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SN</StyledTableCell>
            <StyledTableCell align="right">Title</StyledTableCell>
            <StyledTableCell align="right">url</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr?.map((row) => (
            <StyledTableRow key={row?.title}>
              <StyledTableCell component="th" scope="row">
                {row?.title}
              </StyledTableCell>
              <StyledTableCell align="right">{row.title}</StyledTableCell>
              <StyledTableCell align="right">{row.url}</StyledTableCell>
              <StyledTableCell align="right">
                <div className="d-flex justify-content-center">
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      marginLeft: "10px",
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      editHandler(e, row?.title)
                    }
                  >
                    <EditIcon />
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "transparent",
                      marginLeft: "10px",
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      deleteHandler(e, row?.title)
                    }
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
