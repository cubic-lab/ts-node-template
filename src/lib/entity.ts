export enum EntityNames {
  MinerBob = 1,
  Elsa = 2,
}

export abstract class BaseGameEntity {
  private _id = 0;
  private static _iNextValidId = 0;

  public constructor(name: EntityNames) {
    this.setId(name);
  }

  public setId(val: number): void {
    if (val <= BaseGameEntity._iNextValidId) {
      throw Error('<BaseGameEntity::SetID>: invalid ID');
    }

    this._id = val;
    BaseGameEntity._iNextValidId = this._id + 1;
  }

  public abstract update(): void;

  public abstract handleMessage(): void;

  public get id(): number {
    return this._id;
  }
}
