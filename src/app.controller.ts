import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";

@ApiTags("Default")
@Controller("api/v1")
export class AppController {}
