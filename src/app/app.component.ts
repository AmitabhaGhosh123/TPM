import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { AfterViewInit, Component, OnInit} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit,AfterViewInit {

  constructor() {}

  isSelected:boolean = false;
  toggleAction:boolean = false;
  selectedIndex:number;
  removedElementIndex:number;

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
      'candidateDetails': {'name':'Aniket Joshi','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':'/assets/candidate-photo.png'},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','likeimg':'<img src="/assets/like.png" />','hiringUndecided':'Undecided','undecided-img':'<img src="/assets/undecided.png" />','calendar-date-img':'<img src="/assets/calendar.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teamelatea aliquet vulputate. Egestas. Lacinia ultrices QuisqueQuisqueQuisqueQuklloojjdjuee'
    },
    {
      'candidateDetails': {'name':'Kunjan Kumar','designation': 'Director, Housing and Development…','city': 'New Delhi'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':'/assets/candidate-photo.png'},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'-','hiringUndecided':'No Hire','likeimg':'<img src="/assets/like.png" />','dislikeimg':'<img src="/assets/dislike.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'No Comments'
    },
    {
      'candidateDetails': {'name':'Kunal Kamra','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':'/assets/candidate-photo.png'},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','calendar-date-img':'<img src="/assets/calendar.png" />','likeimg':'<img src="/assets/like.png" />','dislikeimg':'<img src="/assets/dislike.png" />'},
      'referenceCheck': {'txt1': 7,'txt2': 3},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    },
    {
      'candidateDetails': {'name':'Albert','designation': 'Director, Piramal Enterprises','city': 'Hyderabad'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':'/assets/candidate-photo.png'},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','calendar-date-img':'<img src="/assets/calendar.png" />','likeimg':'<img src="/assets/like.png" />','dislikeimg':'<img src="/assets/dislike.png" />'},
      'referenceCheck': {'txt1': 5,'txt2': 2},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    },
    {
      'candidateDetails': {'name':'Kajol','designation': 'Actor, Piramal Enterprises','city': 'Kolkata'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':'/assets/candidate-photo.png'},
      'hiringInfo': {'hired':'Hire','hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','calendar-date-img':'<img src="/assets/calendar.png" />','likeimg':'<img src="/assets/like.png" />','dislikeimg':'<img src="/assets/dislike.png" />'},
      'referenceCheck': {'txt1': 5,'txt2': 2},
      'comments': 'Metus etiam. Platea aliquet vulputate. Egestas. Lacinia ultrices. Pharetra. Quisque odio morbi sod tea aliquet vulputate.teame'
    }
  ]

  candidateInformationCopy:any[] = [];

  candidateDroppedInformation:any[] = [
    {
      'candidateDetails': {'name':'Shridhar Joshi','designation': 'Director, Piramal Enterprises','city': 'Mumbai'},
      'interviewSchedule': {'left-arrow': '','right-arrow':'','candidate-photo':''},
      'hiringInfo': {'hire-date':'1 Jul 2018','date':'1 Jul 2018','hiringUndecided':'No Hire','calendar-date-img':'<img src="/assets/calendar.png" />','dislikeimg':'<img src="/assets/dislike.png" />'},
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

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.showCandidatesInterviewSchedule();
  }

  /* initially keep one candidate hidden from interview schedule */
  showCandidatesInterviewSchedule() {
    this.candidateInformation.forEach((value,index) => {
      this.candidateInformationCopy.push(value);
      if(this.candidateInformationCopy.length > 4) {
        this.candidateInformation.splice(index,1);
        $('#candidate'+index).addClass('d-none');
        this.removedElementIndex = index;
      }
    })
  }

  /* select a single candidate */
  selectRow(value:number): void {
    this.isSelected = true;
    this.selectedIndex = value;
  }

  /*swap candidates */
  swap(event:CdkDragDrop<any[]>): void {
    moveItemInArray(this.candidateInformation, event.previousIndex, event.currentIndex);
    this.candidateInformation = [...this.candidateInformation];
    this.isSelected = false;
  }

  /* show next candidate */
  nextCandidate() {
    for(let i=0; i < this.candidateInformationCopy.length; i++) {
      if(this.removedElementIndex == i && this.removedElementIndex + 1 == this.candidateInformationCopy.length) {
        this.candidateInformation.push(this.candidateInformationCopy[this.removedElementIndex]);
        this.candidateInformation.shift();
        this.removedElementIndex = 0;
      }
    }
  }

  /* show previous candidate */
  previousCandidate() {
    for(let i=0; i < this.candidateInformationCopy.length; i++) {
      if(this.removedElementIndex == i && this.removedElementIndex + 1 !== this.candidateInformationCopy.length) {
        this.candidateInformation.unshift(this.candidateInformationCopy[this.removedElementIndex]);
        this.removedElementIndex = this.candidateInformationCopy.length - 1;
        this.candidateInformation.splice(this.removedElementIndex,1);
      }
    }
  }

}
