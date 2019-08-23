import HttpRequest from '../core/utils/HttpRequest';
import { API } from '../core/common/app.routes';
import { getApiPath } from '../core/utils/RouteUtils';

class IntershipService {

    async getInternList(callback) {
        let path = getApiPath(API.GET_INTERN_LIST,"");
        console.log(path)
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }

    async getCourseList(callback) {
        let path = getApiPath(API.GET_COURSE_LIST,"");
        console.log(path)
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }

    async checkEmail(callback, email) {
        let path = getApiPath(API.CHECK_EMAIL, email);
        let result = await HttpRequest.get(path, callback);
        if(callback){
            callback(result)
        }
    }

    async addIntern(callback,data) {
        let path = getApiPath(API.GET_INTERN_LIST,"");
        let result = await HttpRequest.post(path, data, callback)
        if (callback) {
            callback(result)
        }
    }    

    async updateIntern(callback, data, id){
        let path = getApiPath(API.UPDATE_INTERN,id);
        let result = await HttpRequest.put(path, data, callback)
        if(callback){
            callback(result)
        }
    }


    async deleteIntern(callback, id, data){
        let path = getApiPath(API.DELETE_INTERN,id);
        let result = await HttpRequest.delete(path, data, callback)
        if(callback){
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
}

export default new IntershipService();