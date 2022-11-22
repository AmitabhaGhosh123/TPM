import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { ApplicationRef, ChangeDetectorRef, Component, ViewChild} from '@angular/core';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor() {}

  isSelected:boolean = false;
  toggleAction:boolean = false;
  selectedIndex:number;
  @ViewChild(MatTable) table: MatTable<any>;
  displayedColumns: string[] = [
    'candidateDetails',
    'interviewSchedule',
    'referenceCheck',
    'comments'
  ]
  displayedColumnsOfferExtended: string[] = [
    'candidateDetails',
    'interviewSchedule',
    'comments'
  ]
  candidateInformation:any[] = [
    {
      'candidateDetails': '',
      'interviewSchedule': {'left-arrow':'<img src="/assets/left-arrow.png" />','right-arrow':'<img src="/assets/right-arrow.png" />','candidate-photo':'<img src="/assets/candidate-photo.png" />'},
      'hiringInfo': '{}',
      'referenceCheck': {'txt1':'LEADS','txt2':'CAPTURED'},
      'comments': ''
    },
    {
      'candidateDetails': {'name':'Aniket Joshi','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','like-part1-img': '<img src="/assets/like-symbol-part1.png" />','like-part2-img': '<img src="/assets/like-symbol-part2.png" />','candidate-photo':''},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'Undecided','oval-img':'<img src="/assets/oval.png" />','rect-img':'<img src="/assets/rectangle.png" />','calendar-date-img':'<img src="/assets/calendar.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teamelatea aliquet vulputate. Egestas. Lacinia ultrices QuisqueQuisqueQuisqueQuklloojjdjuee'
    },
    {
      'candidateDetails': {'name':'Kunjan Kumar','designation': 'Director, Housing and Development…','city': 'New Delhi'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','like-part1-img': '<img src="/assets/like-symbol-part1.png" />','like-part2-img': '<img src="/assets/like-symbol-part2.png" />','candidate-photo':''},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'-','hiringUndecided':'No Hire','dislike-part1-img':'<img src="/assets/dislike-symbol-part1.png" />','dislike-part2-img':'<img src="/assets/dislike-symbol-part2.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'No Comments'
    },
    {
      'candidateDetails': {'name':'Kunal Kamra','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','like-part1-img': '<img src="/assets/like-symbol-part1.png" />','like-part2-img': '<img src="/assets/like-symbol-part2.png" />','candidate-photo':''},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','dislike-part1-img':'<img src="/assets/dislike-symbol-part1.png" />','dislike-part2-img':'<img src="/assets/dislike-symbol-part2.png" />','calendar-date-img':'<img src="/assets/calendar.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    }
  ]

  candidateDroppedInformation:any[] = [
    {
      'candidateDetails': {'name':'Shridhar Joshi','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','dislike-part1-img':'<img src="/assets/dislike-symbol-part1.png" />','dislike-part2-img':'<img src="/assets/dislike-symbol-part2.png" />','candidate-photo':''},
      'hiringInfo': {'hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','calendar-date-img':'<img src="/assets/calendar.png" />'},
      'referenceCheck': {'txt1': 4,'txt2': 3},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    }
  ]

  candidateOfferExtended:any[] = [
    {
      'candidateDetails': {'name':'Anil Kapoor','designation': 'Director, Piramal Enterprises','city': 'Kolkatta'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','dislike-part1-img':'<img src="/assets/dislike-symbol-part1.png" />','dislike-part2-img':'<img src="/assets/dislike-symbol-part2.png" />','candidate-photo':''},
      'hiringInfo': {'offerExtendeDate':'21 Jul 2020','offerAcceptedDate':'23 Jul 2020','joiningDate':'1 Sep 2020','joinedRatingImg':'<img src="/assets/icon-rating.png" />','link-arrow':'<img src="/assets/dropdown-arrow.png" />','offerExtended':'Offer Extended on','offerAccepted':'Offer Accepted on','dateOfJoining':'Date of Joining','joiningStatus':'Joining Status','backgroundVerification':'B.V'},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    }
  ]

  /* select a single candidate */
  selectRow(value:number): void {
    this.isSelected = true;
    this.selectedIndex = value;
  }

  /*swap candidates */
  swap(event:CdkDragDrop<any[]>): void {
    moveItemInArray(this.candidateInformation, event.previousIndex, event.currentIndex);
    this.candidateInformation = [...this.candidateInformation];
    console.log(this.candidateInformation);
    this.table.renderRows();
  }
}
