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
const lectureDao = __importStar(require("../dao/lectureDao"));
const route = express_1.default.Router();
route.get('/', (req, res) => {
    lectureDao.getLectures()
        .then((lectures) => {
        res.send(lectures);
    })
        .catch((err) => {
        console.log("Unable to get Lectures");
    });
});
route.post('/', (req, res) => {
    lectureDao.addLecture(req.body.name, req.body.batchId, req.body.subjectId)
        .then((lecture) => {
        res.send(lecture);
    })
        .catch((err) => {
        console.log("cannot add lecture");
    });
});
exports.default = route;
