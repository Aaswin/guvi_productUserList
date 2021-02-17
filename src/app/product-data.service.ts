import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {
  data=[
    {
      id:1,
      name:"pro1",
      image:"http://placehold.it/200*200",
      price:200,
      description:"description for product 1"
    },
    {
      id:2,
      name:"pro2",
      image:"http://placehold.it/200*200",
      price:300,
      description:"description for product 2"
    },
    {
      id:3,
      name:"pro3",
      image:"http://placehold.it/200*200",
      price:250,
      description:"description for product "
    },
    {
      id:4,
      name:"pro4",
      image:"http://placehold.it/200*200",
      price:310,
      description:"description for product "
    }
  ]

  constructor() { }
  getAllProducts():Array<Object>
  {
    return this.data;
  }
  getProductById(id:number)
  {
    return  this.data.find(p=>p.id==id);
  }
  deleteProductById(i:any)
  {

   const j=this.data.findIndex(x=>x.id==i);
    console.log(i,j,this.data[j]);
   this.data.splice(j,1);
  }
}
