import { type MaybeElementRef, unrefElement } from '@vueuse/core'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function useGSAP(
  el: MaybeElementRef,
  fn: gsap.ContextFunc
): { context: MaybeRef<gsap.Context>, start: () => void, revert: () => void } {
  const context = ref() as MaybeRef<gsap.Context>

  const start = () => {
    const target = unrefElement(el)
    context.value = gsap.context(fn, target!)
  }

  const revert = () => {
    if (context.value) context.value.revert()
  }

  onMounted(start)

  onUnmounted(() => {
    useNuxtApp().hooks.hook('page:transition:finish', () => {
      if (context.value) context.value.revert()
    })
  })

  return {
    context,
    revert,
    start
  }
}
