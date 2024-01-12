import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard';

function RandomQuote() {
    let quotes=[];
    async function loadQuotes(){
        const response = await fetch("https://type.fit/api/quotes");
        quotes = await response.json();
    }
    const [quote,setQuote] = useState({
        text : "Human being can do anything !",
        author : "Fenil Vaghasiya"
    })
    const [copied,setCopied] = useState(false);

    const random = () =>{
        const select = quotes[Math.floor(Math.random()*quotes.length)];
        setQuote(select);
    }

    const twitter = () =>{
        window.open(`https://twitter.com/intent/tweet?text=${quote.text} - ${quote.author}`)
    }
    const copytext = () =>{

    }
    const voicetext = () =>{

    }
    loadQuotes();
  return (
    <div className='bg-blue-500 h-screen flex justify-center items-center'>
        <div className="card h-2/5 w-2/6 rounded-xl">
            <div className='h-1/4 text-center flex justify-center items-center rounded-xl'>
                <h1 className='text-3xl font-bold'>Quote Of The Day</h1>
            </div>
            <div className='h-2/4 flex flex-col gap-10 justify-center items-center'>
                <p className='text-lg'>"{quote.text}"</p>
                <h4 className='text-right font-semibold text-xl'>- {quote.author}</h4>
            </div>
            <hr />
            <div className='h-1/4 flex items-center justify-around rounded-xl'>
                <div className='flex justify-center items-center gap-4'>
                    <button className='btn btn-primary' onClick={()=>{voicetext()}}>V</button>
                    <CopyToClipboard text={quote.text} onCopy={()=>setCopied(true)}>
                        <button className='btn {copied ? btn-primary : btn-success}' onClick={()=>{copytext()}}>C</button>
                    </CopyToClipboard>
                    <button className='btn btn-primary' onClick={()=>{twitter()}}>T</button>
                </div>
                <div>
                    <button className='btn btn-primary rounded-3xl' onClick={()=>{random()}}>New Quote</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default RandomQuote