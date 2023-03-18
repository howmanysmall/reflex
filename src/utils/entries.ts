/**
 * Casts an object to a Map type. This is a workaround for challenges with
 * iterating over an object or array.
 * @param object The object to cast.
 * @returns The object as a Map.
 */
export function entries<K, V>(object: any): Map<K, V>;
export function entries<T>(object: T): Map<keyof T, T[keyof T]>;
export function entries<K extends string | number | symbol, V>(object: Record<K, V>): Map<K, V>;
export function entries<K, V>(object: any): Map<K, V> {
	return object as never;
}
