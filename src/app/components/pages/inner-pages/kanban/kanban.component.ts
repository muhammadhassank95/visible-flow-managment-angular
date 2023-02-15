import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kanban',
  templateUrl: './kanban.component.html',
  styleUrls: ['./kanban.component.scss']
})
export class KanbanComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public kanbanData: Array<any> = [
    {
      statusName: 'Approved Task',
      data: [ 
        {
          title: 'Ticket #01222',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'low',
          type: '1'
        }
      ],
    },
    {
      statusName: 'Scoping',
      data: [
        {
          title: 'Ticket #00222',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'low',
          type: '1'
        }
      ],
    },
    {
      statusName: 'Planning',
      data: [
        {
          title: 'Ticket #00222',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'high',
          type: '1'
        },
        {
          title: 'Ticket #01033',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'med',
          type: '1'
        },
        {
          title: 'Ticket #01033',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'low',
          type: '1'
        },
      ],
    },
    {
      statusName: 'Scheduling',
      data: [
        {
          title: 'Ticket #100017',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'low',
          type: '1'
        }
      ],
    },
    {
      statusName: 'Executing',
      data: [
        {
          title: 'Ticket #100017',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          priority: 'low',
          type: '1'
        }
      ],
    },
  ]

  public completedBoard: Array<any> = [];
  public pickupGo: Array<any> = [];
  public pickupGoExecuting: Array<any> = [];

  public drop(event: CdkDragDrop<string[]>): void {
    console.error(event)
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    console.error('kanbanData',this.kanbanData)
    console.error('kanbanData B',this.completedBoard)
  }
  

}
