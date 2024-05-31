import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
import VueTypeImports from "vite-plugin-vue-type-imports"
import Components from "unplugin-vue-components/vite";
import Layouts from "vite-plugin-vue-layouts";

export default defineConfig({
  plugins: [
    vue(), 
    WindiCSS(),
    Layouts({
      layoutsDirs: "src/layouts",
      defaultLayout: "main",
  }),
    Components({
        dts: true,
        dirs: ["src/components", "src/elements"],
    }),
    VueTypeImports(),
  ],
  
})
