import { Comparison } from './comparison';
/**
 * Generate "and"-group of comparisons
 *
 * @param comparisons List of comparisons or strings (for comparision group)
 * @returns "and"-group string
 *
 * @example
 * import {and, comparison, eq, ge} from 'rsql-builder';
 *
 * const op = and(
 *   comparison('year', ge(1980)),
 *   comparision('director', eq('Quentin Tarantino'))
 * );  // 'year>=1980;director=="Quentin Tarantino"
 */
export default function and(...comparisons: Array<Comparison | string>): string;
