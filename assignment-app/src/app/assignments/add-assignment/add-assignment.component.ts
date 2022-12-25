import { Component, OnInit ,Output } from '@angular/core';
import { Assignment } from '../assignment.model';
import { AssignmentsService } from 'src/app/shared/assignments.service';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-add-assignment',
  templateUrl: './add-assignment.component.html',
  styleUrls: ['./add-assignment.component.css']
})
export class AddAssignmentComponent implements OnInit {
 // @Output() nouvelAssignment = new EventEmitter <Assignment>();
  nomDevoir= " ";
  dateRendu=new Date(Date.now());
  constructor(private assignmentsService:AssignmentsService
    ,private route :ActivatedRoute, private router:Router
    ) { }

  ngOnInit(): void {
  }
  onSubmit(){
    const newAssignment = new Assignment();
    newAssignment.id= Math.floor(Math.random()*1000);
    newAssignment.nom = this.nomDevoir;
    newAssignment.dateDeRendu = this.dateRendu;
    newAssignment.rendu = false;
    //newAssignment.id;

    //this.nouvelAssignment.emit(newAssignment)
    
  // this.assignments.push(newAssignment);
this.assignmentsService.addAssignment(newAssignment)
    .subscribe(message => console.log(message))

    this.router.navigate(["/assignments"]); 
   }
   
}
