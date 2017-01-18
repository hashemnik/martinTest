import { Injectable } from '@angular/core';
import { SubjectModel } from './subject.model';
import { SUBJECTS} from './mock-wizard';

@Injectable()
export class WizardService {

  constructor() { }

   getSubjects(): SubjectModel[] {
    return SUBJECTS;
  }
}
