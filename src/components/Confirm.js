import { Grid } from '@material-ui/core'
import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import { UserInputData } from "./Content";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

var item = {
    'checkBox': 'チェックボックス',
    'textBox': 'テキストボックス',
    'pullDown': 'プルダウン',
    'multilineText': 'マルチラインテキスト'
}

function Confirm(props) {
    const { currentState } = useContext(UserInputData);
    const onSubmit = () => {
        alert(JSON.stringify(currentState));
        console.log(JSON.stringify(currentState));
        console.log(currentState);
    };
    const inputDataLists = [];
    var id = 0;
    for (var k in currentState) {
        for (var v in currentState[k]) {
            var value = ''
            if (currentState[k][v] === true) {
                value = 'チェックしました';
            } else if (currentState[k][v] === false) {
                value = 'チェックしていません';
            } else if (currentState[k][v] === '') {
                value = '未入力';
            } else {
                value = currentState[k][v];
            }
            inputDataLists.push(
                {
                    "id": id,
                    "name": item[v],
                    "value": value
                }
            );
            id++;
        }
    }
    return (
        <Grid container>
            <TableContainer component={Paper}>
                <Table aria-label="Customer Input Data">
                    <TableHead>
                        <TableRow>
                            <TableCell>項目</TableCell>
                            <TableCell>入力内容</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            inputDataLists.map(function (elem) {
                                return (
                                    <TableRow key={elem.id}>
                                        <TableCell>{elem.name}</TableCell>
                                        {elem.value ? <TableCell>{elem.value}</TableCell> : <TableCell>None</TableCell>}
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            <Button variant="contained" color="primary" onClick={props.handleBack}>
                戻る
            </Button>
            <Button variant="contained" color="primary" onClick={onSubmit}>
                送信
            </Button>
        </Grid>
    )
}

export default Confirm
