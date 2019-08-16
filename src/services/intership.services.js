import HttpRequest from '../core/utils/HttpRequest';
import { API } from '../core/common/app.routes';
import { getApiPath } from '../core/utils/RouteUtils';

class IntershipService {

    async getInternList(callback) {
      
        let path = getApiPath(API.GET_INTERN_LIST);
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }
    async putInternList(callback){
        let path = getApiPath(API.GET_PUT_LIST);
        let result = await HttpRequest.put(path, callback);
        if(callback){
            callback(result)
        }
    }
}

export default new IntershipService();