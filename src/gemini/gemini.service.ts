import { Injectable } from '@nestjs/common';

@Injectable()
export class GeminiService {
    basicPromt() {
        return 'basicPromt';
    }
}
