import { inject } from 'vue'
import { AlertApi, AlertType } from '../types/alert'
import { alertInjectKey } from '../constants/injectionKeys'

export const useAlert = () => {
  const alertApi = inject(alertInjectKey) as AlertApi;

  const addAlert = (type: AlertType, message: string, duration = 3000): void => {
    const alert = { id: Date.now(), type, message, duration }
    alertApi.createAlert(alert);
  }

  const removeAllAlerts = (): void => {
    alertApi.destroyAllAlerts();
  }

  return {
    addAlert,
    removeAllAlerts,
  }
}
