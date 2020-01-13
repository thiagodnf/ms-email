'use strict';

class APIError extends Error {

    constructor(status, type){
        super(type);

        this.status = status;
        this.name = this.constructor.name;
        this.type = type;
        this.message = this.constructor.name;
        this.errors = [];
    }
}

exports.APIError = APIError;
