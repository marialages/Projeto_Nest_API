import {Module} from "@nestjs/common";
import { FileService } from "./fle.service";

@Module({
    providers:[FileService],
    exports: [FileService]
})

export class FileModule {}