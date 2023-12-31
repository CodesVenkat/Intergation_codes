  <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell >name</TableCell>
            <TableCell >Email</TableCell>
            <TableCell >Phnum</TableCell>
            <TableCell >Message</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {datas&&datas.map((row,i) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              {/* <TableCell >{row.name}</TableCell> */}
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.phnum}</TableCell>
              <TableCell >{row.message}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </div>
  
