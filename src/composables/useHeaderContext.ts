import { inject, provide } from 'vue'

// Define the allowed header types
export const SLIM = 'slim'
export const CENTER = 'center'
export const NAVBAR = 'navbar'

// Create a shared type for all consumers
export type HeaderType = typeof SLIM | typeof CENTER | typeof NAVBAR

// Injection key (to avoid string literals)
const HeaderTypeKey = Symbol('HeaderType')

/**
 * Provide the current header type (used in <Header />)
 */
export function provideHeaderContext(type: HeaderType) {
  provide(HeaderTypeKey, type)
}

/**
 * Inject the current header type (used in nested components)
 */
export function useHeaderContext(): HeaderType {
  return inject<HeaderType>(HeaderTypeKey, SLIM)
}
