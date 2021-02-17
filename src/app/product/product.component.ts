import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { ProductDataService } from '../product-data.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productObject:any={};
  constructor(private activatedRoute:ActivatedRoute,private dataService:ProductDataService) { }

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.params.id);
    this.productObject=this.dataService.getProductById(this.activatedRoute.snapshot.params.id);
  }

}
