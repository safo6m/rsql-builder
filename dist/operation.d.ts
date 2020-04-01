/**
 * Operators signs
 */
export declare enum Operators {
    EQUAL = '==',
    NOT_EQUAL = '!=',
    LESS_THAN = '<',
    LESS_OR_EQUAL = '<=',
    LIKE = '=like=',
    GREATER_THAN = '>',
    GREATER_OR_EQUAL = '>=',
    IN = '=in=',
    OUT = '=out='
}
export declare class Operation {
  private _args;
  private _operator;
  constructor(args: any, operator?: Operators);
  toString(): string;
}
