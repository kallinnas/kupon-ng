import {Coupon} from './coupon';

export class Company {
  public constructor(public id?: number,
                     public name?: string,
                     public imageURL?: string,
                     public coupons?: Coupon[]
  ) {
  }
}
