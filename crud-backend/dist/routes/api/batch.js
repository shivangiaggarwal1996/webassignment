"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const batchDao = __importStar(require("../dao/batchDao"));
const route = express_1.default.Router();
route.post('/', (req, res) => {
    batchDao.addBatch(req.body.name, req.body.id)
        .then((batch) => {
        res.send(batch);
    })
        .catch((err) => {
        console.log("cannot add batch");
    });
});
route.get('/', (req, res) => {
    batchDao.getBatches().then((batches) => {
        console.log("size is ");
        res.send(batches);
    }).catch((err) => {
        console.log("cannot get batches");
    });
});
exports.default = route;
