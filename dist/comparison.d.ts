import { Operation } from './operation';
export declare class Comparison {
  private _selector;
  private _operation;
  constructor(selector: string, operation: Operation);
  toString(): string;
}
/**
 * Create comparison object
 *
 * @param selector Field name
 * @param operation Operation-instance
 * @returns Instance of Comparison
 *
 * @example
 * import {comparison, eq} from 'rsql-builder';
 *
 * const comp = comparison('field1', eq(200));  // 'field1==200'
 */
export default function comparison(selector: string, operation: Operation): Comparison;
