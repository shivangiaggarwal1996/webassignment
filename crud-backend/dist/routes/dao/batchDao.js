"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
const db_1 = require("../../db");
function addBatch(name, id) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.create({
                name: name,
                courseId: id
            });
        }
        catch (err) {
            console.log("Unable to add course in database");
        }
    });
}
exports.addBatch = addBatch;
function getBatches() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.findAll();
        }
        catch (err) {
            console.log("Cannot get batches");
        }
    });
}
exports.getBatches = getBatches;
function getBatchesWithCourseId(courseId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.findAll({
                where: {
                    courseId: courseId
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getBatchesWithCourseId = getBatchesWithCourseId;
function getBatchWithCourseIdAndBatchId(courseId, batchId) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield db_1.Batch.findAll({
                where: {
                    [sequelize_1.default.Op.and]: {
                        id: batchId,
                        courseId: courseId,
                    }
                }
            });
        }
        catch (err) {
            console.log(err);
        }
    });
}
exports.getBatchWithCourseIdAndBatchId = getBatchWithCourseIdAndBatchId;
