import { Component, OnInit } from '@angular/core';

import {Dish } from '../shared/dish';

const DISHES: Dish[] = [
                        {
                          name: 'Uthappizza',
                          image: '/assets/images/uthappizza.png',
                          category: 'mains',
                          label: 'Hot',
                          price: '4.99',
                          description: 'A unique combination of Indian Uthappam .'
                        },
                        {
                          name: 'Zucchipakoda',
                          image: '/assets/images/zucchipakoda.png',
                          category: 'appetizer',
                          label: '',
                          price: '1.99',
                          description: 'Deep fried Zucchini coated with mildly spiced Chickpea flour batter .'
                        },
                        {
                          name: 'Vadonut',
                          image: '/assets/images/vadonut.png',
                          category: 'appetizer',
                          label: 'New',
                          price: '1.99',
                          description: 'A quintessential ConFusion experience, is it a vada or is it a donut?'
                        },
                        {
                          name: 'ElaiCheese Cake',
                          image: '/assets/images/elaicheesecake.png',
                          category: 'dessert',
                          label: '',
                          price: '2.99',
                          description: 'A delectable, semi-sweet New York Style Cheese Cake, Indian cardamoms'
                        }
                      ];


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;

  selectedDish: Dish = DISHES[0];
  constructor() { }

  ngOnInit() {
  }

}
