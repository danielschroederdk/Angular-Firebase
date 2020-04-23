import {Product} from "../shared/services/functions/src/models/product";

export class AddProduct {
  static readonly type = '[Product] Add';

  constructor(public payload: Product) {
  }
}
export class GetProducts{
  static readonly type = '[Product] Get';
}

export class UpdateProduct {
  static readonly type = '[Product] Update';

  constructor(public payload: Product, public id: string) {
  }
}

export class DeleteProduct {
  static readonly type = '[Product] Delete';

  constructor(public id: string) {
  }
}

export class SetSelectedProduct {
  static readonly type = '[Product] Set';

  constructor(public payload: Product) {
  }
}


