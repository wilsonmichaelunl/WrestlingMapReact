import React from 'react'
import { makeStyles, withStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { WrestlerContext } from '../context/context'

const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    },
});

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.background.paper,
        color: theme.palette.common.white
    },
}))(TableCell);

const useStyles = makeStyles({
    container: {
        maxHeight: 400,
    }
});

const StateTable = () => {
    const classes = useStyles();
    const {tableInfo} = React.useContext(WrestlerContext);

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <TableContainer className={classes.container} component={Paper}>
                    <Table stickyHeader aria-label="Individual Champions by State">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell>State</StyledTableCell>
                                <StyledTableCell align="right">Individual Champions</StyledTableCell>
                                <StyledTableCell align="right">Total Individual Championships</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tableInfo.map((row) => {
                                return (
                                    <TableRow key={row.state}>
                                        <TableCell>{row.state}</TableCell>
                                        <TableCell align="center">{row.individualChampions}</TableCell>
                                        <TableCell align="center">{row.totalIndividualChampionships}</TableCell>
                                    </TableRow>
                                );
                            })}
                        </TableBody>
                    </Table>
                </TableContainer>
            </ThemeProvider>
        </>
    );
}

export default StateTable
