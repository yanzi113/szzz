import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    createSvgIconsPlugin({
      // 这个是自己配置的图标路径，指出来（自己咋配置的咋来）
      iconDirs: [resolve(process.cwd(), 'src/assets/svg')],
      // 这个表示id，按这个来就对了
      symbolId: 'icon-[dir]-[name]',
  }),
  ],
  base: './',
  server: {             
    host: '0.0.0.0',	
    port: 8080,      
    open: true,
    hot:true,
  },
  resolve:{   
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias:[   
      {
        find:'@',
        replacement:resolve(__dirname,'src') 
      }
    ]
  }
})
