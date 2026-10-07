import {Component} from '@angular/core';
import {IonAvatar, IonBadge, IonCard, IonCardContent, IonCardHeader, IonCardTitle} from '@ionic/angular/standalone';

@Component({
  selector: 'app-about-team',
  templateUrl: './about-team.component.html',
  styleUrls: ['./about-team.component.scss'],
  imports: [IonCard, IonBadge, IonCardHeader, IonAvatar, IonCardTitle, IonCardContent],
})
export class AboutTeamComponent {
  teamMembers = [
    {
      name: 'Mr. H. Kishore ',
      avatar: '/assets/promotional/about/team/kish.jpg',
      title: 'STUDENT',
      bio: '',
    },
    {
      name: 'Mr. G. Vishwa Kumar',
      avatar: 'assets/promotional/about/team/vishwa.jpg',
      title: 'STUDENT',
      bio: '',
    },
    {
      name: 'Mr. S. Yogeshwaran',
      avatar: 'assets/promotional/about/team/yogesh.jpg',
      title: 'STUDENT',
      bio: '',
    },
  ];
}
