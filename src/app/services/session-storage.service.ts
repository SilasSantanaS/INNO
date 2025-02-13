import { Injectable } from '@angular/core';

/**
 * Service for interacting with the browser's session storage.
 * Provides methods to set, get, and remove items from session storage.
 */
@Injectable({
	providedIn: 'root',
})
export class SessionStorageService {
	/**
	 * Stores a value in session storage under the specified key.
	 * @param key - The key under which the value will be stored.
	 * @param value - The value to store. It will be serialized to JSON.
	 */
	set<T = any>(key: string, value: T) {
		sessionStorage.setItem(key, JSON.stringify(value));
	}

	/**
	 * Retrieves a value from session storage by its key.
	 * @param key - The key of the value to retrieve.
	 * @returns The value associated with the key, or null if the key does not exist.
	 */
	get<T = any>(key: string): T | null {
		const item = sessionStorage.getItem(key);
		return item ? (JSON.parse(item) as T) : null;
	}

	/**
	 * Removes an item from session storage by its key.
	 * @param key - The key of the item to remove.
	 */
	remove(key: string) {
		sessionStorage.removeItem(key);
	}
}
