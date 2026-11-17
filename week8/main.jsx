import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ClickCounter from './Counter'
import EmojiCounter from './WeatherMoodWidget'
createRoot(document.getElementById('root')).render(
 <StrictMode>
 <ClickCounter/>
 <EmojiCounter pic='rainy'/>
<EmojiCounter pic='sunny'/>
<EmojiCounter pic='Cloudy'/>
 </StrictMode>,
) 
