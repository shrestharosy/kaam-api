import { ApiProperty } from '@nestjs/swagger';

export class KaamDTO {
  @ApiProperty({
    type: String,
    description: 'The title of the job position',
    default: '',
  })
  readonly title: string;
  @ApiProperty({
    type: String,
    description: 'The description of the job position',
    default: '',
  })
  readonly description: string;
  @ApiProperty({
    type: String || Number,
    description: 'The expected salary for the job position',
    default: '',
  })
  readonly salary: string | number;
}
