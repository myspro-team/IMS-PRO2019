import HttpRequest from '../core/utils/HttpRequest';
import { API } from '../core/common/app.routes';
import { getApiPath } from '../core/utils/RouteUtils';

class IntershipService {

    async getInternList(callback) {
      
        let path = getApiPath(API.GET_INTERN_LIST, params);
        let result = await HttpRequest.get(path, callback);
        if (callback) {
            callback(result)
        }
    }
}

export default new IntershipService();