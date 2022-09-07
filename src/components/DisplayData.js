import React, { useContext } from "react";
import {
  TableContainer,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Table,
} from "@material-ui/core";
import { multiContext } from "../StepContext";

const DisplayData = () => {
  const { finalData } = useContext(multiContext);

  return (
    <div>
      <TableContainer style={{ display: "flex", justifyContent: "center" }}>
        <Table
          border="1"
          style={{ width: "70%" }}
          size="small"
          aria-label="caption table"
        >
          <TableHead>
            <TableRow
              style={{ backgroundColor: "burlywood", color: "aliceblue" }}
            >
              <TableCell>First Name</TableCell>
              <TableCell>Last Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Company</TableCell>
              <TableCell>Country</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData &&
              finalData.map((data, index) => (
                <TableRow key={index}>
                  <TableCell>{data.firstName}</TableCell>
                  <TableCell>{data.lastName}</TableCell>
                  <TableCell>{data.email}</TableCell>
                  <TableCell>{data.company}</TableCell>
                  <TableCell>{data.country}</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default DisplayData;
