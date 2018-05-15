declare function getStudents(): Promise<{}[] | undefined>;
declare function addStudent(name: string): Promise<void>;
declare function addStudentToBatch(studentId: Number, batchId: Number): Promise<{} | undefined>;
declare function getStudentWithId(id: Number): Promise<{} | null | undefined>;
declare function getStudentWithBatches(id: Number): Promise<{}[]>;
declare function getStudentWithBatchId(courseId: Number, batchId: Number): Promise<{}[]>;
export { addStudent, getStudents, addStudentToBatch, getStudentWithId, getStudentWithBatches, getStudentWithBatchId };
