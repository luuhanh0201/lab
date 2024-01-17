import { Component } from '@angular/core';
import { IMenu } from '../../interface/Menu';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menus: IMenu[] = [
    {
      id: 1,
      name: "Trang chủ",
      url: "",
      parent: 0
    },
    {
      id: 2,
      name: "Sản phẩm",
      url: "products",
      parent: 0
    },
    {
      id: 3,
      name: "Liên hệ",
      url: "contact",
      parent: 0
    },
    {
      id: 4,
      name: "About",
      url: "about",
      parent: 0
    }
  ]
}
