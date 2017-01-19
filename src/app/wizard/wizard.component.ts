import { Component, OnInit } from '@angular/core';
import { SubjectModel } from './subject.model';
import { WizardService } from './wizard.service';
@Component({
  selector: 'app-wizard',
  templateUrl : './wizard.component.html',
  styleUrls: ['./wizard.component.css']
})
export class WizardComponent implements OnInit {

	msg:string;
  subjects: SubjectModel[];
  constructor(private wizardService: WizardService) { }

  ngOnInit() {
	  this.subjects = this.wizardService.getSubjects();
  }
  
  showMsg(subject: SubjectModel) {
      this.msg = "You Clicked on '" + subject.title + "' Card!!! Dont ever do this again. ha ha ha ...";
      console.log("card clicked");
  }
  
  
}
