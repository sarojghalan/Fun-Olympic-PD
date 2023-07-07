import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Title from "../Components/Title/Title";
import {
  argentina,
  hongkong,
  india,
  bangladesh,
  china,
  japan,
  nepal,
  spain,
  turkry,
  uk,
} from "../assets";

interface RankingI {
  country: string;
  image: string;
  gold: number;
  silver: number;
  bronze: number;
}

const RankingArr: RankingI[] = [
  {
    country: "nepal",
    image: nepal,
    gold: 10,
    silver: 10,
    bronze: 10,
  },
  {
    country: "china",
    image: china,
    gold: 10,
    silver: 9,
    bronze: 9,
  },
  {
    country: "argentina",
    image: argentina,
    gold: 9,
    silver: 8,
    bronze: 10,
  },
  {
    country: "bangladesh",
    image: bangladesh,
    gold: 8,
    silver: 9,
    bronze: 8,
  },
  {
    country: "hongkong",
    image: hongkong,
    gold: 8,
    silver: 8,
    bronze: 8,
  },
  {
    country: "india",
    image: india,
    gold: 7,
    silver: 6,
    bronze: 8,
  },
  {
    country: "japan",
    image: japan,
    gold: 7,
    silver: 6,
    bronze: 7,
  },
  {
    country: "spain",
    image: spain,
    gold: 6,
    silver: 5,
    bronze: 6,
  },
  {
    country: "turkey",
    image: turkry,
    gold: 5,
    silver: 5,
    bronze: 5,
  },
  {
    country: "uk",
    image: uk,
    gold: 4,
    silver: 4,
    bronze: 4,
  },
];

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#5fa2d7",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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

export default function LeaderBoard() {
  return (
    <div className="ranking__wrapper">
      <div className="container mt-4">
        <Title title="aRCHERY" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SN</StyledTableCell>
                <StyledTableCell>Country Flag</StyledTableCell>
                <StyledTableCell>Country </StyledTableCell>
                <StyledTableCell align="center">Gold</StyledTableCell>
                <StyledTableCell align="center">Silver</StyledTableCell>
                <StyledTableCell align="center">BRonze</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RankingArr.slice(0, 4).map((row, keys) => (
                <StyledTableRow key={keys}>
                  <StyledTableCell align="left">{keys + 1} </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    <div className="ranking__country">
                      <img src={row?.image} alt="" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.country}</StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "gold", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.gold}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "silver", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.silver}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    <span style={{ color: "brown", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.bronze}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.gold + row?.silver + row?.bronze}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container mt-4">
        <Title title="Swimming" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SN</StyledTableCell>
                <StyledTableCell>Country Flag</StyledTableCell>
                <StyledTableCell>Country </StyledTableCell>
                <StyledTableCell align="center">Gold</StyledTableCell>
                <StyledTableCell align="center">Silver</StyledTableCell>
                <StyledTableCell align="center">BRonze</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RankingArr.slice(2, 6).map((row, keys) => (
                <StyledTableRow key={keys}>
                  <StyledTableCell align="left">{keys + 1} </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    <div className="ranking__country">
                      <img src={row?.image} alt="" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.country}</StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    <span style={{ color: "gold", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.gold}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "silver", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.silver}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {" "}
                    <span style={{ color: "brown", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.bronze}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.gold + row?.silver + row?.bronze}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="container mt-4">
        <Title title="Basket Ball" />
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>SN</StyledTableCell>
                <StyledTableCell>Country Flag</StyledTableCell>
                <StyledTableCell>Country </StyledTableCell>
                <StyledTableCell align="center">Gold</StyledTableCell>
                <StyledTableCell align="center">Silver</StyledTableCell>
                <StyledTableCell align="center">BRonze</StyledTableCell>
                <StyledTableCell align="center">Total</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {RankingArr.slice(3, 7).map((row, keys) => (
                <StyledTableRow key={keys}>
                  <StyledTableCell align="left">{keys + 1} </StyledTableCell>

                  <StyledTableCell component="th" scope="row">
                    <div className="ranking__country">
                      <img src={row?.image} alt="" />
                    </div>
                  </StyledTableCell>
                  <StyledTableCell align="left">{row.country}</StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "gold", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.gold}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "silver", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.silver}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    <span style={{ color: "brown", marginRight: "8px" }}>
                      <i className="fa-solid fa-medal"></i>
                    </span>
                    {row.bronze}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {row.gold + row?.silver + row?.bronze}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}
