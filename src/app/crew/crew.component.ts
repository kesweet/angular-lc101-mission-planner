import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css']
})
export class CrewComponent implements OnInit {

  crew: object[] = [
    {name: "Eileen Collins", firstMission: false},
    {name: "Mae Jemison", firstMission: false},
    {name: "Ellen Ochoa", firstMission: true}
  ];

  memberBeingEdited = null;

  constructor() { }

  ngOnInit() {
  }

  add(memberName: string, isFirst: boolean) {
    for(let i=0; i<this.crew.length; i++) {
      if (memberName === this.crew[i].name) {
        return;
      }
    }
    this.crew.push({name: memberName, firstMission: isFirst});
  }

  remove(memberObject: object) {
    this.crew.splice(this.crew.indexOf(crewMember), 1);
  }

  edit(memberObject: object) {
    this.memberBeingEdited.name = memberObject;
  }

  save(name: string, member: object) {
    member['name'] = name;
    this.memberBeingEdited = null;
  }
}
