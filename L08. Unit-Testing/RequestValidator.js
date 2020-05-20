function checkRequest(obj) {
    const model = ["method", "uri", "version", "message"]
    const specialChars = ['<', '>', '\\', '&', "'", '"'];

    for (const element of model) {
        if(obj["message"] !== "" && !obj[element]) {
            const message = element === "uri" ? element.toUpperCase() : element[0].toUpperCase() + element.slice(1);
            throw new Error(`Invalid request header: Invalid ${message}`);
        }
    }
    
    const methods = ["GET", "POST", "DELETE", "CONNECT"];
    if (!methods.includes(obj.method)) {
        throw new Error("Invalid request header: Invalid Method");
    }

    const uriRegex = /[A-Za-z.\*]+/g;
    if (!uriRegex.test(obj.uri) || obj.uri.split(' ').length > 1) {
        throw new Error("Invalid request header: Invalid URI");
    }

    const versions = ["HTTP/0.9", "HTTP/1.0", "HTTP/1.1", "HTTP/2.0"];
    if (!versions.includes(obj.version)) {
        throw new Error("Invalid request header: Invalid Version");
    }
    
    for (const char of specialChars) {
        if (obj.message.includes(char)) {
            throw new Error("Invalid request header: Invalid Message");
        }
    }

    return obj;
}