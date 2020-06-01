/**
 * Operators signs
 */
export declare enum Operators {
    EQUAL = '==',
    NOT_EQUAL = '!=',
    LESS_THAN = '<',
    LESS_OR_EQUAL = '<=',
    GREATER_THAN = '>',
    GREATER_OR_EQUAL = '>=',
    IN = '=in=',
    OUT = '=out='
}
export declare class Operation {
  protected args: any;
  protected operator: Operators | string;
  constructor(args: any, operator?: Operators | string);
  toString(): string;
}
export declare class ListOperation extends Operation {
  toString(): string;
}
