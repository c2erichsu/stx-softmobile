# stx-softmobile

- [x] 1. 畫面需依照示意圖實作並支援直向、橫向兩種模式。  
以RWD與Bootstrap實作

- [x] 2. 依照api回補的內容呈現在畫面，畫面支援上下滾動  
以BetterScroll實作，api fetch有blocked by CORS policy錯誤，暫時使用目錄裡的DATA，有註解fetch api相關code在HomeView.vue裡  
經查https://ithelp.ithome.com.tw/articles/10267360 可能是後端沒有開跨來源(?)

- [x] 3. 點擊列表圖卡，進入內容頁面。  
以Vue Router實作

- [ ] 4. 內容頁面僅支援直向模式。  
以screen.orientation.lock("portrait")實作，但開發者模式給了一個Android的錯誤:"is not available on this device"

- [x] 5. 圖片無法正確呈現時，請用預設圖檔呈現。  
以vue3-lazyload實作，預設圖檔使用https://file.coffee/u/bo8GXmoUP4goMI.jpg
- [x] 6. 開發架構: mvvm / mvc  
以Vue.js實作mvvm架構

加分項目：
- [x] 1. 滾動有使用動畫效果  
BetterScroll動畫效果

GitHub Pages: https://c2erichsu.github.io/stx-softmobile/

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
