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
import { useSnackbar } from "notistack";

interface TableI {
  title: string;
  url: string;
  iconClass: string;
}
interface adminLiveI {
  title: string;
  url: string;
}

interface TableArrI {
  arr: TableI[] | null | undefined | adminLiveI[];
  setArr: React.Dispatch<
    React.SetStateAction<TableI[] | null | undefined | adminLiveI[]>
  >;
  itemData: React.Dispatch<
    React.SetStateAction<TableI | undefined | adminLiveI>
  >;
  editMode: boolean;
  setEditMode: React.Dispatch<React.SetStateAction<boolean>>;
  objFindingElem: string;
  setObjFindingElem: React.Dispatch<React.SetStateAction<string>>;
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "transparent",
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
    fontWeight: "bold",
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
  const { enqueueSnackbar } = useSnackbar();
  const deleteHandler = (
    e: React.MouseEvent<HTMLButtonElement>,
    title: string
  ) => {
    e.preventDefault();
    const findingTitle = arr?.filter((item) => item.title !== title);
    setArr(findingTitle);
    enqueueSnackbar("Deleted Successfully .", { variant: "success" });
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
    <TableContainer component={Paper} sx={{ borderRadius: "16px" }}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead
          sx={{
            background: "linear-gradient(to left, #f5be02, #00cbd9, #ea340d)",
          }}
        >
          <TableRow>
            <StyledTableCell>SN</StyledTableCell>
            <StyledTableCell align="center">Title</StyledTableCell>
            <StyledTableCell align="center">url</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {arr?.map((row, keys) => (
            <StyledTableRow key={row?.title}>
              <StyledTableCell component="th" scope="row">
                {keys + 1}
              </StyledTableCell>
              <StyledTableCell align="center">{row.title}</StyledTableCell>
              <StyledTableCell align="center">{row.url}</StyledTableCell>
              <StyledTableCell align="center">
                <div className="d-flex justify-content-center">
                  <button
                    style={{
                      border: "none",
                      marginLeft: "10px",
                      color: "white",
                      background: "#ea340d",
                      fontSize: "12px",
                      padding: "6px 20px",
                      borderRadius: "16px",
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      editHandler(e, row?.title)
                    }
                  >
                    {/* <EditIcon /> */}
                    Edit
                  </button>
                  <button
                    style={{
                      border: "none",
                      background: "#ea340d",
                      marginLeft: "10px",
                      color: "white",
                      fontSize: "12px",
                      padding: "5px 16px",
                      borderRadius: "16px",
                    }}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
                      deleteHandler(e, row?.title)
                    }
                  >
                    Delete
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
