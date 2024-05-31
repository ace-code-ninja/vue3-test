<template>
  <div class="alert-container top-9 w-full fixed">
    <transition-group name="alert">
      <div
        v-for="alert in alerts"
        :key="alert.id"
        :class="[
          'rounded-lg border-2 relative rounded w-3/5 py-4 mb-3 justify-between font-medium text-center ml-auto mr-auto',
          alert.type === 'error' && 'border-red-600 text-red-600',
          alert.transition
        ]"
      >
        {{ alert.message }}
      </div>
    </transition-group>
  </div>
  <slot />
</template>
  
<script lang="ts">
import { provide, ref } from 'vue';
import { alertInjectKey } from '../constants/injectionKeys'
import { Alert } from '../types/alert'

export default {
  name: 'AlertProvider',
  setup() {
    const alerts = ref<Alert[]>([]);

    const createAlert = (alert: Alert): void => {
      alert.transition = 'animate-alert_show_alert';
      alert.id = Date.now();
      alerts.value.push(alert);
      setTimeout(() => {
        if(alerts.value.indexOf(alert) > -1) destroyAlert(alert);
      }, alert.duration);
    }

    const destroyAlert = (alert: Alert): void => {
      const index = alerts.value.indexOf(alert);
      alerts.value[index].transition = 'animate-alert_hide_alert';
      setTimeout(() => alerts.value.splice(0, 1), 400);
    }

    const destroyAllAlerts = (): void => {
      alerts.value.map((item)=>{
        item.transition = 'animate-alert_hide_alert';
        return item;
      });
      setTimeout(() => alerts.value = [], 400);
    }

    provide(alertInjectKey, { createAlert, destroyAlert, destroyAllAlerts })

    return {
      alerts,
    };
  },
};
</script>
  