import * as types from '../core/common/action.types';
import IntershipService from '../services/intership.services';

export function getInternList() {
    return function (dispatch) {
        IntershipService.getInternList(function (error, result, status, xhr) {
            if (error) {
                // TODO: Handle erorr
                console.log('Error: ....');
                return;
            }
            let items = []
            let stt = 1
            result.items.map((value => {
                let middle = value.Intern.DoB.split('-', 3)
                let date = middle[2].substring(0, 2) + "/" + middle[1] + "/" + middle[0]
                items.push([stt, value.Intern.ID, value.Intern.Name, value.Intern.PhoneNumber, value.Intern.Email, value.Intern.Gender ? "Male" : "Female", date, value.Intern.University, value.Intern.Faculty, value.Course, value.Intern.CourseID])
                stt++
            }))

            return dispatch({
                type: types.GET_INTERSHIP_LIST,
                interships: items,
                meta: result.meta
            });
        });
    }
}
