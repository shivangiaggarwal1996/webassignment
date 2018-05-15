declare function addBatch(name: string, id: Number): Promise<{} | undefined>;
declare function getBatches(): Promise<{}[] | undefined>;
declare function getBatchesWithCourseId(courseId: Number): Promise<{}[] | undefined>;
declare function getBatchWithCourseIdAndBatchId(courseId: Number, batchId: Number): Promise<{}[] | undefined>;
export { addBatch, getBatches, getBatchesWithCourseId, getBatchWithCourseIdAndBatchId };
