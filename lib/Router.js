"use-strict";

import {HttpMethods} from "./HttpMethod"



class Router {
    constructor() {
        this.routes = [];
    }

    get(path, handler) {
        this.routes.push({method:HttpMethods.GET, path, handler});
    }

    post(path, handler) {
        this.routes.push({method:HttpMethods.POST, path, handler});
    }

    match(req) {
        return this.routes.find(route => route.method === req.method && route.path === req.url);
  }

}


export {
    Router
}
