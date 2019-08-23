import * as types from '../core/common/action.types';
import IntershipService from '../services/intership.services';

export const getInternList = () => {
    return function (dispatch) {
        IntershipService.getInternList(function (error, result, status, xhr) {
            if (error) {
                // TODO: Handle erorr
                console.log('Error: ....');
                return;
            }else{
                console.log(error)
                let items = []
                //let stt = 1
                console.log(result)
                result.map((value => {
                    let middle = value.Intern.DoB.split('-', 3)
                    let date = middle[2].substring(0, 2) + "/" + middle[1] + "/" + middle[0]
                    let item = {}
                    item.ID = value.Intern.ID
                    item.Name = value.Intern.Name
                    item.Phone = value.Intern.PhoneNumber
                    item.Email = value.Intern.Email
                    item.Gender = value.Intern.Gender ? "Male" : "Female"
                    item.DOB = date
                    item.University = value.Intern.University
                    item.Faculty = value.Intern.Faculty
                    item.Course = value.Course
                    item.CourseID = value.Intern.CourseID
                    //items.push([stt, value.Intern.ID, value.Intern.Name, value.Intern.PhoneNumber, value.Intern.Email, value.Intern.Gender ? "Male" : "Female", date, value.Intern.University, value.Intern.Faculty, value.Course, value.Intern.CourseID])
                    items.push(item)
                    //stt++
                }))
                console.log(items)
                return dispatch({
                    type: types.GET_INTERSHIP_LIST,
                    internship: items,
                    meta: result.meta
                });
            }
        });
    }
}
export function putInternList(){
    return function(dispatch){
        IntershipService.putInternList(function(error,result){
            if (result.ID !== undefined && result.Role === 3) {
                sessionStorage.setItem("user", JSON.stringify(result));//luu data sau khi dang nhap
                this.props.onLogin(result);
              }
        return dispatch({
            type: types.GET_INTERSHIP_LIST,
            interships:result,
        })    
        });
    }
}

export const getSourseList = () => {
    return function(dispatch) {
        IntershipService.getCourseList(function(error, result, status, xhr) {
            if(error){
                console.log('Sourse error: ....');
                return;
            }
            return dispatch({type: types.GET_COURSE_LIST, course:result})
        })
    }
}

export const addIntern = (email,data) => {
    return function(dispatch) {
        IntershipService.checkEmail(function(error, result, status, xhr) {
            if(error){
                console.log('Sourse error: ....');
                return;
            }
            console.log(result)
            if(result['message'] === "Success"){
                console.log("OK")
                IntershipService.addIntern(function(error, resultAdd, status, xhr) {
                    if(error){
                        console.log("Add error: ...")
                        return
                    }
                    console.log(resultAdd)
                    return dispatch({type: types.CREATE_NEW_INTERN, newIntern:resultAdd})
                },data)
            }
        }, email)
    }
}

export const updateIntern = (data, id) => {
    return function(dispatch) {
        IntershipService.updateIntern(function(error, result, status, xhr) {
            if(error){
                console.log('Update error: ....');
                return;
            }
            return dispatch({type: types.UPDATE_INTERN})
        },data, id)
    }
}

export const deleteIntern = (id, data) => {
    return function(dispatch) {
        IntershipService.deleteIntern(function(error, result, status, xhr) {
            if(error){
                console.log('Delete error: ....');
                return;
            }
            console.log(result)
            return dispatch({type: types.DELETE_INTERN, oldIntern:result})
        },id, data)
    }
}

export const getLoginList = (data) => {
    return function (dispatch) {
        IntershipService.getLoginList(function (error, result, status, xhr) {
            if (error) {
                console.log('Sourse error: ....');
                return;
            }
            return dispatch({ type: types.LOGIN_INTERSHIP_LIST, course: result })
        }, data)
    }
}

