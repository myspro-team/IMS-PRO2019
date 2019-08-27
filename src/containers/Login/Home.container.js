import Login from "./Login.container";
import React, { Component } from 'react';
import "./../../App.css"
import HomePageContainer from "./HomePage.container";
class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user : JSON.parse(sessionStorage.getItem('user')),//lay data sau khi dang nhap
      name:{}
    }
    // console.log(this.state.user)
  };
  onLogin (value) {
    console.log(value)
    if (value !==null) {
      this.setState({
        user:value
      });
    }
    // localStorage.setItem('user',JSON.stringify(this.state.user));//lưu user lên local storage
  }
  onLogout(){
    this.setState({
      user : null
    });
    sessionStorage.clear();
  }
  handleComponent () {
    if (this.state.user === null) {
      return (
      <div className="flexible-content">
      <main id="content" className="p-5">
      <Login onLogin = {this.onLogin.bind(this)}></Login>
      </main>
      </div>
      )
    }
    else{
      return (
        <div className="flexible-content">
            <HomePageContainer />
        </div>
      )
    }
 
  };
  render() {
    // console.log(this.state.user)
    let Component=this.handleComponent();
    return (
      <div >
        {Component}
      </div>
    );
  }
}

export default HomePage;



// import React from 'react';
// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import 'material-design-icons/iconfont/material-icons.css';
// import InputBase from '@material-ui/core/InputBase';
// import "./../../components/list_schedule_toeic/styles.css"

// const StyledTableCell = withStyles(theme => ({
//   head: {
//     backgroundColor: theme.palette.common.black,
//     color: theme.palette.common.white,
//   },
//   body: {
//     fontSize: 14,
//   },
// }))(TableCell);

// const StyledTableRow = withStyles(theme => ({
//   root: {
//     '&:nth-of-type(odd)': {
//       backgroundColor: theme.palette.background.default,
//     },
//   },
// }))(TableRow);

// function createData(name, data, local, action) {
//   return { name, data, local, action};
// }

// const rows = [
//   createData('toeic 1', "12/3/2019", "75 Mai xuan thuong",""),
//   createData('toeic 2', "13/4/2019", "DH Qui Nhon",""),
//   createData('toeic 3', "5/5/2019", "75 Mai xuan thuong",""),
//   createData('toeic 4', "6/6/2019", "DH Qui Nhon",""),
//   createData('toeic 5', "9/7/2019", "75 Mai xuan thuong",""),
//   createData('toeic 6', "23/8/2019", "DH Qui Nhon",""),
//   createData('toeic 7', "16/9/2019", "75 Mai xuan thuong",""),
//   createData('toeic 8', "18/10/2019", "DH Qui Nhon",""),
//   createData('toeic 9', "27/11/2019", "75 Mai xuan thuong",""),
//   createData('toeic 10', "28/12/2019", "DH Qui Nhon",""),
// ];

// const useStyles = makeStyles(theme => ({
//   root: {
//     width: '100%',
//     marginTop: theme.spacing(3),
//     overflowX: 'auto',
//   },
//   table: {
//     minWidth: 700,
//   },
//   root1: {
//     padding: '2px 4px',
//     display: 'flex',
//     alignItems: 'center',
//     width: 400,
//   },
//   input: {
//     marginLeft: 8,
//     flex: 1,
//   },
//   iconButton: {
//     padding: 10,
//   },
//   divider: {
//     height: 28,
//     margin: 4,
//   },
// }));

// export default function CustomizedTables() {
//   const classes = useStyles();

//   return (
//     <Paper className={classes.root}>
//        <Toolbar >
//                     <Typography id="tableTitle">
//                         <span className="title">TOIEC</span>
//                     </Typography>
//                     <div className="spacer" />
//                     <Paper className="search">
//                         <InputBase
//                             placeholder="Search internship"
//                             className="inputSearch"
//                              />
//                         <i className="fa fa-search icon" aria-hidden="true"></i>
//                     </Paper>
//                     <button type="button" className="btn buttonView">ADD
//                     </button>
//                 </Toolbar>
//       <Table className={classes.table} >
//         <TableHead >
//           <TableRow>
//             <StyledTableCell>Name Schedule</StyledTableCell>
//             <StyledTableCell align="center">Date</StyledTableCell>
//             <StyledTableCell align="center">Location</StyledTableCell>
//             <StyledTableCell align="center">Action</StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {rows.map(row => (
//             <StyledTableRow key={row.name}>
//               <StyledTableCell component="th" scope="row">
//                 {row.name}
//               </StyledTableCell>
//               <StyledTableCell align="center">{row.data}</StyledTableCell>
//               <StyledTableCell align="center">{row.local}</StyledTableCell>
//               <StyledTableCell align="center" >{row.action}
//               <Grid container spacing={3}className="button">    
//           <Grid item >
//               <Button variant="contained" color="primary" >
//               <i className="material-icons">
//                 edit</i>
//                 Edit</Button>
//               <Button variant="contained" color="default" >
//               <i className="material-icons">
//                delete</i>
//                 Delete</Button>
//           </Grid>
//         </Grid>
//               </StyledTableCell>
//             </StyledTableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </Paper>
//   );
// }

// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import StyledTableCell from '@material-ui/core/TableCell';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Paper from '@material-ui/core/Paper';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import 'material-design-icons/iconfont/material-icons.css';
// import InputBase from '@material-ui/core/InputBase';
// import React, { Component } from 'react';
// import "./../../components/list_schedule_toeic/stylestoeic.css";
// import 'material-design-icons/iconfont/material-icons.css';
// import _ from "lodash";
// class List_toiec extends Component {
//   constructor(props){
//     super(props);
//     this.state={
//       data:[
//         {
//           name:"Speaking",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"Write",
//           data:"12/3/2019",
//           local:"DH Qui Nhon",
//           action:""
//         },
//         {
//           name:"Listening",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"adc",
//           data:"12/3/2019",
//           local:"DH Qui Nhon",
//           action:""
//         },
//         {
//           name:"toiec 5",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"toiec 6",
//           data:"12/3/2019",
//           local:"DH Qui Nhon",
//           action:""
//         },
//         {
//           name:"toiec 7",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"toiec 8",
//           data:"12/3/2019",
//           local:"DH Qui Nhon",
//           action:""
//         },
//         {
//           name:"toiec 9",
//           data:"12/3/2019",
//           local:"DH Qui Nhon",
//           action:""
//         },
//         {
//           name:"toiec 10",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"tuoihahaa",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"hihihi",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"working",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"todoin",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//         {
//           name:"hoaga",
//           data:"12/3/2019",
//           local:"75 Mai Xuan Thuong",
//           action:""
//         },
//       ],
//       search:"",
//     }
//   }
//   handleChange= (event) => {
//     this.setState({
//       search:event.target.value
//     }) 
//   }
  
//   render() {
//     const result=this.state.data;
//     var search=this.state.search;
//     console.log(search)
//     var data= _.filter(result,(item)=>{
//       return _.includes(item.name.toLowerCase(),search);
//     })
//     return (
//       <div className="x">
//       <Paper className="root">
//         <Toolbar >
//                     <Typography id="tableTitle">
//                         <span className="title">TOEIC SCHEDULES</span>
//                     </Typography>
//                     <div className="spacer" />
//                     <Paper className="search">
//                         <InputBase
//                             placeholder="Search toiec"
//                             className="inputSearch"
//                             onChange={(event) => this.handleChange(event)}
//                              />
//                         <i className="fa fa-search icon" aria-hidden="true" ></i>
//                     </Paper>
//                     <button type="button" className="btn buttonView">ADD
//                     </button>
//                 </Toolbar>
//         <Table className="table "  >
//         <TableHead className="color" >
//           <TableRow >
//             <StyledTableCell className="color1 columnName" > <b>Name Schedule</b> </StyledTableCell>
//             <StyledTableCell className="color1" align="center"><b>Date</b></StyledTableCell>
//             <StyledTableCell className="color1" align="center"><b>Location</b></StyledTableCell>
//             <StyledTableCell className="color1" align="center"><b>Action</b></StyledTableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//             {
//               data.map((value,key)=>{
//                 return(
//                   <TableRow key={key} className="tableRow">
//                   <StyledTableCell component="th" scope="row">
//                    {value.name}
//                   </StyledTableCell>
//                   <StyledTableCell align="center">{value.data} </StyledTableCell>
//                   <StyledTableCell align="center">{value.local} </StyledTableCell>
//                   <StyledTableCell align="center" >
//                   <Button variant="contained" color="primary" className="a"  >
//                   <i className="material-icons md-18 x"  >
//                     edit</i>
//                     Edit</Button>
//                   <Button  variant="contained" color="default" className="a"  >
//                   <i className="material-icons md-18 x" >
//                    delete</i>
//                     Delete</Button>
//                   </StyledTableCell>
//                 </TableRow>
//                 )
//               })
//             }
//         </TableBody>
//       </Table>
//       </Paper>
//       </div>
//     );
//   }
// }

// export default List_toiec;