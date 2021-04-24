import { Injectable } from '@angular/core';

export interface ISlides{ 
  id: number,
  slideimage: string,
}
export interface ICategory {
  id: number,
  name: string,
  categoryimage:string
}
export interface ICategory1 {
  id: number,
  name: string,
  categoryimage1:string
}

export interface ICategory2 {
  id: number,
  name: string,
  categoryimage2:string
}
export interface ICategory3 {
  id: number,
  name: string,
  categoryimage3:string
}

@Injectable({
  providedIn: 'root'
})

export class DataService {
 
  constructor() { }

  getSlides() {
  let slides = [];

  let slide1: ISlides = {
    id: 1,
  slideimage: '../../assets/slides/ideas.jpg'
  }
    let slide2: ISlides = {
    id: 2,
  slideimage:  '../../assets/slides/images.jpg'
  }
  let slide3: ISlides = {
    id: 2,
  slideimage:  '../../assets/slides/men.jpg'
  }
 
  slides.push(slide1, slide2,slide3);

  return slides;
}

getCategories() {
  let categories = [];

  let cat1: ICategory = {
    id: 1,
    name:'Private Limited Company',
   categoryimage: '../assets/slides/PrivateLimited.jpg'
  }
  let cat2: ICategory = {
    id: 2,
    name:'One Person Company',
    categoryimage:  '../assets/slides/one-person.jpg'
  }
  let cat3: ICategory = {
    id: 3,
    name:'Public Limited Company',
    categoryimage:  '../../assets/slides/Public-Limited-Company.jpg'
  }
  let cat4: ICategory = {
    id: 4,
    name:'Limited Liability Partnership',
    categoryimage:  '../../assets/slides/partnership.jpg'
  }
  let cat5: ICategory = {
    id: 5,
    name:'GST Registration',
    categoryimage:  '../../assets/slides/gst.jpg'
  }
  let cat6: ICategory = {
    id: 6,
    name:'Section 8 NGO Company',
    categoryimage:  '../../assets/slides/NGO.jpg'
  }
  
  categories.push(cat1,cat2,cat3,cat4,cat5,cat6);

  return categories;
}

getCategories1() {

  let categories1 = [];

  let cat1: ICategory1 = {
    id: 1,
    name:' ROC Return Filing for Pvt.Ltd',
   categoryimage1: '../../assets/slides/rocreturn.jpg'
  }
  let cat2: ICategory1 = {
    id: 2,
    name:'ROC Return Filing for OPC',
   categoryimage1: '../../assets/slides/roc-opc.jpg'
  }
  let cat3: ICategory1 = {
    id: 3,
    name:'ROC Return Filing for LLP',
   categoryimage1: '../../assets/slides/roc-llp.jpg'
  }
  let cat4: ICategory1 = {
    id: 4,
    name:'Appointment of Director',
   categoryimage1: '../../assets/slides/directors.jpg'
  }
  let cat5: ICategory1 = {
    id: 5,
    name:'Resignation of Directors',
   categoryimage1: '../../assets/slides/resignation.jpg'
  }
  let cat6: ICategory1 = {
    id: 6,
    name:'Increasing Capital of Company',
   categoryimage1: '../../assets/slides/capital.jpg'
  }
  let cat7: ICategory1 = {
    id: 7,
    name:'Closure of Pvt.Ltd',
   categoryimage1: '../../assets/slides/closed.jpg'
  }
  
  categories1.push(cat1,cat2,cat3,cat4,cat5,cat6,cat7);

  return categories1;
}

getCategories2() {

  let categories2 = [];

  let cat1: ICategory2 = {
    id: 1,
    name:' Trademark Registration',
   categoryimage2: '../../assets/slides/trademark.jpg'
  }
  let cat2: ICategory2 = {
    id: 2,
    name:'Renew your Trademark',
   categoryimage2: '../../assets/slides/trade-renewal.jpg'
  }
  let cat3: ICategory2 = {
    id: 3,
    name:'Sell your Trademrk',
   categoryimage2: '../../assets/slides/sell.jpg'
  }
  let cat4: ICategory2 = {
    id: 4,
    name:'License your Trademark',
   categoryimage2: '../../assets/slides/license.jpg'
  }
  let cat5: ICategory2 = {
    id: 5,
    name:'Copyright Registration',
   categoryimage2: '../../assets/slides/copyright.jpg'
  }
 
  categories2.push(cat1,cat2,cat3,cat4,cat5);

  return categories2;
}

getCategories3() {

  let categories3 = [];

  let cat1: ICategory3 = {
    id: 1,
    name:'ISO Certification',
   categoryimage3: '../../assets/slides/isocertication.jpg'
  }
  let cat2: ICategory3 = {
    id: 2,
    name:'MSME Registration',
   categoryimage3: '../../assets/slides/msme-registration.jpg'
  }
    
  categories3.push(cat1,cat2);

  return categories3;
}

}
