import { Operation } from './operation';
/**
 * Create exists operation
 *
 * @param args Operation argument
 * @returns Exists operation
 *
 * @example
 * import {exists} from 'rsql-builder';
 *
 * const op = exists(
 *  true
 * );  // '=exists=true'
 */
export default function exists(value: boolean): Operation;
