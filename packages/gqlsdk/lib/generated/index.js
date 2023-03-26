var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import gql from 'graphql-tag';
export var SortOrder;
(function (SortOrder) {
    /** Sorts on the value in ascending order. */
    SortOrder["Asc"] = "ASC";
    /** Sorts on the value in descending order. */
    SortOrder["Desc"] = "DESC";
})(SortOrder || (SortOrder = {}));
export var GetInfoDocument = gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  query getInfo {\n    Info(id: \"info\") {\n      name\n      title\n      image {\n        asset {\n          url\n        }\n      }\n      details {\n        title\n        copyRaw\n      }\n      credentials {\n        resume {\n          asset {\n            url\n          }\n        }\n        readout {\n          asset {\n            url\n          }\n        }\n      }\n      socials {\n        email\n        linkedin\n        instagram\n      }\n    }\n  }\n"], ["\n  query getInfo {\n    Info(id: \"info\") {\n      name\n      title\n      image {\n        asset {\n          url\n        }\n      }\n      details {\n        title\n        copyRaw\n      }\n      credentials {\n        resume {\n          asset {\n            url\n          }\n        }\n        readout {\n          asset {\n            url\n          }\n        }\n      }\n      socials {\n        email\n        linkedin\n        instagram\n      }\n    }\n  }\n"])));
var defaultWrapper = function (action, _operationName, _operationType) {
    return action();
};
export function getSdk(client, withWrapper) {
    if (withWrapper === void 0) { withWrapper = defaultWrapper; }
    return {
        getInfo: function (variables, requestHeaders) {
            return withWrapper(function (wrappedRequestHeaders) {
                return client.request(GetInfoDocument, variables, __assign(__assign({}, requestHeaders), wrappedRequestHeaders));
            }, 'getInfo', 'query');
        }
    };
}
var templateObject_1;
