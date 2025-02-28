import { FileService } from './file.service';
export declare class FileController {
    private readonly fileService;
    constructor(fileService: FileService);
    saveFiles(files: Express.Multer.File[], folder?: string): Promise<import("./file.interface").FilesResponse[]>;
}
