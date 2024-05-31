import { InjectionKey } from 'vue';
import { AlertApi } from '../types/alert'; 

export const alertInjectKey: InjectionKey<AlertApi> = Symbol('customAlert');