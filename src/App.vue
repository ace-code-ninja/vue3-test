<template>
  <div>
    <div class="text-4xl font-sans font-bold text-center fixed top-2/5 w-full text-green-700 animate-text_animation">
      This is a sample Vue3 project
    </div>
    <div class="flex items-end justify-center gap-6 w-screen h-screen">
      <div class="flex justify-center items-center mb-16" v-for="item in alertButtons" :key="item.message">
        <Button
        :button-infos="item"
        @next="clickHandle(item)"
        >
        {{ item.name }}
      </Button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAlert } from './composables/useAlert';
import { ref, Ref } from 'vue'
import { AlertMsg } from './types/alert'

const { addAlert, removeAllAlerts } = useAlert();

interface ShippingAddress {
  company?: string
  first_name: string
  last_name?: string
  address_1: string
  address_2?: string
  city?: string
  country_code?: string
  province?: string
  postal_code?: string
  phone?: string
}

const tempShippingAddress = {
  company: 'Acme',
  first_name: 'Arno',
  last_name: 'Willms',
  address_1: '14433 Kemmer Court',
  address_2: 'Suite 369',

  country_code: 'US',
  province: 'NY',

  phone: '1-212-555-1234',
}

function getShippingAddressLines(shippingAddress: ShippingAddress) {
  const lines: string[] = []

  // Write your code here
  
  // Concatenate first_name and last_name, and then add them
  shippingAddress.first_name ? lines.push(shippingAddress.first_name + (shippingAddress.last_name ? ` ${shippingAddress.last_name}` : '')) : null

  // Add company
  shippingAddress.company ? lines.push(shippingAddress.company) : null

  // Add address_1
  shippingAddress.address_1 ? lines.push(shippingAddress.address_1) : null

  // Add address_2
  shippingAddress.address_2 ? lines.push(shippingAddress.address_2) : null

  // Add the city, province, and postal_code line
  if (shippingAddress.city || shippingAddress.province || shippingAddress.postal_code) {
    let location = '';

    shippingAddress.city ? location += shippingAddress.city : null
    shippingAddress.province ? location += (shippingAddress.city ? `, ${shippingAddress.province}` : shippingAddress.province) : null
    shippingAddress.postal_code ? location += (shippingAddress.city || shippingAddress.province ? ` ${shippingAddress.postal_code}` : shippingAddress.postal_code) : null

    lines.push(location)
  }

  // Add country_code
  shippingAddress.country_code ? lines.push(shippingAddress.country_code) : null

  // Add phone
  shippingAddress.phone ? lines.push(shippingAddress.phone) : null

  console.log('lines', lines)

  return lines
}

const AlertButtons: AlertMsg[] = [
    {
        message: "Something went wrong...",
        name: "Show alert",
        type: "error",
        duration: 3000,
    },
    {
        message: "Something went wrong...",
        name: "Delete all alerts",
        type: "delete",
        duration: 3000,
    },
]
const alertButtons: Ref<AlertMsg[]> = ref(AlertButtons)

const clickHandle = (data: AlertMsg): void => {
  getShippingAddressLines(tempShippingAddress)
  if(data.type === "error") callAlert(data);
  else deleteAllAlerts();
}

const callAlert = (msg: AlertMsg): void => {
  addAlert(msg.type, msg.message, msg.duration);
}

const deleteAllAlerts = (): void => {
  removeAllAlerts();
}
</script>