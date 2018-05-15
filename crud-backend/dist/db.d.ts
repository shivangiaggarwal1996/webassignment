/// <reference types="sequelize" />
import Sequelize from 'sequelize';
declare const Course: Sequelize.Model<{}, {}>;
declare const Batch: Sequelize.Model<{}, {}>;
declare const Teacher: Sequelize.Model<{}, {}>;
declare const Student: Sequelize.Model<{}, {}>;
declare const Lecture: Sequelize.Model<{}, {}>;
declare const MappingStudentBatch: Sequelize.Model<{}, {}>;
declare const Subject: Sequelize.Model<{}, {}>;
export { Course, Subject, Teacher, Lecture, Batch, Student, MappingStudentBatch };
