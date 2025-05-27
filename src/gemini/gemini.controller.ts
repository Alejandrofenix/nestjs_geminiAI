import { Controller, Get, Post } from '@nestjs/common';
import { GeminiService } from './gemini.service';

@Controller('gemini')
export class GeminiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('basic-prompt')
  async basicPromt() {
    return this.geminiService.basicPromt();
  }
}
