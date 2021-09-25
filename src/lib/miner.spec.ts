import { EntityNames } from './entity';
import { Miner } from './miner';

describe('Miner Test Suite', () => {
  it('Should return miner id', () => {
    const bob = new Miner(EntityNames.MinerBob);
    expect(bob.id).toEqual(1);
  });
});
