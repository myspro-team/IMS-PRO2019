import _ from 'lodash';

export function getApiPath(route, params) {
    return getPath(route, params);
}

export function getUrlPath(route, params) {
    return getPath(route, params, URL);
}

/**
 * pathsCollection: URL or API. See core/common/app.routes.js for details
 */
function getPath(route, params) {
    let path = route;

    let routeParams = _.map(path.match(/:\w+/g), function (param) {
        return param.substring(1);
    });

    let queryArray = [];

    _.each(_.keys(params), function (key) {
        if (_.indexOf(routeParams, key) > -1) {
            path = path.replace(':' + key, params[key]);
        } else {
            if (params[key] !== undefined) {
                queryArray.push(key + '=' + params[key]);
            }
        }
    });

    path += (queryArray.length ? '?' + queryArray.join('&') : '');

    return '/' + path;
}

export function checkReferrerURL(urlRefer, route) {
    return _.isEmpty(route) ? true : (urlRefer === route);
}