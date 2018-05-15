declare function addLecture(name: string, batchId: Number, subjectId: Number): Promise<void>;
declare function getLectures(): Promise<{}[] | undefined>;
declare function getLectureOfCourseAndBatch(courseId: Number, batchId: Number): Promise<{}[] | undefined>;
declare function getLectureWithIdofCourseAndBatch(courseId: Number, batchId: Number, lectureId: Number): Promise<{}[] | undefined>;
export { getLectureOfCourseAndBatch, addLecture, getLectures, getLectureWithIdofCourseAndBatch };
