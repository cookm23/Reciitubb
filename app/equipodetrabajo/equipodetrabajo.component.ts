import { Component } from '@angular/core';

@Component({
  selector: 'app-equipodetrabajo',
  templateUrl: './equipodetrabajo.component.html',
  styleUrls: ['./equipodetrabajo.component.css']
})
export class EquipodetrabajoComponent {
  teamMembers = [
    {
      name: 'Jesus Ortiz',
      role: 'Plomero/Fontanero',
      imageUrl: '../../assets/img/p1.png',
      facebookUrl: 'https://www.facebook.com/profile.php?id=100092347375784',
      instagramUrl: 'https://www.instagram.com/recitubb/'
    },
    {
      name: 'Emilio Kabande',
      role: 'Asistente de plomero',
      imageUrl: '../../assets/img/p3.png',
      facebookUrl: 'https://www.facebook.com/profile.php?id=100092347375784',
      instagramUrl: 'https://www.instagram.com/recitubb/'
    },
    {
      name: 'Antonio Martínez',
      role: 'Instalador de accesorios ',
      imageUrl: '../../assets/img/hh.webp',
      facebookUrl: 'https://www.facebook.com/profile.php?id=100092347375784',
      instagramUrl: 'https://www.instagram.com/recitubb/'
    },
    {
      name: 'Valentín Valencia',
      role: 'Especialista en sistemas de tuberías:',
      imageUrl: '../../assets/img/jj.webp',
      facebookUrl: 'https://www.facebook.com/profile.php?id=100092347375784',
      instagramUrl: 'https://www.instagram.com/recitubb/'
    }
  ];

}
