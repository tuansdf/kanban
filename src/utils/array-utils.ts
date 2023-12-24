export const ArrayUtils = {
  /**
   * Add an item, mutate the original array.
   */
  addAt: <T>(arr: T[], at: number, item: T) => {
    arr.splice(at, 0, item);
  },
  /**
   * Add an item, return a new array.
   */
  toAddAt: <T>(arr: T[], at: number, item: T): T[] => {
    const arrInFn = [...arr];
    ArrayUtils.addAt(arrInFn, at, item);
    return arrInFn;
  },
  /**
   * Remove an item, mutate the original array.
   */
  removeAt: <T>(arr: T[], at: number) => {
    arr.splice(at, 1);
  },
  /**
   * Remove an item, return a new array.
   */
  toRemoveAt: <T>(arr: T[], at: number): T[] => {
    const arrInFn = [...arr];
    ArrayUtils.removeAt(arrInFn, at);
    return arrInFn;
  },
  /**
   * Move an item to a new position, mutate the original array.
   */
  move: <T>(arr: T[], from: number, to: number) => {
    const itemToMove = arr[from];
    ArrayUtils.removeAt(arr, from);
    ArrayUtils.addAt(arr, to, itemToMove);
  },
  /**
   * Move an item to a new position, return a new array.
   */
  toMove: <T>(arr: T[], from: number, to: number): T[] => {
    const arrInFn = [...arr];
    ArrayUtils.move(arrInFn, from, to);
    return arrInFn;
  },
};
