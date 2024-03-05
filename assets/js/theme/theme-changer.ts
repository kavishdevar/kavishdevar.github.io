// Create custom element with Hue, Chroma, and Tone inputs

import * as MCH from './material-color-helpers.js'
import '@material/web/slider/slider.js'
import { MdSlider } from '@material/web/slider/slider.js'
function saveHex(hex: string) {
    localStorage.setItem('sourceColor', hex)
}
function getHex() {
    return localStorage.getItem('sourceColor')
}
class ThemeChanger extends HTMLElement {
    constructor() {
        super()
    }
    setTheme(sourceColor: string = localStorage.getItem('sourceColor') || MCH.hexFromHct(100, 50, 50), darkmode: boolean = localStorage.getItem('darkmode') == 'true'? true : localStorage.getItem('darkmode') == 'auto' ?window.matchMedia('(prefers-color-scheme: dark)').matches : false) {
        if (sourceColor != null) {
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(sourceColor, darkmode))
        }
    }
    connectedCallback() {
        var darkmode = localStorage.getItem('darkmode') == 'true'? true : localStorage.getItem('darkmode') == 'auto' ?window.matchMedia('(prefers-color-scheme: dark)').matches : false
        
        const style = document.createElement('style')
        style.textContent = `
            :host {
                display: flex;
                flex-direction: column;
                align-items: center;
                padding: 1em;
                margin: 1em;
                width: 200px;
            }
            input {
                height: 2em;
                border-radius: 9999px;
                background: var(--md-sys-color-surface-variant);
                border: 0;
                opacity: 0;
                height: 50px;
                width: 50px;
            }

            .hex-source-div {
                margin-bottom: 20px;
                width: 100%;
                border-radius: 20px;
                background: var(--md-sys-color-surface-variant);
                padding: 1em;
            }

            .sliders {
                padding: 1em;
                width: 100%;
                border-radius: 20px;
                background: var(--md-sys-color-surface-variant);
            }
            label {
                font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
                font-size: 1.2em;
                margin: 1em;
                color: var(--md-sys-color-on-surface-variant);
            }
            .hexlabel {
                vertical-align: middle;
                display: inline-block;
                margin-left: 17px;
                margin-right: 17px;
            }
            md-slider {
                width: 100%;
            }
            .hue-gradient {
                background:linear-gradient(to right, #e7007d 0%, #e90070 1%, #ea0064 2%, #eb0057 3%, #ec044a 4%, #ec0e3d 5%, #eb162f 6%, #ea1c1f 7%, #e92207 8%, #e03400 9%, #d84200 10%, #d04b00 11%, #ca5100 12%, #c45600 13%, #bf5b00 14%, #ba5e00 15%, #b56100 16%, #b16400 17%, #ad6600 18%, #a96800 19%, #a56a00 20%, #a26c00 21%, #9e6e00 22%, #9b7000 23%, #977100 24%, #937300 25%, #907400 26%, #8c7600 27%, #887700 28%, #847800 29%, #7f7a00 30%, #7a7b00 31%, #757d00 32%, #6f7e00 33%, #698000 34%, #618200 35%, #588300 36%, #4c8500 37%, #3d8700 38%, #238a00 39%, #008b18 40%, #008a2f 41%, #008a3d 42%, #008948 43%, #008951 44%, #008858 45%, #00885f 46%, #008865 47%, #00876a 48%, #00876f 49%, #008673 50%, #008677 51%, #00867b 52%, #00857f 53%, #008583 54%, #008586 55%, #00848a 56%, #00848d 57%, #008491 58%, #008394 59%, #008398 60%, #00829c 61%, #00829f 62%, #0081a3 63%, #0081a7 64%, #0080ac 65%, #007fb1 66%, #007fb6 67%, #007ebb 68%, #007dc1 69%, #007bc8 70%, #007ad0 71%, #0078da 72%, #0075e5 73%, #0072f2 74%, #126eff 75%, #326bff 76%, #4568ff 77%, #5365ff 78%, #5f62ff 79%, #695fff 80%, #735bff 81%, #7d57ff 82%, #8653ff 83%, #8e4eff 84%, #9748ff 85%, #a040ff 86%, #aa37ff 87%, #b329ff 88%, #be0dff 89%, #c400f6 90%, #ca00ea 91%, #ce00de 92%, #d300d2 93%, #d600c6 94%, #da00ba 95%, #dd00ad 96%, #e000a1 97%, #e20095 98%, #e50089 99%);
                height: 25px;
                width: 90%;
                border-radius: 28px;
                margin: 15px
            }
            .chroma-gradient {
                background: linear-gradient(to right, gray, yellow);
                height: 25px;
                width: 90%;
                border-radius: 28px;
                margin: 15px
            }
            .tone-gradient {
                background: linear-gradient(to right, black, white);
                height: 25px;
                width: 90%;
                border-radius: 28px;
                margin: 15px
            }
            
            .hex-input-div {
                height: 50px;
                display: inline-block;
                width: 50px;
                border-radius: 99999px;
                vertical-align: middle;
                background: var(--md-sys-color-primary);
            }
        `
        const shadow = this.attachShadow({ mode: 'open' })
    
        shadow.appendChild(style)
        
        const hexSource = document.createElement('div')
        hexSource.classList.add('hex-source-div')
        
        const hexInputDiv = document.createElement('div')
        hexInputDiv.classList.add('hex-input-div')

        const hexlabel = document.createElement('label')
        hexlabel.textContent = 'Color Source'
        hexlabel.classList.add('hexlabel')
        
        const hexin = document.createElement('input')
        hexin.type = 'color'
        hexin.value = MCH.hexFromHct(100, 50, 50)
        

        hexInputDiv.appendChild(hexin)
        hexSource.appendChild(hexlabel)
        hexSource.appendChild(hexInputDiv)
        shadow.appendChild(hexSource)
        
        const sliders = document.createElement('div')
        sliders.classList.add('sliders')
        shadow.appendChild(sliders)


        const hueLabel = document.createElement('label')
        hueLabel.textContent = 'Hue'
        const hue = new MdSlider()
        const hueGradient = document.createElement('div')
        hueGradient.classList.add('hue-gradient')
        const chromaLabel = document.createElement('label')
        chromaLabel.textContent = 'Chroma'
        const chroma = new MdSlider()
        const chromaGradient = document.createElement('div')
        chromaGradient.classList.add('chroma-gradient')
        const toneLabel = document.createElement('label')
        toneLabel.textContent = 'Tone'
        const tone = new MdSlider()
        const toneGradient = document.createElement('div')
        toneGradient.classList.add('tone-gradient')
        hue.labeled = true
        hue.value = 100
        hue.min = 0
        hue.max = 360
        hue.step = 1
        
        chroma.labeled = true
        chroma.value = 50
        chroma.min = 0
        chroma.max = 100
        chroma.step = 1

        tone.labeled = true
        tone.value = 50
        tone.min = 0
        tone.max = 100
        tone.step = 1

        sliders.appendChild(hueLabel)
        sliders.appendChild(hue)
        sliders.appendChild(hueGradient)
        sliders.appendChild(chromaLabel)
        sliders.appendChild(chroma)
        sliders.appendChild(chromaGradient)
        sliders.appendChild(toneLabel)
        sliders.appendChild(tone)
        sliders.appendChild(toneGradient)

        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            darkmode = event.matches
            var hex = MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value))
            hexInputDiv.style.backgroundColor = hex
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
            saveHex(hex)
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value)), darkmode))
        });

        hue.addEventListener('input', (_) => {
            var hex = MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value))
            hexInputDiv.style.backgroundColor = hex
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
            saveHex(hex)
            hexin.value = hex
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value)), darkmode))
        })

        chroma.addEventListener('input', (_) => {
            var hex = MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value))
            hexInputDiv.style.backgroundColor = hex
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
            saveHex(hex)
            hexin.value = hex
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value)), darkmode))
        })

        tone.addEventListener('input', (_) => {
            var hex = MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value))
            hexInputDiv.style.backgroundColor = hex
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
            saveHex(hex)
            hexin.value = hex
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(MCH.hexFromHct(Number(hue.value), Number(chroma.value), Number(tone.value)), darkmode))
        })

        hexin.addEventListener('input', (_) => {
            hexInputDiv.style.backgroundColor = hexin.value
            var hct = MCH.hctFromHex(hexin.value)
            hue.value = hct.hue
            chroma.value = hct.chroma
            tone.value = hct.tone
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
            saveHex(hexin.value)
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(hexin.value, darkmode))
        })
        
        var sourceColor = getHex()

        if (sourceColor != null) {
            MCH.applyMaterialTheme(document, MCH.themeFromSourceColor(sourceColor, darkmode))
            hexin.value = sourceColor
            hexInputDiv.style.backgroundColor = sourceColor
            var hct = MCH.hctFromHex(sourceColor)
            hue.value = hct.hue
            chroma.value = hct.chroma
            tone.value = hct.tone
            var chromabg = `linear-gradient(to right, white, ${MCH.hexFromHct(Number(hue.value), 100, 50)})`
            chromaGradient.style.background = chromabg
        }

    }
}
customElements.define('theme-changer', ThemeChanger)

// export { ThemeChanger }