import HttpRequest from '../core/utils/HttpRequest';
import { API } from '../core/common/app.routes';
import { getApiPath } from '../core/utils/RouteUtils';

class IntershipService {

    async getInternList(callback) {
        let path = getApiPath(API.GET_INTERN_LIST, "");
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }

    async getCourseList(callback) {
        let path = getApiPath(API.GET_COURSE_LIST, "");
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }

    async checkEmail(callback, email) {
        let path = getApiPath(API.CHECK_EMAIL, email);
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }

    async addIntern(callback, data) {
        let path = getApiPath(API.GET_INTERN_LIST, "");
        let result = await HttpRequest.post(path, data, callback)
        if (callback) {
            callback(result)
        }
    }

    async addDataToApi(callback, data) {
        let path = getApiPath(API.GET_INTERN_LIST, "");
        const moment = require('moment')
        for(var i=0; i<data.length; i++){
            let value = {
                "Name": data[i].Name,
                "PhoneNumber": data[i].Phone,
                "Email": data[i].Email,
                'Gender' : data[i].Gender === 'male' ? true : false,
                'DoB' : moment.utc(data[i].DoB.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$2-$1")).format(),
                "University": data[i].University,
                "Faculty": data[i].Faculty,
                "CourseID": data[i].Course === 'Golang' ? '5c906973ad09b6cc4134b41f' : '5c906973ad09b6cc4134b414',
                "IsDeleted": false
            }
            let result = await HttpRequest.post(path, value, callback)
            if (callback) {
                callback(result)
            }
        } 
    }

    async updateIntern(callback, data, id) {
        let path = getApiPath(API.UPDATE_INTERN, id);
        let result = await HttpRequest.put(path, data, callback)
        if (callback) {
            callback(result)
        }
    }


    async deleteIntern(callback, id, data) {
        let path = getApiPath(API.DELETE_INTERN, id);
        let result = await HttpRequest.delete(path, data, callback)
        if (callback) {
            callback(result)
        }
    }

    async getLoginList(callback, data) {
        let path = getApiPath(API.GET_LOGIN_LIST, "");
        console.log(path)
        let result = await HttpRequest.put(path, data, callback);
        if (callback) {
            callback(result)
            console.log(result)
        }
    }
    async getToeicScheduleList(callback) {
        let path = getApiPath(API.GET_TOEIC_SCHEDULE_LIST, "")
        let result = await HttpRequest.get(path, callback)
        if (callback) {
            callback(result)
        }
    }

    async uploadFiles(callback, data) {
        let path = getApiPath(API.UPLOAD_FILES, "")
        let result = await HttpRequest.post(path, data, callback)
        if (callback) {
            callback(result)
        }
    }
}

export default new IntershipService();