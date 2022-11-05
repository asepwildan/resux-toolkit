import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "./right.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getData } from "../../features/createRead/createReadSlice";
export default function Right() {
  let [listVal, setListVal] = useState([]);
  const dispatch = useDispatch();
  const newData = useSelector((state) => state.createRead);

  console.log(listVal);
  const createData = (id, product) => {
    return { id, product };
  };

  const readData = (val) => {
    let temp = [];
    for (let i = 0; i < val.length; i++) {
      temp.push(createData(val[i].id, val[i].product));
    }

    setListVal(temp);
  };
  useEffect(() => {
    dispatch(getData());
  }, []);
  useEffect(() => {
    if (newData.products.length > 0) {
      readData(newData.products);
    }
  }, [newData]);

  return (
    <div className={styles.container}>
      {newData.loading ? (
        <p>Loading ...</p>
      ) : (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">ID</TableCell>
                <TableCell align="left">Product</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {listVal.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="left">{row.id}</TableCell>
                  <TableCell align="left">{row.product}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
