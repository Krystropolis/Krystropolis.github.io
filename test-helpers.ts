/**
 * Type-safe helper for accessing localStorage mock methods
 * This encapsulates the type assertion needed for Jest mock functions
 * 
 * Using this helper is a best practice because:
 * 1. It keeps type casting in one place
 * 2. It provides better type safety than `as any`
 * 3. It makes test code more readable and maintainable
 */
export function getMockedLocalStorage() {
  return localStorage as jest.Mocked<Storage> & {
    clear: jest.Mock
    setItem: jest.Mock
    getItem: jest.Mock
    removeItem: jest.Mock
  }
}
