export {}
declare global {
  const useAlert: typeof import('./composables/useAlert')['useAlert']
  const useI18n: typeof import('vue-i18n')['useI18n']
  const watch: typeof import('vue')['watch']
  const watchEffect: typeof import('vue')['watchEffect']
  const watchPostEffect: typeof import('vue')['watchPostEffect']
  const watchSyncEffect: typeof import('vue')['watchSyncEffect']
};