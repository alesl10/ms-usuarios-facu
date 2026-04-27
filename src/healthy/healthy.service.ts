import { Injectable } from '@nestjs/common';


@Injectable()
export class HealthyService {

  status() {
    return {
      status:'Ok',
      message:'MS usuarios arriba'
    };
  }

}
